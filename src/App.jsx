import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Types from "./pages/pneumococcal-vaccines/Types";
import Benefits from "./pages/pneumococcal-vaccines/Benefits";
const Home = lazy(() => import("./pages/Home"));
const Pnvaccines = lazy(() => import("./pages/pneumococcal-vaccines"));
const Diseaseburden = lazy(() => import("./pages/Diseaseburden"));
const Whatispnemonia = lazy(() => import("./pages/pnemonia/Whatispnemonia"));
const Typesofpnemonia = lazy(() => import("./pages/pnemonia/Typesofpnemonia"));
const Symptomsandsigns = lazy(() =>
  import("./pages/pnemonia/Symptomsandsigns")
);
const Complicationsofpnemonia = lazy(() =>
  import("./pages/pnemonia/Complicationsofpnemonia")
);
const Riskfactor = lazy(() => import("./pages/risk/Riskfactor"));
const Riskscore = lazy(() => import("./pages/risk/Riskscore"));
const Preventivetechniques = lazy(() =>
  import("./pages/patient/Preventivetechniques")
);
const Patientawareness = lazy(() => import("./pages/patient/Patientawareness"));
const References = lazy(() => import("./pages/References"));
const FindDoctors = lazy(() => import("./pages/FindDoctors"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial="false">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pnemonia">
              <Route path="what-is-pnemonia" element={<Whatispnemonia />} />
              <Route path="types-of-pnemonia" element={<Typesofpnemonia />} />
              <Route path="symptoms-and-signs" element={<Symptomsandsigns />} />
              <Route
                path="complications-of-pnemonia"
                element={<Complicationsofpnemonia />}
              />
            </Route>
            <Route path="disease-burden" element={<Diseaseburden />} />
            <Route path="risk">
              <Route path="risk-score" element={<Riskscore />} />
              <Route path="risk-factor" element={<Riskfactor />} />
            </Route>
            <Route path="patient">
              <Route
                path="preventive-techniques"
                element={<Preventivetechniques />}
              />
              <Route path="patient-awareness" element={<Patientawareness />} />
            </Route>
            <Route path="pneumococcal-vaccines">
              {/* <Route path="types" element={<Types />} />
            <Route path="benefits" element={<Benefits />} /> */}
              <Route index element={<Pnvaccines />} />
            </Route>
            <Route path="references" element={<References />} />
            <Route path="find-doctors" element={<FindDoctors />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
export default App;
