import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'
//import assets from Bootstraps 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; //bootsrap navbar

//import prewritten content 
import Header from './assets/headers' // header component
import Content from './assets/content'// Content component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    //Nav Bar
    <>
         <Navbar bg="primary" data-bs-theme="dark"> 
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>    {/*home */}
              <Nav.Link href="/read">Read</Nav.Link>    {/*Read page*/}
              <Nav.Link href="/create">Create</Nav.Link>  {/*Create page*/}
            </Nav>
          </Container>
        </Navbar>

      {/*ROUTES, specified path for switching content*/}
      <Routes> 
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} /> {/*route to read component*/}
        <Route path="/create" element={<h1>Create Component</h1>} />{/*route to create component*/}
      </Routes>
    </>
  );
}


