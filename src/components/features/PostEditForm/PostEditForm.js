import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../../common/PostForm";

const PostEditForm = ({postData}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageTitle = "Post edit";

    const handleSubmit = (post) => {
        dispatch(editPost({...post, id:post.id}));
        navigate("/");
    };

return (
        <PostForm handleSubmit={handleSubmit} pageTitle={pageTitle} post={postData}/>
);
};

export default PostEditForm;