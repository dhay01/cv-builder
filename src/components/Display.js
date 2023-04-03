import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import {GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, LineOutlined} from "@ant-design/icons";
import {Divider} from "antd";

const DisplayData = () => {
    const [data, setData] = useState(null);
    const formData = JSON.parse(localStorage.getItem("formData"));

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    if (!data) {
        return null;
    }

    return (
        <div>
            <section>
                <Row className="cv-header">
                    <Col>
                        <section>
                            <h3>
                                {formData.firstName}{formData.lastName}
                            </h3>

                            <h5>
                                {formData.currentposition}
                            </h5>
                            <h6>
                                {formData.city}, {formData.country}
                            </h6>
                        </section>
                    </Col>
                    <Col>
                        <section>
                            <h6><MailOutlined/> {formData.email}</h6>

                            <h6><PhoneOutlined/> {formData.phoneNumber}</h6>

                            <h6><LinkedinOutlined/> {formData.linkedIn}</h6>

                            <h6><GithubOutlined/> {formData.github}</h6>
                        </section>
                    </Col>


                </Row>
            </section>
            <section>
                <Row>
                    <Divider orientation="left">Education</Divider>
                </Row>
                <Row>
                    <section className="line">
                        <h5>{formData.major}</h5>  <h6 className="sub">{formData.university}</h6>
                    </section>

                    <p> {formData.description}</p>
                </Row>
            </section>
            <section>
                <Row>
                    <Divider orientation="left">work experience</Divider>
                </Row>
                {data.workExperience.map((item, index) => (
                    <div key={index}>
                        <section className="line">
                            <h5>{item.position}</h5>
                            <h6 className="sub">{item.organization}</h6>
                        </section>
                        <p>{item.description}</p>
                    </div>
                ))}

            </section>
            <section>
                <Row>
                    <Divider orientation="left">qualifications</Divider>
                </Row>

                {data.skills.map((item, index) => (
                    <div key={index}>
                        <section className="line">
                            <h5>{item.skill}</h5><br/>
                            <h6 className="sub">{item.skillDescription}</h6>
                        </section>

                    </div>
                ))}

            </section>
            <section>
                <Row>
                    <Divider orientation="left">projects</Divider>
                </Row>

                {data.projects.map((item, index) => (
                    <div key={index}>
                        <section className="line">
                            <h5>{item.project}</h5><br/>
                            <h6 className="sub">{item.projectDescription}</h6>
                        </section>

                    </div>
                ))}

            </section>

        </div>
    );
};
export default DisplayData;
