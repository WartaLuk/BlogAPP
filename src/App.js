'use strict'
import {Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import NavBar from "./components/views/NavBar/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:postId" element={<ThePost/>}/>
          <Route path="/post/add" element={<PostAdd/>}/>
          <Route path="/post/edit/:postId" element={<PostEdit/>}/>
          <Route path="/about/" element={<About/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </>
      </Container>
    </main>
  );
};

export default App;