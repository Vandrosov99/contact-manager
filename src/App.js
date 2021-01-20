import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ContactsList from "./components/ContactsList/ContactsList";
import { ContactContextProvider } from "./Context/Provider";
import AddContact from "./components/AddContact/AddContact";

function App() {
  return (
    <div className='App'>
      <ContactContextProvider>
        <Header branding={"Contact Manager"} />
        <div className='container'>
          <AddContact />
          <ContactsList />
        </div>
      </ContactContextProvider>
    </div>
  );
}

export default App;
