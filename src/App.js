import "./App.css";
import logo from "../src/images/logo.png";
import Form from "./Form";
import Footer from "./Footer";
// import Thankyou from "./components/Thankyou";
// import Question from "./components/Question/Question";
import PostCode from "./components/Forms/PostCode";
import FirstForm from "./components/Forms/FirstForm";
import PersonalDetails from "./components/Forms/PersonalDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <div className="App colos">
        <div className="logo">
          <img className="logos" src={logo}></img>
        </div>

        <Form />
        <Footer />
      </div> */}
      {/* <Thankyou></Thankyou> */}
      {/* <Question /> */}
      {/* <FirstForm /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="job" element={<Job />} /> */}
          <Route path="/postcode" element={<PostCode />} />
          <Route path="/" element={<FirstForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
