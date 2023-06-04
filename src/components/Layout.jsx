import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import quickenquiry from "./../assets/images/quickenquiry.png";
// import locatedoctor from "./../assets/images/locatedoctor.png";
import DOCUNIT from "./../assets/images/ctaBtn.png";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="fixed bottom-20 z-20 flex bg-lime-500 items-center justify-center text-sm text-white font-semibold left-[-125px] hover:left-0 duration-500 ease-out cursor-pointer">
        <Link to={"mailto:pmt1@gccpl.com"} className="px-3">
          Quick Enquiry
        </Link>
        <img
          src={quickenquiry}
          alt="quickenquiry"
          className="w-10 h-10 lg:w-12 lg:h-12 xl:w-[52px] xl:h-[52px] 2xl:w-14 2xl:h-14"
        />
      </div>
      {/* <div className="fixed bottom-4 z-20 flex bg-orange-500 items-center justify-center text-sm text-white font-semibold left-[-295px] hover:left-0 duration-500 ease-out cursor-pointer">
        <Link to={"/find-doctors"} className="px-3">
          Locate Nearby Doctor For Vaccination
        </Link>
        <img src={locatedoctor} alt="locatedoctor" className="h-14 w-14" />
      </div> */}
      <Link to="/references" className="referenceDiv">
        <div>References</div>
      </Link>

      <Link
        to={"/find-doctors"}
        className="fixed bottom-4 z-20 right-3 cursor-pointer w-[80px]  xl:w-[150px] lg:w-[100px] md:w-[80px]"
      >
        <img src={DOCUNIT} alt="img" />
      </Link>
    </>
  );
}
