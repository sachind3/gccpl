import MAINLOGO from "./../assets/logos/main_logo.png";
import GCCPLLOGO from "./../assets/logos/gccpl_logo.png";
import FBLOGO from "./../assets/images/fb.png";
import INSTALOGO from "./../assets/images/insta.png";
import LinkedinLOGO from "./../assets/images/linkedin.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="bg-teal-500 shadow-2xl fixed top-0 left-0 z-10 w-full h-[60px] 2xl:h-[90px] xl:h-[80px] lg:h-[84px] md:h-[84px]">
        <div className="container mx-auto px-4 md:px-8 sm:px-4 flex justify-between h-full">
          <nav className="flex divide-x-2 divide-teal-600">
            <div className="navLink bg-[#263677] !flex">
              <Link
                to="/"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={MAINLOGO}
                  alt="main logo"
                  width={164}
                  height={89}
                  className="w-full h-full"
                  // className="h-[36px] 2xl:h-[90px] xl:h-16 lg:h-[36px] w-auto"
                />
              </Link>
            </div>
            <div
              className={`navLink has_dropdown  ${
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
              className={`navLink   ${
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
              className={`navLink  has_dropdown ${
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
              className={`navLink  has_dropdown ${
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
              className={`navLink  ${
                location.pathname.includes("pneumococcal-vaccines") &&
                "bg-lime-500"
              }`}
            >
              <NavLink to="/pneumococcal-vaccines">
                Pneumococcal
                <br />
                Vaccines
              </NavLink>
            </div>
          </nav>
          <div className="gap-2 hidden lg:flex md:hidden">
            <NavLink
              to={"https://gccpl.com/"}
              target="_blank"
              className="bg-white flex items-center justify-center w-full h-full"
            >
              <img
                src={GCCPLLOGO}
                alt="gccpl logo"
                priority="true"
                className="w-fit h-fit"
              />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/Vaximune/"
              target="_blank"
              className="self-center"
            >
              <img
                src={FBLOGO}
                alt="facebook"
                width={44}
                height={44}
                className="w-7 2xl:w-11 xl:w-9 lg:w-7"
              />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/vaximune/"
              target="_blank"
              className="self-center"
            >
              <img
                src={INSTALOGO}
                alt="instagram"
                width={44}
                height={44}
                className="w-7 2xl:w-11 xl:w-9 lg:w-7"
              />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/company/gccpl/?originalSubdomain=in"
              target="_blank"
              className="self-center"
            >
              <img
                src={LinkedinLOGO}
                alt="linkedin"
                width={44}
                height={44}
                className="w-7 2xl:w-11 xl:w-9 lg:w-7"
              />
            </NavLink>
          </div>
          <div
            className={`hamburger ${showMenu ? `active` : ""}`}
            onClick={handleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {showMenu && (
        <div className="fullScreen fixed top-0 z-[9] bg-teal-500 w-full h-[100dvh] pt-[84px] block lg:hidden md:block">
          <div className="container mx-auto px-4 md:px-8 sm:px-4">
            <div className="flex flex-col justify-between gap-3 py-4 text-white text-lg">
              <NavLink to="/pnemonia/what-is-pnemonia">
                What is Pneumonia?
              </NavLink>
              <NavLink to="/pnemonia/types-of-pnemonia">
                Types of Pneumonia
              </NavLink>
              <NavLink to="/pnemonia/symptoms-and-signs">
                Symptoms & Signs
              </NavLink>
              <NavLink to="/pnemonia/complications-of-pnemonia">
                Complications of Pneumonia
              </NavLink>
              <NavLink to="/disease-burden">Disease Burden</NavLink>
              <NavLink to="/risk/risk-factor">Risk Factor</NavLink>
              <NavLink to="/risk/risk-score">Risk Score</NavLink>
              <NavLink to="/patient/preventive-techniques">
                Preventive Techniques
              </NavLink>
              <NavLink to="/patient/patient-awareness">
                Patient Awareness
              </NavLink>
              <NavLink to="/pneumococcal-vaccines">
                Pneumococcal Vaccines
              </NavLink>
              <NavLink to="/references">References</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
