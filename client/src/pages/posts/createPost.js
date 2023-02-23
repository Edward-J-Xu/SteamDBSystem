import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./createPost.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("IT WORKED");
        });
    };
    return (
        <div className="createPostPage">
            <div className="postLink">
                <Link to="/games/posts/createpost" style={{ textDecoration: "none" }}><span>Create A Post</span></Link>
                <Link to="/games/posts" style={{ textDecoration: "none" }}><span>Posts Home Page</span></Link>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex. Title...)"
                    />
                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex. Post...)"
                    />
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex. John123...)"
                    />

                    <button type="submit"> Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
