import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./createPost.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

function CreatePost() {
    const { authState } = useContext(AuthContext);

    let history = useNavigate();
    const initialValues = {
        title: "",
        postText: "",
        gameId: "",
    };

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            history("/login");
            console.log("1");
        }
    }, []);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required(),
        gameId: Yup.number()
            .required()
            .max(199, "Game ID must be less than 200"),
    });

    const onSubmit = (data) => {
        axios
            .post("http://localhost:3001/posts", data, {
                headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then((response) => {
                history("/games/posts");
            });
    };

    return (
        <div className="createPostPage">
            <div className="navbar">
                <Link
                    to="/games/posts/createpost"
                    style={{ textDecoration: "none" }}
                >
                    <span>Create A Post</span>
                </Link>
                <Link to="/games/posts" style={{ textDecoration: "none" }}>
                    <span>Posts Home Page</span>
                </Link>
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
                        autoComplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex. Title...)"
                    />
                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex. Post...)"
                    />
                    <label>Game ID: </label>
                    <ErrorMessage name="gameId" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="gameId"
                        placeholder="(Between 1 and 199)"
                    />

                    <button type="submit"> Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
