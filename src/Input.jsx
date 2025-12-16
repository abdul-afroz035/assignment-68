import { useField } from "formik";
import React from "react";


function Input({ name, label, id, classname, ...rest }) {
    const field = useField(name);

    const [data, meta, helpers] = field;

    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;
    const { setError, setTouched, setValue } = helpers;

    let borderClass = "border-gray-300 focus:border-indigo-500";

    if(error && touched) {
        borderClass = "border-red-500";
    }


return (

    <div>
        <label htmlFor={id}className="sr-only ">
            {label}
        </label>
        <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type="text"
            id={id}
            name={name}
            className={ 
                " relative block w-full appearance-none rounded-md rounded-t-md px-3 py-2 border border-gray-400 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm " + classname + " " + borderClass
                        }
            {...rest}
        />
        {touched && error && (
            <div className="text-red-700">{error}</div>
        )}
    </div>
);
}
export default Input;
