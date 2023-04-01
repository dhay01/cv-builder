import {Field} from "formik";
import {Row} from "react-bootstrap";
import {Input,Divider} from "antd";

function EducationForm() {
    return (
        <>
            <Row>
                <section>
                    <label  htmlFor="university">university or institute <span className="span" >
                        *
                    </span></label><br/>
                    <Field name="university">
                        {({field, form}) => (
                            <>

                                <Input {...field} placeholder="enter your university or institute.."/>
                                {form.errors.university && form.touched.university && (
                                    <div style={{color: "red", fontSize: 12}}>{form.errors.university}</div>
                                )}

                            </>
                        )}
                    </Field>

                </section>

            </Row>
            <br/>

            {/*<Field name="year">*/}
            {/*    {({field, form}) => (*/}
            {/*        <>*/}

            {/*            <Input maxLength={4} {...field} placeholder="your graduation year"/>*/}
            {/*            {form.errors.universityOrInstitute && form.touched.universityOrInstitute && (*/}
            {/*                <div style={{color: "red", fontSize: 12}}>{form.errors.universityOrInstitute}</div>*/}
            {/*            )}*/}

            {/*        </>*/}
            {/*    )}*/}
            {/*</Field>*/}
            <Row>
                <section>
                    <label  htmlFor="major">major <span className="span" >
                        *
                    </span></label><br/>
                    <Field name="major">
                        {({field, form}) => (
                            <>
                                <Input {...field} placeholder="enter your study major.."/>
                                {form.errors.major && form.touched.major && (
                                    <div style={{color: "red", fontSize: 12}}>
                                        {form.errors.major}
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </section>

            </Row>
            <br/>
            <Row>
                <section>
                    <label htmlFor="description">description <span className="span" >
                        *
                    </span></label><br/>
                    <Field name="description">
                        {({field, form}) => (
                            <>

                                <Input {...field} placeholder="describe your educational experience.."/>
                                {form.errors.description && form.touched.description && (
                                    <div style={{color: "red", fontSize: 12}}>{form.errors.description}</div>
                                )}
                            </>
                        )}
                    </Field>
                </section>

            </Row>

        </>
)
}

export default EducationForm