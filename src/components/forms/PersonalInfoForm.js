import {Field} from "formik";
import {Row, Col} from "react-bootstrap";
import {Input, Divider} from "antd";

function GeneralInfo() {
    return (
        <>
            <Row>
                <Divider orientation="left">personal info</Divider>

                <Col>
                    <label htmlFor="firstName">first name <span className="span">
                        *
                    </span></label><br/>
                    <Field name="firstName">
                        {({field, form}) => (
                            <>
                                <Input {...field} placeholder="first Name"/>
                                {form.errors.firstName && form.touched.firstName && (
                                    <div style={{color: "red", fontSize: 12}}>
                                        {form.errors.firstName}
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </Col>
                <Col>
                    <label htmlFor="lastName">last name <span className="span">
                        *
                    </span></label><br/>
                    <Field name="lastName">
                        {({field, form}) => (
                            <>
                                <Input {...field} placeholder="Last Name"/>
                                {form.errors.lastName && form.touched.lastName && (
                                    <div style={{color: "red", fontSize: 12}}>
                                        {form.errors.lastName}
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <section>
                        <label htmlFor="city">city <span className="span">
                        *
                    </span></label><br/>
                        <Field name="city">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="Enter your city.."/>
                                    {form.errors.city && form.touched.city && (
                                        <div style={{color: "red", fontSize: 12}}>
                                            {form.errors.city}
                                        </div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
                <Col>
                    <section>
                        <label htmlFor="country">country <span className="span">
                        *
                    </span></label><br/>
                        <Field name="country">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="Enter your country"/>
                                    {form.errors.country && form.touched.country && (
                                        <div style={{color: "red", fontSize: 12}}>
                                            {form.errors.country}
                                        </div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
            </Row>
            <br/>
            <Row>
                <Divider orientation="left">contact info</Divider>
                <Col>
                    <section>
                        <label htmlFor="email">Email address <span className="span">
                        *
                    </span></label><br/>
                        <Field name="email">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="Email address"/>
                                    {form.errors.email && form.touched.email && (
                                        <div style={{color: "red", fontSize: 12}}>
                                            {form.errors.email}
                                        </div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
                <Col>
                    <section>
                        <label htmlFor="phoneNumber">phone number <span className="span">
                        *
                    </span></label><br/>
                        <Field name="phoneNumber">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="Phone Number"/>
                                    {form.errors.phoneNumber && form.touched.phoneNumber && (
                                        <div style={{color: "red", fontSize: 12}}>
                                            {form.errors.phoneNumber}
                                        </div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <section>
                        <label htmlFor="linkedIn">your linkedIn profile <span className="span">
                        *
                    </span></label><br/>
                        <Field name="linkedIn">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="LinkedIn Profile URL"/>
                                    {form.errors.linkedIn && form.touched.linkedIn && (
                                        <div style={{color: "red", fontSize: 12}}>{form.errors.linkedIn}</div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
                <Col>
                    <section>
                        <label htmlFor="github">your github account <span className="span">
                        *
                    </span></label><br/>
                        <Field name="github">
                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="Github Profile URL"/>
                                    {form.errors.github && form.touched.github && (
                                        <div style={{color: "red", fontSize: 12}}>{form.errors.github}</div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <section>
                        <label htmlFor="currentposition">position <span className="span">
                        *
                    </span></label><br/>
                        <Field name="currentposition">

                            {({field, form}) => (
                                <>
                                    <Input {...field} placeholder="enter your current position.."/>
                                    {form.errors.currentposition && form.touched.currentposition && (
                                        <div style={{color: "red", fontSize: 12}}>{form.errors.currentposition}</div>
                                    )}
                                </>
                            )}
                        </Field>
                    </section>

                </Col>

            </Row>

        </>
    )
}

export default GeneralInfo