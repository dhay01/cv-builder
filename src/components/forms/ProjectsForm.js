import {FieldArray, Field, useFormikContext} from "formik";
import {Row, Col} from "react-bootstrap";
import {Input, Divider, Space, Button} from "antd";
import {MinusCircleOutlined} from '@ant-design/icons';
import * as Yup from "yup";

function Projects() {
    const {values} = useFormikContext();
    return (
        <>
            <Row>
                <FieldArray name="projects">
                    {({push, remove}) => (<>
                        {values.projects && values.projects.map((exp, index) => (<Space
                            key={index}
                            style={{display: "flex", marginBottom: 8}}
                            align="baseline"
                        ><Row>
                            <Col xs={20}>
                                <label htmlFor="project">project <span className="span">*</span></label><br/>
                                <Field
                                    name={`projects[${index}].project`}
                                >
                                    {({field, form}) => (<>


                                        <Input
                                            {...field}
                                            placeholder="title of project"
                                        />
                                        {form.errors.project && form.touched.project && (
                                            <div style={{color: "red", fontSize: 12}}>
                                                {form.errors.project}
                                            </div>)}


                                    </>)}
                                </Field>
                            </Col>

                            <Col xs={20}>
                                <label htmlFor="projectDescription">project description <span className="span">*</span></label><br/>
                                <Field name={`projects[${index}].projectDescription`}>
                                    {({field, form}) => (<>
                                        <Input
                                            {...field}
                                            placeholder="write about the project you mentioned"
                                        />
                                        {form.errors.projectDescription && form.touched.projectDescription && (
                                            <div style={{color: "red", fontSize: 12}}>
                                                {form.errors.projectDescription}
                                            </div>)}
                                    </>)}
                                </Field>
                            </Col>

                        </Row>
                            <MinusCircleOutlined onClick={() => remove(index)}/>

                        </Space>))}

                        <Button type="dashed" onClick={() => push({project: "", projectDescription: ""})}>
                            Add a new project
                        </Button>
                    </>)}
                </FieldArray>
            </Row>

        </>);
}

export default Projects;

