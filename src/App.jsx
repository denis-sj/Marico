import { Login } from "./pages/login/Login";
import { Main } from "./pages/main/Main";
import { SignUp } from "./pages/sign/SignUp";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
