import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AnalyzeCV from "./pages/AnalyzeCV/AnalyzeCV";

import {Header} from "./components/Header";
import CreateResume from "./pages/CreateResume";
import MainPage from "./pages/MainPage";
import PersonalDetails from "./components/PersonalDetails";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, AuthWrapper } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Loader } from "./components/Loader";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/login" element={
            <AuthWrapper afterAuth={true} redirectTo="/dashboard">
              <Login />
            </AuthWrapper>   
          } />
          <Route exact path="/dashboard" element={
            <AuthWrapper redirectTo="/login">
              <MainPage />
            </AuthWrapper> 
          } />
          <Route exact path="/analyzecv" element={<AnalyzeCV />} />
          <Route path="/createResume" element={
            <AuthWrapper>
              <CreateResume />
            </AuthWrapper>
          } />
          <Route path="/details" element={
            <AuthWrapper redirectTo="/login" >
              <Details />
            </AuthWrapper> 
          }>
            <Route path="personalDetails" element={<PersonalDetails />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="edu" element={<Education />} />
            <Route path="exp" element={<Experience />} />
            <Route path="lang" element={<Languages />} />
            <Route path="skills" element={<Skills />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
