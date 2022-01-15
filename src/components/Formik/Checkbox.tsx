import React from 'react'
import { ErrorMessage, Field } from "formik"

interface Props {
    name: string,
    label: string,
    option?: object[]
}
interface data {
    id: number,
    value: string,
}


function Checkbox(props: Props) {
    const { name, label, option, ...reset } = props
    return (
        <div>
            <div className='form-group'>
                <label htmlFor={label}>{label}</label>
                <Field name={name} {...reset}>
                    {
                        ({ field }: any) => {
                            console.log(field)
                            return (
                                option?.map((data: any) => {
                                    return (
                                        <div key={data.value}>
                                            <input type="checkbox"  id={data.value} {...field} value={data.value} checked={field.value.includes(data.value)} />
                                            <label htmlFor={data.value}>{data.value}</label>
                                        </div>
                                    )
                                })
                            )
                        }
                    }
                </Field>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Checkbox
