import React from 'react'
import {ErrorMessage,Field} from "formik"

interface Props{
    name:string,
    label:string
}

function Textarea(props:Props) {
    const {name,label}=props
    return (
        <div>
            <div className='form-inputs'>
                <label htmlFor={name}>{label}</label>
                <Field name={name} as="textarea" id={name}/>
                <ErrorMessage name={name}/>
            </div>
        </div>
    )
}

export default Textarea
