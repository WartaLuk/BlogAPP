import PostEditForm from "../../features/PostEditForm/PostEditForm";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";

const PostEdit = () => {
  const {postId} = useParams();
  const post = useSelector(state => getPostById(state, postId));
    return (
        <PostEditForm post={post}/>
    );
};

export default PostEdit;