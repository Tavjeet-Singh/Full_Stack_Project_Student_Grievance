import { Link } from "react-router-dom";

function StudentDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">

                <h1 className="text-3xl font-bold text-green-600 mb-6">
                    Student Dashboard
                </h1>

                <div className="space-x-4">

                    <Link to="/submit">
                        <div className="bg-gray-100 p-4 rounded-lg hover:bg-green-600 hover:text-white transition duration-200 cursor-pointer">
                            Submit Grievance
                        </div>
                    </Link>

                    <Link to="/view">
                        <div className="bg-gray-100 p-4 rounded-lg hover:bg-green-600 hover:text-white transition duration-200 cursor-pointer">
                            View My Grievances
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default StudentDashboard;