import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className='App'>
      <Header branding={"Contact Manager"} />
      <div className='container'>
        <Contact
          name={"vova1"}
          email={"emasda@gmail.com"}
          phone={"555-555-55"}
        />
        <Contact
          name={"vova2"}
          email={"emasda2@gmail.com"}
          phone={"222-222-22"}
        />
      </div>
    </div>
  );
}

export default App;
