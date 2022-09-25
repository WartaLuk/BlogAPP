import { useState } from "react";
import { Col, Form, Row, Button, FormGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../redux/categoriesRedux"
import { useSelector } from "react-redux";
import shortid from "shortid";

const PostForm = ({ pageTitle, post, handleSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [text, setText] = useState(post?.text || "");
  const [abstract, setAbstract] = useState(post?.abstract || "");
  const [publishedDate, setPublishedDate] = useState(post?.publishedDate || "");
  const [errorText, setErrorText] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const [category, setCategory] = useState(post?.categories || "");

  const categories = useSelector(getAllCategories);

  const handleSubmitProvider = (e) => {
    setErrorDate(false);
    setErrorText(false);
    if (!text) {
      setErrorText(true);
    } else if (!publishedDate) {
      setErrorDate(true);
    } else {
      handleSubmit({ title, author, text, abstract, publishedDate, category });
    }
  };

  return (
    <Row>
      <Col>
        <h2>{pageTitle}</h2>
        <Form onSubmit={validate(handleSubmitProvider)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register("title", { required: true, minLength: 3 })}
              value={title}
              type="text"
              placeholder="Enter article title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <small className="d-block form-text text-danger mt-2">
                This field is required and should be minimum 3 signs lenght
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              value={author}
              {...register("author", { required: true, minLength: 3 })}
              type="text"
              placeholder="Enter article author"
              onChange={(e) => setAuthor(e.target.value)}
            ></Form.Control>
            {errors.author && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <ReactQuill theme="snow" value={text} onChange={setText} />
            {errorText && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Abstact</Form.Label>
            <Form.Control
              as="textarea"
              value={abstract}
              type="text"
              placeholder="Enter article abstract"
              onChange={(e) => setAbstract(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Published Date</Form.Label>
            <Form.Control
              value={publishedDate}
              type="date"
              placeholder="yyyy-mm-dd"
              onChange={(e) => setPublishedDate(e.target.value)}
            />
            {errorDate && (
              <small className="d-block form-text text-danger mt-2">
                You have to choose a date.
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              id="categorySelect"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option>Select category...</option>
              {categories.map((category) => (
                <option key={shortid()} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default PostForm;

