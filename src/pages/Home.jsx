import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">

            <div className="text-center py-16 bg-gradient-to-r from-green-100 to-green-200">
                <h1 className="text-6xl p-8 font-bold text-green-700 mb-4">
                    Student Grievance Portal
                </h1>

                <p className="text-gray-700 text-xl mb-6 max-w-6xl mx-auto pb-8">
                    A simple and secure platform for students to raise concerns and get them resolved efficiently.
                </p>

                <Link to="/register">
                    <button className="text-2xl bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 hover:scale-105 hover:cursor-pointer transition duration-200">
                        Get Started
                    </button>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-16">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <h3 className="text-xl font-semibold mb-3">Submit</h3>
                        <p className="text-gray-600">
                            Submit your grievance easily through a simple form.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <h3 className="text-xl font-semibold mb-3">Track</h3>
                        <p className="text-gray-600">
                            Monitor the progress of your complaint in real-time.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <h3 className="text-xl font-semibold mb-3">Resolve</h3>
                        <p className="text-gray-600">
                            Get timely resolution from the administration.
                        </p>
                    </div>

                </div>

                <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
                    What We Offer
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-10">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2">Anonymous Submission</h3>
                        <p className="text-gray-600">
                            Submit grievances without revealing your identity.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2">Quick Resolution</h3>
                        <p className="text-gray-600">
                            Get faster responses from the administration.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
                        <p className="text-gray-600">
                            Track status updates of your grievances easily.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2">Secure System</h3>
                        <p className="text-gray-600">
                            Your data remains safe and confidential.
                        </p>
                    </div>

                </div>

                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">
                        Status Types
                    </h3>

                    <div className="flex justify-center gap-6 text-gray-700">
                        <span className="px-3 py-1 bg-yellow-100 rounded">Pending</span>
                        <span className="px-3 py-1 bg-blue-100 rounded">In Progress</span>
                        <span className="px-3 py-1 bg-green-100 rounded">Resolved</span>
                    </div>
                </div>

            </div>

            <div className="bg-gray-900 text-white text-center py-4">
                <p>@2026 Students Grievance Portal. All rights reserved</p>
            </div>

        </div>
    );
}

export default Home;