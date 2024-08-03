import { Link, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";

import logo from "../../assets/logo.jpg"

const initialValues = { email: '', password: '', repass: '' };

const validateForm = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    if (!values.repass) errors.repass = "Repeat Password is required";
    return errors;
};

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, repass }) => {
        if (password != repass) {
            return errors({ general: 'Passwords don\'t match!' });
        }

        try {
            await register(email, password)
            navigate('/')
        } catch (err) {
            errors({ general: err.message });
        }
    }

    const {
        values,
        errors,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler, validateForm)

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
                        Create an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandler} className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="repass" className="block text-sm font-medium leading-6 text-gray-900">
                                    Repeat Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="repass"
                                    name="repass"
                                    type="password"
                                    value={values.repass}
                                    onChange={changeHandler}
                                    autoComplete="current-password"
                                    className={`bg-white border ${errors.repass ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5`}
                                />
                                {errors.repass && (
                                    <p className="text-red-500 text-xs mt-1">{errors.repass}</p>
                                )}
                            </div>
                        </div>
                        {errors.general && (
                            <div className="mb-4 text-sm text-red-500">
                                {errors.general}
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}