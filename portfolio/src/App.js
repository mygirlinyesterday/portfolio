import "./App.css";
import Name from "./components/Name";
import AboutMe from "./components/AboutMe";
import Background from "./components/Background";
import Archive from "./components/Archive";
import Links from "./components/Links";

function App() {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="relative">
      <div className="relative inset-0 w-full min-h-screen md:fixed md:w-5/12">
          <div><Name></Name></div>
          <div><Name></Name></div>
          <div className="link">
            <div></div>
            <div></div>
            <Links></Links>
          </div>
      </div>
        
        <div className="w-full ml-auto md:w-7/12 px-10">
          <div className="flex flex-col items-center justify-center bg-black-200 py-10">
            <AboutMe></AboutMe>
          </div>
          <div className="flex flex-col items-center justify-center bg-black-200 py-10">
            <Background></Background>
          </div>          
          <div className="flex flex-col items-center justify-center bg-black-200 py-10">
            <Archive></Archive>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
