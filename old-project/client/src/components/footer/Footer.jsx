import logo from "../../assets/logo.jpg";

export default function Footer() {
    return (
        <footer className="bg-gray-800 sticky bottom-0 w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img alt="TechHaven" src={logo} className="h-8" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
                            TechHaven
                        </span>
                    </a>
                </div>
                <span className="block text-md text-gray-500 sm:text-center">
                    © 2024{" "}
                    <a>TechHaven™</a>. SoftUni React Project.
                </span>
            </div>
        </footer>
    );
}
