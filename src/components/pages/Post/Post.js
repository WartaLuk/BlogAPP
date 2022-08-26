import { Card, Button, Modal, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useParams, Navigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removePost(post.id));
  };

  if (!post) return <Navigate to="/" />;
  else
    return (
      <Container>
        <Card.Body>
          <Card.Title>
            <h5>Title: {post.title}</h5>
          </Card.Title>
          <Card.Subtitle>
            <h6>Author: {post.author}</h6>
          </Card.Subtitle>
          <Card.Text>{post.text}</Card.Text>
        </Card.Body>
        <Button className="m-3" as={Link} to={`/post/edit/${postId}`}>Edit</Button>
        <Button className="m-3" onClick={() => setShow(true)}>Delete</Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This operation will pernamently remove this article.<br/> Are you sure you want to do that?</Modal.Body>
          <Modal.Footer className="p-3">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={(handleRemove)}>
             Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};
export default Post;
