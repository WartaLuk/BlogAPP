import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { editPost, addPost } from "../../redux/postsRedux";

const PostForm = ({ pageTitle, post, handleSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [text, setText] = useState(post?.text || "");
  const [abstract, setAbstract] = useState(post?.abstract || "");
  const [publishedDate, setPublishedDate] = useState(post?.publishedDate || "");

  const handleSubmitProvider = (e) => {
    e.preventDefault();
    handleSubmit({title, author, text, abstract, publishedDate});
  }

  return (
    <Row>
      <Col>
        <h2>{pageTitle}</h2>
        <Form onSubmit={handleSubmitProvider}>
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
              onChange={(e) => setAuthor(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              value={text}
              type="text"
              placeholder="Enter article text"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Abstact</Form.Label>
            <Form.Control
              as="textarea"
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default PostForm;
