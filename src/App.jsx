import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Admin Panel */}
        <Route path="/AdminHome/*" element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
