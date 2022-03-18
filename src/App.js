import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AnalyzeCV from "./pages/AnalyzeCV/AnalyzeCV";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analyzecv" element={<AnalyzeCV />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
