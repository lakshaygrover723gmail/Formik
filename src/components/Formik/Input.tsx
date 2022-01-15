import React from 'react'
import {ErrorMessage,Field} from "formik"

interface Props{
    name:string,
    label:string
}

function Input(props:Props) {
    const {name,label}=props
    return (
        <div>
            <div className='form-inputs'>
                <label htmlFor={name}>{label}</label>
                <Field name={name} />
                <ErrorMessage name={name}/>
            </div>
        </div>
    )
}

export default Input
