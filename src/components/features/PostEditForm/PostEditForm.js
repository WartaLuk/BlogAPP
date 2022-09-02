import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../../common/PostForm";

const PostEditForm = ({post}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

return (
        <PostForm/>
);
};

export default PostEditForm;