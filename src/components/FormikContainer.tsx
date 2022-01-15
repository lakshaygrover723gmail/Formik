import React from 'react'
import { Formik, Form } from "formik"
import * as yup from "yup";
import Handler from './Formik/Handler';

const option = [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
    { id: 3, value: "option3" },
]
const option2 = [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
    { id: 3, value: "option3" },
]
const option3 = [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
    { id: 3, value: "option3" },
]

const initialValues = {
    name: "",
    comments: "",
    choice: "",
    gender:"",
    things:[]
}

const validateSchema = yup.object({
    name: yup.string().required("Required"),
    comments: yup.string().required("required"),
    choice: yup.string().required("Requird"),
    gender:yup.string().required("Required option here"),
    things:yup.array().required("value")

})
const valueshere = [
    { name: "name", control: "input", label: "fullname" },
    { name: "comments", control: "textarea", label: "comments" },
]

const onSubmit = (values: object) => {
    console.log(values)
}

function FormikContainer() {
    return (
        <div>
            <h1>hey</h1>
            <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
                {fromik => {
                    return <Form>
                        {valueshere.map((values) => {
                            return <Handler name={values.name} control={values.control} label={values.control} />
                        })}
                        <Handler name="choice" control='select' label="Select Option" option={option}/>
                        <Handler name="gender" control='radio' label="Select Your Gender" option={option2}/>
                        <Handler name="things" control='checkbox' label="Select Your Checkbox" option={option3}/>
                        <button type='submit'>Submit</button>
                    </Form>
                }}

            </Formik>
        </div>
    )
}

export default FormikContainer