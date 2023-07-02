import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Diseaseburden from "./pages/Diseaseburden";
import Whatispnemonia from "./pages/pnemonia/Whatispnemonia";
import Typesofpnemonia from "./pages/pnemonia/Typesofpnemonia";
import Symptomsandsigns from "./pages/pnemonia/Symptomsandsigns";
import Complicationsofpnemonia from "./pages/pnemonia/Complicationsofpnemonia";
import Riskfactor from "./pages/risk/Riskfactor";
import Riskscore from "./pages/risk/Riskscore";
import Preventivetechniques from "./pages/patient/Preventivetechniques";
import Patientawareness from "./pages/patient/Patientawareness";
import Types from "./pages/pneumococcal-vaccines/Types";
import Benefits from "./pages/pneumococcal-vaccines/Benefits";
import References from "./pages/References";
import FindDoctors from "./pages/FindDoctors";
import { AnimatePresence } from "framer-motion";
import Pnvaccines from "./pages/pneumococcal-vaccines";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial="false">
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
    </AnimatePresence>
  );
}
export default App;
