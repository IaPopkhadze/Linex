import Pincode from "./components/Pincode";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import "../node_modules/bpg-extrasquare-mtavruli/css/bpg-extrasquare-mtavruli.min.css";
import "../node_modules/bpg-arial/css/bpg-arial.min.css";
import "../node_modules/bpg-arial/css/bpg-arial.min.css";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
         <Admin /></>
    // <Router>

    //   {/* <Routes>
    //     <Route element={<ProtectedRoute />}>
    //       <Route path="/user" element={<UserProfile />} />
    //     </Route>
    //     <Route path="/" element={<Pincode />} />
    //   </Routes> */}
    // </Router>
  );
}

export default App;
