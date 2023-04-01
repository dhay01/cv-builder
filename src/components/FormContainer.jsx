import React, {useState} from "react";
import {Button, Steps, Input} from "antd";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import EducationForm from "./forms/EducationForm";
import GeneralInfo from "./forms/PersonalInfoForm"
import Qualifications from "./forms/Qualifications"
import '../App.css';
const {Step} = Steps;

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    phoneNumber: Yup.string()

        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    linkedIn: Yup.string().url("Invalid URL").required("Required"),
    github: Yup.string().url("Invalid URL").required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    major: Yup.string().required("Required"),
    university: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    year: Yup.date().required("Required"),
    position: Yup.string().required("Required"),
    organization: Yup.string().required("Required"),
    skill: Yup.string().required("Required"),
    Currentposition: Yup.string().required("required")


});

const App = () => {
    const [formData, setFormData] = useState({});

    const [current, setCurrent] = useState(0);
    const next = (values) => {
        setFormData(values);
        setCurrent(current + 1);
    };


    const prev = (values) => {
        setFormData({...values, ...formData});
        setCurrent(current - 1);
    };

    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        linkedIn: "",
        github: "",
        city: "",
        country: "",
        university: "",
        year: null,
        major: "",
        description: "",
        Currentposition: "",
        organization:"",
        skill:"",
        position: "",

    };

    const items = [
        {
            title: "general",
            content: (
                <GeneralInfo/>

            ),
        },
        {
            title: "Education",
            content: (
                <EducationForm/>

            ),
        },


        {
            title: "qualifications",
            content: (
                <Qualifications/>
            ),
        },
        {
            title: "projects",
            content: (
                <>
                    <Field name="description" as={Input.TextArea} placeholder="Description"/>
                </>
            ),
        },
        {
            title: "last step",
            content: (
                <>
                    <Field name="description" as={Input.TextArea} placeholder="Description"/>
                </>
            ),
        },
    ];

    const submitForm = (values) => {
        console.log("Form data:", values);
    };

    return (
        <div style={{
            maxWidth: 1000,
            margin: "0 auto",

        }}
        >
            <Steps style={{

                marginBottom: 40,

            }} current={current}>
                {items.map((item) => (
                    <Step key={item.title} title={item.title}/>
                ))}
            </Steps>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitForm}
            >
                {({errors, touched}) => (
                    <Form>
                        {items[current].content}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: 40,

                            }}
                        >
                            {current > 0 && (
                                <Button type="default" onClick={prev}>
                                    Previous
                                </Button>
                            )}
                            {current < items.length - 1 && (
                                <Button type="primary" onClick={next}>
                                    Next
                                </Button>
                            )}
                            {current === items.length - 1 && (
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            )}
                        </div>


                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;