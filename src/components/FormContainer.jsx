import React, {useState} from "react";
import {Button, Steps, Input} from "antd";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import EducationForm from "./forms/EducationForm";
import GeneralInfo from "./forms/PersonalInfoForm"
import Qualifications from "./forms/Qualifications"
import Projects from "./forms/ProjectsForm"
import '../App.css';

const {Step} = Steps;

const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(15, "Must be 15 characters or less").required("this field is required"),
    lastName: Yup.string().max(15, "Must be 15 characters or less").required("this field is required"),
    phoneNumber: Yup.string().min(11, "Must be exactly 11 digits").max(11, "Must be exactly 11 digits").required("this field is required"),
    email: Yup.string().required("this field is required"),
    linkedIn: Yup.string().url("Invalid URL").required("this field is required"),
    github: Yup.string().url("Invalid URL").required("this field is required"),
    city: Yup.string().required("this field is required"),
    country: Yup.string().required("this field is required"),
    Currentposition: Yup.string().required("this field is required"),
    major: Yup.string().required("this field is required"),
    university: Yup.string().required("this field is required"),
    description: Yup.string().required("this field is required"),
    year: Yup.date().required("this field is required"),
    position: Yup.string().required("this field is required"),
    organization: Yup.string().required("this field is required"),
    skill: Yup.string().required("this field is required"),
    skillDescription: Yup.string().required("this field is required"),
    project: Yup.string().required("this field is required"),
    projectDescription: Yup.string().required("this field is required")


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
        workExperience: [],
        skills: [],
        projects: [],
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        linkedIn: "",
        github: "",
        city: "",
        country: "",
        university: "",
        major: "",
        description: "",
        Currentposition: "",
        organization: "",
        skill: "",
        position: "",
        skillDescription: "",
        project: "",
        projectDescription: "",


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
                <Projects/>
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

                {({errors, touched}) => {
                    console.log('errors:', errors);
                    console.log('touched:', touched);
                    return (<Form>
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
                    );

                }
                }
                    </Formik>
                    </div>
                    );
                };

                export default App;