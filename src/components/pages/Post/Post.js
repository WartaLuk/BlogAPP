import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <section>
      <Row className="justify-content-md-center">
        {postsData.map((post) => (
          <Col key={post.id}>
            <Card.Body>
              <Card.Title>
                <Row>
                  <h1>Title:</h1>
                  {post.title}
                </Row>
              </Card.Title>
              <Card.Subtitle>
                <Row>
                  <h3>Author:</h3>
                  {post.author}
                </Row>
              </Card.Subtitle>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Posts;
