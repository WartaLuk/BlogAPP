import {Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import PageNotFound from "./components/pages/NotFound/NotFound";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit"
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";

const App = () => {
  return (
    <main className="min-vh-100">
      <Header/>
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
      <Footer/>
    </main>
  );
};

export default App;