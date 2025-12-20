import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { FormikInput } from "./Input";
import * as Yup from "yup";
import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";

function SignupPage() {
    function callSignupApi(values) {
        console.log("signupPage upi calling");
    }
    const schema = Yup.object().shape({
        fullName: Yup.string(),
        myEmail: Yup.string().email(),
        userName: Yup.string(),
        myPassword: Yup.string().min(8).max(12),
        confermPass: Yup.string().min(8).max(12),
    });

    const initialValues = {
        fullName: "",
        myEmail: "",
        userName: "",
        myPassword: "",
        confermPass: "",
    };


    return (
        <div className=" flex flex-col h-full justify-center items-center bg-white max-w-6xl mx-auto my-16 py-6 px-6" >
            <div className="text-9xl text-gray-900 pb-4">
                <CiShoppingCart />
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={callSignupApi}
                validationSchema={schema}
                validateOnMount

            >
                <Form className="flex flex-col justify-between w-90 px-6 py-2 rounded-md shadow-md bg-white space-y-3 ">
                    <div className="text-2xl mb-8 text-primary-default font-serif font-bold">
                        DOWN-TOWN CityCart
                    </div>
                    <FormikInput
                        label="enter fullName"
                        id="Full-Name"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="user-FullName"
                        placeholder="FullName"
                    />

                    <FormikInput
                        label="enter email"
                        id="user-email"
                        name="myEmail"
                        type="email"
                        required
                        autoComplete="email-address"
                        placeholder="Email"
                    />

                    <FormikInput
                        label="enter username "
                        id="userName"
                        name="username"
                        type="text"
                        required
                        autoComplete="username"
                        placeholder="username or email"   
                    />

                    <FormikInput
                        label="enter Password"
                        id="user-password"
                        name="myPassword"
                        type="password"
                        required
                        autoComplete="my-Password"
                        placeholder="enter Password"
                    />

                    <FormikInput
                        label="conferm Password"
                        id="cnfm-password"
                        name="confermPass"
                        type="password"
                        required
                        autoComplete="conferm-Password"
                        placeholder="conferm Password"
                    />

                    <div className="self-center space-x-2">
                        <button
                            type="button"
                            className="text-white bg-primary-default hover:bg-primary-dark px-2 py-0.5 rounded-sm self-end">
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="text-white bg-primary-default hover:bg-primary-dark disabled:bg-primary-light px-2 py-0.5 rounded-sm ">
                            Signup
                        </button>
                    </div>

                    <div className="self-center text-sm mt-2 text-gray-400 "> Already have an account?
                        <Link to="/" className="text-primary-default"> Login </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default SignupPage;