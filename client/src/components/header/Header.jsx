import logo from "../../assets/logo.jpg";

import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const location = useLocation();
    const { isAuthenticated } = useAuthContext();

    const navigation = isAuthenticated
        ? [
            { name: 'Home', href: '/', current: false },
            { name: 'Products', href: '/products', current: false },
            { name: 'Create an item', href: '/products/create', current: false },
            { name: 'My Profile', href: '/myProfile', current: false },
            { name: 'Logout', href: '/logout', current: false },
        ]
        : [
            { name: 'Home', href: '/', current: false },
            { name: 'Products', href: '/products', current: false },
            { name: 'Login', href: '/login', current: false },
            { name: 'Register', href: '/register', current: false },
        ];

    return (
        <header className="bg-gray-800">
            <div className="flex items-center justify-center h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-shrink-0 h-12">
                    <img
                        alt="TechHaven"
                        src={logo}
                        className="rounded-md"
                    />
                </div>
                <nav className="flex flex-1 justify-center">
                    <div className="flex space-x-4">
                        {navigation.map((item) => {
                            const isCurrent = location.pathname === item.href;
                            return (
                                <Link
                                    to={item.href}
                                    key={item.name}
                                    aria-current={isCurrent ? 'page' : undefined}
                                    className={classNames(
                                        isCurrent ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-lg font-medium'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </header>
    );
}
