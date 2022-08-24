import {Col, Row, Card, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <section>
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
              <Card.Text className="abstract">{post.abstract}</Card.Text>
              <Button href={`/post/${post.id}`}>Read more</Button>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Posts;
