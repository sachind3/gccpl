import MAINLOGO from "./../assets/logos/main_logo.png";
import GCCPLLOGO from "./../assets/logos/gccpl_logo.png";
import FBLOGO from "./../assets/images/fb.png";
import INSTALOGO from "./../assets/images/insta.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="bg-teal-500 shadow-2xl fixed top-0 left-0 z-10 w-full">
      <div className="container mx-auto px-4 flex justify-between">
        <nav className="flex divide-x-2 divide-teal-600">
          <div className="navLink bg-[#263677]">
            <Link to="/">
              <img
                src={MAINLOGO}
                alt="main logo"
                className="h-[90px] 2xl:h-[90px] xl:h-16 w-auto"
              />
            </Link>
          </div>
          <div
            className={`navLink has_dropdown ${
              location.pathname.includes("pnemonia/") && "bg-lime-500"
            }`}
          >
            <NavLink to="/pnemonia/what-is-pnemonia">Pneumonia</NavLink>
            <div className="dropdown">
              <NavLink
                to="/pnemonia/what-is-pnemonia"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                What is Pneumonia?
              </NavLink>
              <NavLink
                to="/pnemonia/types-of-pnemonia"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Types of Pneumonia
              </NavLink>
              <NavLink
                to="/pnemonia/symptoms-and-signs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Symptoms & Signs
              </NavLink>
              <NavLink
                to="/pnemonia/complications-of-pnemonia"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Complications of Pneumonia
              </NavLink>
            </div>
          </div>
          <div
            className={`navLink  ${
              location.pathname.includes("disease-burden") && "bg-lime-500"
            }`}
          >
            <NavLink to="/disease-burden">
              Disease
              <br />
              Burden
            </NavLink>
          </div>
          <div
            className={`navLink has_dropdown ${
              location.pathname.includes("risk/") && "bg-lime-500"
            }`}
          >
            <NavLink to="/risk/risk-factor">
              Risk
              <br />
              Factor
            </NavLink>
            <div className="dropdown">
              <NavLink
                to="/risk/risk-score"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Risk Score
              </NavLink>
              <NavLink
                to="/risk/risk-factor"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Risk Factors
              </NavLink>
            </div>
          </div>
          <div
            className={`navLink has_dropdown ${
              location.pathname.includes("patient/") && "bg-lime-500"
            }`}
          >
            <NavLink to="/patient/preventive-techniques">
              Preventive
              <br />
              Techniques
            </NavLink>
            <div className="dropdown">
              <NavLink
                to="/patient/patient-awareness"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Patient Awareness
              </NavLink>
            </div>
          </div>
          <div
            className={`navLink has_dropdown ${
              location.pathname.includes("pneumococcal-vaccines/") &&
              "bg-lime-500"
            }`}
          >
            <NavLink to="/pneumococcal-vaccines/types">
              Pneumococcal
              <br />
              Vaccines
            </NavLink>
            <div className="dropdown">
              <NavLink
                to="/pneumococcal-vaccines/types"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Types
              </NavLink>
              <NavLink
                to="/pneumococcal-vaccines/benefits"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "!bg-orange-600" : ""
                }
              >
                Benefits
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="flex gap-2">
          <NavLink
            to={"https://gccpl.com/"}
            target="_blank"
            className="bg-white flex items-center justify-center px-3"
          >
            <img src={GCCPLLOGO} alt="gccpl logo" priority="true" />
          </NavLink>
          <NavLink
            to="https://www.facebook.com/Vaximune/"
            target="_blank"
            className="self-center"
          >
            <img src={FBLOGO} alt="fb" className="w-11 xl:w-8" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/vaximune/"
            target="_blank"
            className="self-center"
          >
            <img src={INSTALOGO} alt="insta" className="w-11 xl:w-8" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
