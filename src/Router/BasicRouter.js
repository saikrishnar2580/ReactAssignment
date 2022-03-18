import { Routes, Route } from "react-router-dom";
import CustmerTranscation from "../CustomerTranscation";

function BasicRouter() {
  return (
    <Routes>
      <Route path="/" element={<CustmerTranscation />} />
      <Route path="/transcation" element={<CustmerTranscation />} />
    </Routes>
  );
}

export default BasicRouter;
