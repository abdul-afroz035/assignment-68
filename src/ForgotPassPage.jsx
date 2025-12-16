import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import * as Yup from "yup";
import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";

function ForgotPassPage() {
    function callForgotApi() {
        console.log("data sending");
    }
    const schema = Yup.object().shape({
        myEmail: Yup.string().email(),
    });

    const initialValues = {
        myEmail: "",
    };


    return (
        <div className=" flex flex-col h-full justify-center items-center bg-white max-w-6xl mx-auto my-16 py-6 px-6" >
            <div className="text-9xl text-gray-900 pb-4">
                <CiShoppingCart />
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={callForgotApi}
                validationSchema={schema}
                validateOnMount

            >
                <Form className="flex flex-col justify-between w-90 px-6 py-2 rounded-md shadow-md bg-white space-y-4 ">
                    <div className="text-2xl mb-8 text-primary-default font-serif font-bold">
                        DOWN-TOWN CityCart
                    </div>
                    <Input
                        label="enter email"
                        id="user-email"
                        name="myEmail"
                        type="email"
                        required
                        autoComplete="email-address"
                        placeholder="enter Email address"
                    />

                    <button
                        type="button"
                        className="text-white bg-primary-default hover:bg-primary-dark
                                     disabled:bg-primary-light px-2 py-0.5 rounded-sm  ">
                        request reset link
                    </button>
                    <Link to="/"
                        className="self-center text-sm  text-primary-default hover:text-primary-dark"> Back to Login
                    </Link>
                </Form>
            </Formik>
        </div>
    );
}

export default ForgotPassPage;