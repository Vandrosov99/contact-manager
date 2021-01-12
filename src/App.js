import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {
  return (
    <div className='App'>
      <Header branding={"Contact Manager"} />
      <div className='container'>
        <ContactsList />
      </div>
    </div>
  );
}

export default App;
