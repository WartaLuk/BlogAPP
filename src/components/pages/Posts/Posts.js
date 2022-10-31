import {Col, Row, Card, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <section>
      <Row>
        <Col>
          <h2 className="mb-5">All post</h2>
        </Col>
        <Col className="d-flex justify-content-end p-3">
          <Button as={Link} to={`/post/add`}>Add post</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center" xs={1} md={2} lg={3} xl={4}>
        {postsData.map((post) => (
          <Col key={post.id}>
            <Card.Body>  
              <Card.Title>
                <h5>Title: {post.title}</h5>
              </Card.Title>
              <Card.Subtitle>
                <h6>Author: {post.author}</h6>
              </Card.Subtitle>
              <Card.Text>{post.abstract}</Card.Text>
              <Card.Text>{post.publishedDate}</Card.Text>
              <Card.Text>{post.category}</Card.Text>
              <Button as={Link} to={`/post/${post.id}`}>Read more</Button>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Posts;