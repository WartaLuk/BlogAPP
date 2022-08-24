import {Card} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import {useParams, Navigate} from "react-router";


const Post = () => {
    const {postId} = useParams();
    const post = useSelector((state) => getPostById(state, postId));

if (!post) return <Navigate to="/" />;
else
  return (
    <section>
            <Card.Body>  
              <Card.Title>
                <h5>Title: {post.title}</h5>
              </Card.Title>
              <Card.Subtitle>
                <h6>Author: {post.author}</h6>
              </Card.Subtitle>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
    </section>
  );
};
export default Post;
