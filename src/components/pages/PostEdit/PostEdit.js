import PostEditForm from "../../features/PostEditForm/PostEditForm";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";

const PostEdit = () => {
  const {postId} = useParams();
  const post = useSelector(state => getPostById(state, postId));
    return (
        <PostEditForm postData={post}/>
    );
};

export default PostEdit;