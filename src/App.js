'use strict'
import {Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import NavBar from "./components/views/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import PageNotFound from "./components/pages/NotFound/NotFound";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit"

const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:postId" element={<Post/>}/>
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