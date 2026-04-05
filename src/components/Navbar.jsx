import { Link, useNavigate } from "react-router-dom";

function Navbar({ role, setRole }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setRole(null);
        navigate("/");
    };

    return (
        <nav className="flex justify-between items-center bg-white shadow px-6 py-3">

            <h2 className="text-2xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition duration-200">
                <Link to="/">Grievance Portal</Link>
            </h2>

            <ul className="flex items-center gap-4 text-gray-800 font-medium">

                {!role && (
                    <>
                        <li>
                            <Link
                                to="/register"
                                className="px-3 py-1 hover:border hover:border-dashed hover:border-green-500 hover:rounded hover:text-green-600 transition duration-200"
                            >
                                Register
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/login"
                                className="px-3 py-1 hover:border hover:border-dashed hover:border-green-500 hover:rounded hover:text-green-600 transition duration-200"
                            >
                                Login
                            </Link>
                        </li>
                    </>
                )}

                {role === "student" && (
                    <>
                        <li>
                            <Link
                                to="/student"
                                className="px-3 py-1 hover:border hover:border-dashed hover:border-green-500 hover:rounded hover:text-green-600 transition duration-200"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}

                {role === "admin" && (
                    <>
                        <li>
                            <Link
                                to="/admin"
                                className="px-3 py-1 hover:border hover:border-dashed hover:border-green-500 hover:rounded hover:text-green-600 transition duration-200"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    );
}

export default Navbar;