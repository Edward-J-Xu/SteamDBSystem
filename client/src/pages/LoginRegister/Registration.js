import "./LoginRegister.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// function Registration() {
//     const initialValues = {
//         username: "",
//         password: "",
//     };
//     let history = useNavigate();

//     const validationSchema = Yup.object().shape({
//         username: Yup.string().min(3).max(15).required(),
//         password: Yup.string().min(4).max(20).required(),
//     });

//     const onSubmit = (data) => {
//         axios.post("http://localhost:3001/auth", data).then(() => {
//             console.log(data);
//         });
//         history("/login");
//     };

//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={onSubmit}
//                 validationSchema={validationSchema}
//             >
//                 <Form className="formContainer">
//                     <label>Username: </label>
//                     <ErrorMessage name="username" component="span" />
//                     <Field
//                         autocomplete="off"
//                         id="inputCreatePost"
//                         name="username"
//                         placeholder="(Ex. John123...)"
//                     />

//                     <label>Password: </label>
//                     <ErrorMessage name="password" component="span" />
//                     <Field
//                         autocomplete="off"
//                         type="password"
//                         id="inputCreatePost"
//                         name="password"
//                         placeholder="Your Password..."
//                     />

//                     <button type="submit"> Register</button>
//                 </Form>
//             </Formik>
//         </div>
//     );
// }

function Registration() {
    const initialValues = {
        name: "",
        username: "",
        password: "",
        age: "",
        region: "",
        language: "",
        platform: "",
    };
    let history = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
        age: Yup.number().required().positive().integer(),
        region: Yup.string().required(),
        language: Yup.string().required(),
        platform: Yup.string().required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
        });
        history("/login");
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Name: </label>
                    <ErrorMessage name="name" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="name"
                        placeholder="(Ex. John Smith)"
                    />

                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex. John123...)"
                    />

                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" />
                    <Field
                        autoComplete="off"
                        type="password"
                        id="inputCreatePost"
                        name="password"
                        placeholder="Your Password..."
                    />

                    <label>Age: </label>
                    <ErrorMessage name="age" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="age"
                        placeholder="(Ex. 25)"
                    />

                    <label>Region: </label>
                    <ErrorMessage name="region" component="span" />
                    <Field as="select" name="region">
                        <option value="">Select a region</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                    </Field>

                    <label>Language: </label>
                    <ErrorMessage name="language" component="span" />
                    <Field as="select" name="language">
                        <option value="">Select a language</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                    </Field>

                    <label>Platform: </label>
                    <ErrorMessage name="platform" component="span" />
                    <Field as="select" name="platform">
                        <option value="">Select a platform</option>
                        <option value="PC">PC</option>
                        <option value="Xbox">Xbox</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="WIN">Windows</option>
                        <option value="LNX">Linux</option>
                        <option value="MAC">MacOS</option>
                    </Field>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Registration;
