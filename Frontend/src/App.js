
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
// import { Row, Container } from "reactstrap";
import { Routes } from "react-router-dom";

// function App() {
//   return (

//     <div className="App">
//      <h1>Book App</h1>
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Container>
          <Header />
          <h1>Book App</h1>
          <Switch>
            <Route exact path="/register" Component={Register} />
          </Switch>
        </Container>
      </BrowserRouter> */}
      <BrowserRouter>
        <Header />
        <h1>Book App</h1>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
