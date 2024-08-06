import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

import logo from "../../assets/logo.jpg"
import { useState } from "react";

const initialValues = { email: '', password: '' };

const validateForm = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    return errors;
};

export default function Login() {
    const [formErrors, setFormErrors] = useState({});

    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')
        } catch (err) {
            setFormErrors({ general: 'Email or password don\'t match' });
        }
    }
    const {
        values,
        errors,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler, validateForm);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="rounded-md mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandler} className="space-y-6">
                        <div>
                            <label htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    autoComplete="email"
                                    className={`bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    autoComplete="current-password"
                                    className={`bg-white border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5`}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>
                        </div>
                        {formErrors.general && (
                            <div className="mb-4 text-sm text-red-500">
                                {formErrors.general}
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create your account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}