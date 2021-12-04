import {useState, } from 'react';

import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Edit from "./components/Edit.js";
import Details from "./components/Details.js";
import Catalog from "./components/Catalog.js";


function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home' :  <Welcome />, 
    '/catalog' : <Catalog />, 
    '/login' : <Login />,
    '/register' : <Register />, 
    '/logout' :  <Welcome />,
    '/create' :  <Create />
  }

const navChangeHandler = (path) => {
  setPage(path); 
}

  return (
    <div>
      
    <div id="box">

        <Header 
        navChangeHandler={navChangeHandler}
        />

        <main id="main-content">
          {routes[page]  || <h2>No page found!</h2>}
        </main>

        
    </div>

    </div>
  );
}

export default App;
