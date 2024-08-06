import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import logo from "../../assets/logo.jpg";

import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import styles from './Header.module.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const location = useLocation();
    const { isAuthenticated, email } = useAuthContext();

    const navigation = isAuthenticated
        ? [
            { name: 'Home', href: '/', current: false },
            { name: 'Products', href: '/products', current: false },
            { name: 'Create an item', href: '/products/create', current: false },
            { name: 'Search', href: '/search', current: false },
        ]
        : [
            { name: 'Home', href: '/', current: false },
            { name: 'Products', href: '/products', current: false },
            { name: 'Search', href: '/search', current: false },
        ];

    return (
        <header className="bg-gray-800">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
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
                <Menu as="div" className="relative ml-3">
                    <div>
                        <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                                className="h-8 w-8 rounded-full"
                            />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        {isAuthenticated ? (
                            <div className="text-center">
                                <span className={styles.email}>
                                    {email}
                                </span>
                                <div className={styles.menuContainer}>
                                    <MenuItem>
                                        <Link to="/myProfile" className={styles.menuItem}>
                                            My Profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/logout" className={styles.menuItem}>
                                            Logout
                                        </Link>
                                    </MenuItem>
                                </div>
                            </div>
                        ) :
                            <div className='text-center'>
                                <div className={styles.menuContainer}>
                                    <MenuItem>
                                        <Link to="/login" className={styles.menuItem}>
                                            Login
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/Register" className={styles.menuItem}>
                                            Register
                                        </Link>
                                    </MenuItem>
                                </div>
                            </div>
                        }
                    </MenuItems>
                </Menu>
            </div>
        </header>
    );
}
