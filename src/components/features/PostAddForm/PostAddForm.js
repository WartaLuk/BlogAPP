import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import {Col, Row, Form, Button} from "react-bootstrap";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [abstract, setAbstract] = useState("");
    const [publishedDate, setPublishedDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, author, text, abstract, publishedDate}));
        navigate("/");
    };
return (
    <Row>
        <Col>
        <h2>Add post</h2>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        value={title} 
        type="text"
         placeholder="Enter article title"
         onChange={(e) => setTitle(e.target.value)} 
         />
      </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
        value={author}
        type="text"
        placeholder="Enter article author"
        onChange={(e) => setAuthor(e.target.value)}>
        </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control 
        value={text}
        type="text"
        placeholder="Enter article text"
        onChange={(e) => setText(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Abstact</Form.Label>
        <Form.Control
        value={abstract}
        type="text"
        placeholder="Enter article abstract"
        onChange={(e) => setAbstract(e.target.value)}
        />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Published Date</Form.Label>
        <Form.Control
        value={publishedDate}
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={(e) => setPublishedDate(e.target.value)}
        />
    </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </Col>
    </Row>
);
};

export default AddPostForm;