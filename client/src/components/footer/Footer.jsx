import { Link } from 'react-router-dom';

import logo from "../../assets/logo.jpg"


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="rounded-md  h-20 w-auto"
                    />
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold mb-2">TechHaven</h1>
                        <p className="text-sm">© {new Date().getFullYear()} TechHaven. All rights reserved.</p>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12.07c0-5.28-4.22-9.5-9.5-9.5s-9.5 4.22-9.5 9.5c0 4.66 3.33 8.54 7.75 9.29v-6.56h-2.3v-2.43h2.3v-1.8c0-2.28 1.36-3.54 3.39-3.54.97 0 1.81.07 2.06.1v2.39h-1.42c-1.12 0-1.34.54-1.34 1.33v1.76h2.69l-.35 2.43h-2.34v6.56c4.42-.75 7.75-4.63 7.75-9.29z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 5.92c-.76.35-1.57.58-2.43.69.87-.52 1.54-1.35 1.85-2.34-.81.48-1.72.83-2.68 1.02-.76-.81-1.85-1.31-3.06-1.31-2.31 0-4.18 1.87-4.18 4.18 0 .33.03.66.1.97-3.47-.17-6.55-1.84-8.62-4.37-.36.62-.56 1.34-.56 2.1 0 1.45.74 2.73 1.87 3.47-.69-.02-1.34-.21-1.91-.52v.05c0 2.03 1.44 3.72 3.34 4.1-.35.1-.73.15-1.1.15-.27 0-.53-.02-.79-.07.53 1.65 2.08 2.85 3.92 2.88-1.43 1.12-3.23 1.79-5.19 1.79-.34 0-.67-.02-1-.07 1.85 1.19 4.04 1.89 6.4 1.89 7.68 0 11.89-6.36 11.89-11.89 0-.18-.01-.36-.02-.54.82-.59 1.53-1.31 2.1-2.14z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.2c3.64 0 4.08.01 5.53.08 1.45.07 2.53.32 3.29 1.08.76.76 1.01 1.84 1.08 3.29.07 1.45.08 1.89.08 5.53s-.01 4.08-.08 5.53c-.07 1.45-.32 2.53-1.08 3.29-.76.76-1.84 1.01-3.29 1.08-1.45.07-1.89.08-5.53.08-3.64 0-4.08-.01-5.53-.08-1.45-.07-2.53-.32-3.29-1.08-.76-.76-1.01-1.84-1.08-3.29-.07-1.45-.08-1.89-.08-5.53s.01-4.08.08-5.53c.07-1.45.32-2.53 1.08-3.29.76-.76 1.84-1.01 3.29-1.08 1.45-.07 1.89-.08 5.53-.08zm0-2.2c-3.7 0-4.16.01-5.62.08-1.47.07-2.72.33-3.7 1.31-1.07 1.07-1.24 2.23-1.31 3.7-.07 1.45-.08 1.9-.08 5.62s.01 4.17.08 5.62c.07 1.47.33 2.72 1.31 3.7 1.07 1.07 2.23 1.24 3.7 1.31 1.46.07 1.92.08 5.62.08 3.7 0 4.16-.01 5.62-.08 1.47-.07 2.72-.33 3.7-1.31 1.07-1.07 1.24-2.23 1.31-3.7.07-1.45.08-1.9.08-5.62s-.01-4.17-.08-5.62c-.07-1.47-.33-2.72-1.31-3.7-1.07-1.07-2.23-1.24-3.7-1.31-1.46-.07-1.92-.08-5.62-.08zM12 7.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.3a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm5.2-6.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
