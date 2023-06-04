import { BsSearch } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { doctorsdata } from "./../utils/doctorsdata";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { AnimatedWords } from "../components/Animations";
import TransitionEffect from "../components/TransitionEffect";
import { Helmet } from "react-helmet";

export default function FindDoctors() {
  const [docs, setDocs] = useState(null);
  const [pinCode, setPinCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pinCode.trim().length) {
      toast.error("Please enter a pin code");
      return false;
    }
    if (pinCode.trim().length !== 6) {
      toast.error("Please enter a valid pin code");
      return false;
    }
    const searchTerm = doctorsdata.filter((item) => {
      return item.address.includes(pinCode);
    });
    setDocs(searchTerm);
  };

  useEffect(() => {
    setDocs(doctorsdata);
  }, []);
  return (
    <>
      <Helmet>
        <title>Locate nearby doctors for vaccination | GCCPL</title>
      </Helmet>
      <TransitionEffect />
      <section className="section-LocateDoctors section-page flex items-start justify-start relative">
        <div className="container mx-auto px-4 md:px-10 sm:px-4">
          <h1 className="heading1 mb-4">
            <AnimatedWords title="Locate nearby doctors for vaccination" />
          </h1>
          <div>
            <form onSubmit={handleSubmit} className="w-1/2 flex bg-white mb-6">
              <div className="w-12 h-12 shrink-0 bg-white text-lime-500 flex items-center justify-center font-bold text-2xl">
                <MdLocationPin />
              </div>
              <input
                type="number"
                className="w-full h-12 border-0 outline-none rounded-none pr-4 appearance-none"
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter Pin Code"
              />
              <button
                type="submit"
                className="w-12 h-12 shrink-0 bg-orange-500 text-white flex items-center justify-center font-bold text-xl"
              >
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex gap-2 text-white">
              {`Showing ${docs?.length} doctors`}
              <div
                onClick={() => setDocs(doctorsdata)}
                className="underline cursor-pointer"
              >
                Show All Doctors
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {docs?.length &&
                docs.map((item) => {
                  return <DocItem key={item.id} item={item} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export const DocItem = ({ item }) => {
  return (
    <div className="bg-white p-3">
      <div className="font-semibold text-orange-500">{item.name}</div>
      <div className="text-sm">Address: {item.address}</div>
      <div className="text-sm">Contact: {item.contact}</div>
    </div>
  );
};
