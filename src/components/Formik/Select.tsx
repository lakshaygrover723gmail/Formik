import React from 'react'
import { ErrorMessage, Field } from "formik"


interface Props {
    name: string,
    label: string,
    option?:object[]
}


function Select(props: Props) {
    const { name, label, option, ...reset } = props
    return (
        <div>
            <div className='form-inputs'>
                <label htmlFor={name}>{label}</label>
                <Field name={name} id={name} as="select" {...reset}>
                    {option?.map((data:any)=> {
                            return <option value={data.value} key={data.value}>{data.value}</option>
                        })}
                </Field>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Select
