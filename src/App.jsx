import LoginForm from "./components/LoginForm";
import "./App.css";
import BackGroundImg from "./assets/Rectangle 26.png";

function App() {
  return (
    <div className="container flex">
      <div className="left-section w-[55%] h-[100vh] relative ">
        <div className="text-area absolute items-center flex flex-col w-[100%]">
          <h2 className="alexb text-[#fff] text-[44px] font-[400] ">
            Travelista Tours
          </h2>
          <p className="grotesk font-bold text-[18px] text-center text-[#fff] ">
            Travel is the only purchase that enriches you in ways
            <br />
            beyond material wealth
          </p>
        </div>
        <img
          src={BackGroundImg}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="right-section w-[45%]">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
