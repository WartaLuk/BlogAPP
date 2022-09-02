import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../../common/PostForm";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
return (
    <PostForm/>
);
};

export default AddPostForm;