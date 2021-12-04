import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Edit from "./components/Edit.js";
import Details from "./components/Details.js";
import Catalog from "./components/Catalog.js";


function App() {
  return (
    <div>
      
    <div id="box">

        <Header />
        <Welcome />
        <Login />
        <Register />
        <Create />
        <Edit />
        <Details />
        <Catalog />

        <main id="main-content">
        </main>

        
    </div>

    </div>
  );
}

export default App;
