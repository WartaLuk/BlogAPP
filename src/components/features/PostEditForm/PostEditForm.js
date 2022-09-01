import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import {Col, Row, Form, Button} from "react-bootstrap";
import { editPost } from "../../../redux/postsRedux";

const PostEditForm = ({post}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);
    const [text, setText] = useState(post.text);
    const [abstract, setAbstract] = useState(post.abstract);
    const [publishedDate, setPublishedDate] = useState(post.publishedDate);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editPost({ title, author, text, abstract, publishedDate, id:post.id}));
        navigate("/");
    };
return (
        <Col>
        <h2>Edit post</h2>
        <Form  className="mb-3">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control 
        value={title} 
        type="text"
         placeholder="Enter article title"
         onChange={(e) => setTitle(e.target.value)} 
         />
      </Form.Group>
    <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
        value={author}
        type="text"
        placeholder="Enter article author"
        onChange={(e) => setAuthor(e.target.value)}>
        </Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control 
        value={text}
        as="textarea"
        placeholder="Enter article text"
        onChange={(e) => setText(e.target.value)}/>
    </Form.Group>
    <Form.Group>
        <Form.Label>Abstact</Form.Label>
        <Form.Control
        value={abstract}
        as="textarea"
        placeholder="Enter article abstract"
        onChange={(e) => setAbstract(e.target.value)}
        />
    </Form.Group>
    <Form.Group>
        <Form.Label>Published Date</Form.Label>
        <Form.Control
        value={publishedDate}
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={(e) => setPublishedDate(e.target.value)}
        />
    </Form.Group>
      <Button variant="primary" type="submit" onClick={handleEdit}>
        Submit
      </Button>
    </Form>
        </Col>
);
};

export default PostEditForm;