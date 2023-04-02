import {FieldArray, Field, useFormikContext} from "formik";
import {Row, Col} from "react-bootstrap";
import {Input, Divider, List, Space, Button} from "antd";
import {MinusCircleOutlined} from '@ant-design/icons';

function Qualifications() {
    const {values} = useFormikContext();


    return (<>
            <Row>

                <Divider orientation="left">work experience</Divider>
                <FieldArray name="workExperience">
                    {({push, remove}) => (<>
                            {values.workExperience && values.workExperience.map((exp, index) => (<Space
                                    key={index}
                                    style={{display: "flex", marginBottom: 8}}
                                    align="baseline"
                                ><Row>
                                    <Col xs={20}>
                                        <label htmlFor="organization">organization <span className="span">*</span></label><br/>
                                        <Field
                                            name={`workExperience[${index}].organization`}
                                        >
                                            {({field, form}) => (<>


                                                    <Input
                                                        {...field}
                                                        placeholder="write the last organization you worked in"
                                                    />
                                                    {form.errors.organization && form.touched.organization && (
                                                        <div style={{color: "red", fontSize: 12}}>
                                                            {form.errors.organization}
                                                        </div>)}


                                                </>)}
                                        </Field>
                                    </Col>

                                    <Col xs={20}>
                                        <label htmlFor="position">position <span className="span">*</span></label><br/>
                                        <Field name={`workExperience[${index}].position`}>
                                            {({field, form}) => (<>
                                                    <Input
                                                        {...field}
                                                        placeholder="what was your position in this organization?"
                                                    />
                                                    {form.errors.position && form.touched.position && (
                                                        <div style={{color: "red", fontSize: 12}}>
                                                            {form.errors.position}
                                                        </div>)}
                                                </>)}
                                        </Field>
                                    </Col>

                                </Row>
                                    <MinusCircleOutlined onClick={() => remove(index)}/>

                                </Space>))}

                            <Button type="dashed" onClick={() => push({organization: "", position: ""})}>
                                Add Work Experience
                            </Button>
                        </>)}
                </FieldArray>
            </Row>
            <Row>
                {/*---------*/}
                <Divider orientation="left" style={{marginTop: '40px'}}>skills</Divider>
                <Row>

                    <FieldArray name="skills">
                        {({push, remove}) => (<>
                            {values.skills && values.skills.map((exp, index) => (<Space
                                key={index}
                                style={{display: "flex", marginBottom: 8}}
                                align="baseline"
                            ><Row>
                                <Col xs={20}>
                                    <label htmlFor="skill">skill <span className="skill">*</span></label><br/>
                                    <Field
                                        name={`skills[${index}].skill`}
                                    >
                                        {({field, form}) => (<>


                                            <Input
                                                {...field}
                                                placeholder="skill"
                                            />
                                            {form.errors.skill && form.touched.skill && (
                                                <div style={{color: "red", fontSize: 12}}>
                                                    {form.errors.skill}
                                                </div>)}


                                        </>)}
                                    </Field>
                                </Col>

                                <Col xs={20}>
                                    <label htmlFor="skillDescription">skill Description <span className="span">*</span></label><br/>
                                    <Field name={`skills[${index}].skillDescription`}>
                                        {({field, form}) => (<>
                                            <Input
                                                {...field}
                                                placeholder="talk about the skill you mentioned?"
                                            />
                                            {form.errors.skillDescription && form.touched.skillDescription && (
                                                <div style={{color: "red", fontSize: 12}}>
                                                    {form.errors.skillDescription}
                                                </div>)}
                                        </>)}
                                    </Field>
                                </Col>

                            </Row>
                                <MinusCircleOutlined onClick={() => remove(index)}/>

                            </Space>))}

                            <Button type="dashed" onClick={() => push({skill: "", skillDescription: ""})}>
                                Add a new skill
                            </Button>
                        </>)}
                    </FieldArray>
                </Row>
            </Row>
        </>);
}

export default Qualifications;

