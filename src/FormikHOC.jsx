import { useField } from "formik";
import React from "react";


function FormikHOC(IncomingComponent) {
  function OutgoingComponent({name, ...rest}){
    const field = useField(name);

    const [data, meta] = field;

    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    let borderClass = "border-gray-300 focus:border-indigo-500 ";

    if (error && touched) {
        borderClass = "border-red-500 "; // must give space before (") 
    }
      // Incoming comp input tag hai usme ham kuch formik objects add kar dnege

    return (
            <IncomingComponent
                value = {value}
                onChange = {onChange}
                onBlur = {onBlur}
                touched = {touched}
                error = {error}
                name = {name}
                {...rest}
            />
            );
    }
    return OutgoingComponent;
}
export default FormikHOC;
