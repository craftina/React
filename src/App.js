import {useState, } from 'react';

import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Edit from "./components/Edit.js";
import Details from "./components/Details.js";
import Catalog from "./components/GameCatalog/Catalog.js";
import ErrorPage from "./components/ErrorPage.js";


function App() {
  const [page, setPage] = useState('/home');

  
  const navChangeHandler = (path) => {
    setPage(path); 
  }
  

  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home' :  <Welcome />, 
      'catalog' : <Catalog navChangeHandler={navChangeHandler}/>, 
      'login' : <Login />,
      'register' : <Register />, 
      'create' :  <Create />,
      'details': <Details id={argument} />
    }
    return routes[rootPath];

  }


  return (
    <div>
      
    <div id="box">

        <Header 
        navChangeHandler={navChangeHandler}
        />

        <main id="main-content">
          {router(page)  || <ErrorPage />}
        </main>

        
    </div>

    </div>
  );
}

export default App;
