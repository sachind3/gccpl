import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import quickenquiry from "./../assets/images/quickenquiry.png";
import locatedoctor from "./../assets/images/locatedoctor.png";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="fixed bottom-16 z-20 flex bg-lime-500 items-center justify-center text-sm text-white font-semibold left-[-125px] hover:left-0 duration-500 ease-out cursor-pointer">
        <Link to={"mailto:pmt1@gccpl.com"} className="px-3">
          Quick Nnquiry
        </Link>
        <img src={quickenquiry} alt="quickenquiry" className="h-10 w-10" />
      </div>
      <div className="fixed bottom-4 z-20 flex bg-orange-500 items-center justify-center text-sm text-white font-semibold left-[-293px] hover:left-0 duration-500 ease-out cursor-pointer">
        <Link to={"/find-doctors"} className="px-3">
          Locate Nearby Doctor For Vaccination
        </Link>
        <img src={locatedoctor} alt="locatedoctor" className="h-10 w-10" />
      </div>
      <Link to="/references" className="referenceDiv">
        <div>References</div>
      </Link>
    </>
  );
}
