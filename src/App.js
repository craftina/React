import { useState, } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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

  return (
    <div>

      <div id="box">

        <Header />

        <main id="main-content">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/create" component={Create} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/details/:gameId" component={Details} />
            <Route path="/custom">
              <h1>Custom Page</h1>
            </Route>
            <Route path="/logout" render={() => {
              return <Redirect to="/" />
            }}
            />
          </Switch>
        </main>


      </div>

    </div>
  );
}

export default App;
