import {Field} from "formik";
import {Row, Col} from "react-bootstrap";
import {Input, Divider} from "antd";

function Qualifications() {
    return (
        <>
            <Row>
                <Divider orientation="left">work experience</Divider>
                <section>
                    <label htmlFor="organization">organization <span className="span">
                        *
                    </span></label><br/>
                    <Field name="organization">
                        {({field, form}) => (
                            <>
                                <Input {...field} placeholder="enter the name of the organization your worked with"/>
                                {form.errors.organization && form.touched.organization && (
                                    <div style={{color: "red", fontSize: 12}}>
                                        {form.errors.organization}
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </section>
            </Row>
            <Row>
                <section>
                    <label htmlFor="position">position <span className="span">
                        *
                    </span></label><br/>
                    <Field name="position">
                        {({field, form}) => (
                            <>
                                <Input {...field} placeholder="what was your position in this organization?"/>
                                {form.errors.position && form.touched.position && (
                                    <div style={{color: "red", fontSize: 12}}>
                                        {form.errors.position}
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </section>
            </Row>
            <br/>







        </>
    )
}

export default Qualifications