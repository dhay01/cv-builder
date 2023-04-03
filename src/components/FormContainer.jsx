import React, {useState, useEffect} from "react";
import {Button, Steps, Spin} from "antd";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import EducationForm from "./forms/EducationForm";
import GeneralInfo from "./forms/PersonalInfoForm"
import Qualifications from "./forms/Qualifications"
import Projects from "./forms/ProjectsForm"
import '../App.css';
import DisplayData from "./Display";



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
    currentposition: Yup.string().required("this field is required"),
    major: Yup.string().required("this field is required"),
    university: Yup.string().required("this field is required"),
    description: Yup.string().required("this field is required"),


});

const FormContainer = () => {
    const [submittedData, setSubmittedData] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(0);
    const routeChange = () => {
        let path = `/display`;
        navigate(path);
    }
    const next = (values) => {
        setFormData(values);
        setCurrent(current + 1);
    };


    const prev = (values) => {
        setFormData({...values, ...formData});
        setCurrent(current - 1);
    };
    useEffect(() => {
        if (Object.keys(submittedData).length > 0) {
            localStorage.setItem("formData", JSON.stringify(submittedData));
        }
    }, [submittedData]);

    const initialValues = {
        workExperience: [],
        skills: [],
        projects: [],
        firstName: "dhay",
        lastName: "salih",
        phoneNumber: "07715069649",
        email: "dhaysalih18@gmail.com",
        linkedIn: "https://www.linkedin.com/in/dhay-salih-66ba6618a/",
        github: "https://github.com/dhay01",
        city: "baghdad",
        country: "iraq",
        university: "university of technology",
        major: "engineering",
        description: "lorem ipsum",
        currentposition: "front-end developer",
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
                onSubmit={(values) => {
                    setIsLoading(true);
                    setFormData(values);
                    setSubmittedData(values);
                    console.log(values);
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate("/display");
                    }, 2000);



                }}

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
                                    <Button type="primary"  htmlType="submit" disabled={isLoading}>
                                        {isLoading ? <Spin /> : "generate cv"}
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

export default FormContainer;