import {Col, Row, Card, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import {useParams, Navigate} from "react-router";


const Post = () => {
    const {postId} = useParams();
    const postData = useSelector((state) => getPostById(state, postId));

if (!postData) return <Navigate to="/" />;
else
  return (
    <section>
      <Row className="justify-content-md-center" xs={1} md={2} lg={3} xl={4}>
        {postData.map((post) => (
          <Col key={postId}>
            <Card.Body>  
              <Card.Title>
                <h5>Title: {post.title}</h5>
              </Card.Title>
              <Card.Subtitle>
                <h6>Author: {post.author}</h6>
              </Card.Subtitle>
              <Card.Text className="abstract">{post.abstract}</Card.Text>
              <Button href={`/post/${postId}`}>Read more</Button>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Post;
