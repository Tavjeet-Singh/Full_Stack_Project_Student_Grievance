import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setRole }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleStudentLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        setRole("student");
        navigate("/student");
    };

    const handleAdminLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        setRole("admin");
        navigate("/admin");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
                    Login
                </h1>

                <form className="space-y-4">

                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div className="flex gap-3 pt-2">

                        <button
                            onClick={handleStudentLogin}
                            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
                        >
                            Student Login
                        </button>

                        <button
                            onClick={handleAdminLogin}
                            className="flex-1 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
                        >
                            Admin Login
                        </button>

                    </div>

                </form>

                <p className="text-center text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-green-600 hover:underline">
                        Register here
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;