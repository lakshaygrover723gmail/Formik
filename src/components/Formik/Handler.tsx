import React from 'react'
import Checkbox from './Checkbox';
import Input from './Input'
import Radio from './Radio';
import Select from './Select';
import Textarea from "./Textarea";

interface Props {
    name: string,
    control:string,
    label: string,
    option?:object[]
}

function Handler(props:Props) {
const {control, ...rest}=props
    switch (control) {
        case "input":
            return <Input {...rest}/>
        case "textarea":
            return <Textarea {...rest}/>
        case "select":
            return <Select {...rest}/>
        case "radio":
            return <Radio {...rest}/>
        case "checkbox":
            return <Checkbox {...rest}/>
        default:
            return <h1>hello</h1>;
    }
}

export default Handler
