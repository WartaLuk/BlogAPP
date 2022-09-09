import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../../common/PostForm";

const AddPostForm = () => {
    const pageTitle = "Add post";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (post) => {
        dispatch(addPost(post));
        navigate("/");
    };
return (
    <PostForm handleSubmit={handleSubmit} pageTitle={pageTitle}/>
);
};

export default AddPostForm;