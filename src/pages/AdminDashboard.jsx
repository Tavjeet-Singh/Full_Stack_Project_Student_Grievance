function AdminDashboard({ grievances, setGrievances }) {

    const handleDelete = (id) => {
        const updated = grievances.filter((g) => g.id !== id);
        setGrievances(updated);
    };

    const handleStatusChange = (id) => {
        const updated = grievances.map((g) => {
            if (g.id === id) {
                if (g.status === "Pending") return { ...g, status: "In Progress" };
                if (g.status === "In Progress") return { ...g, status: "Resolved" };
            }
            return g;
        });

        setGrievances(updated);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">

            <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
                Admin Dashboard
            </h1>

            {grievances.length === 0 ? (
                <p className="text-center text-gray-600">
                    No grievances available.
                </p>
            ) : (
                <div className="max-w-4xl mx-auto space-y-4">

                    {grievances.map((g) => (
                        <div
                            key={g.id}
                            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-200"
                        >

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {g.title}
                            </h3>

                            <p className="text-gray-600 mb-3">
                                {g.description}
                            </p>

                            <div className="text-sm text-gray-700 space-y-1 mb-4">
                                <p><span className="font-medium">Category:</span> {g.category || "N/A"}</p>

                                <p>
                                    <span className="font-medium">Status:</span>{" "}
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium
                      ${g.status === "Pending" ? "bg-yellow-100 text-yellow-700" : ""}
                      ${g.status === "In Progress" ? "bg-blue-100 text-blue-700" : ""}
                      ${g.status === "Resolved" ? "bg-green-100 text-green-700" : ""}
                    `}
                                    >
                                        {g.status}
                                    </span>
                                </p>

                                <p>
                                    <span className="font-medium">Anonymous:</span>{" "}
                                    {g.anonymous ? "Yes" : "No"}
                                </p>
                            </div>

                            <div className="flex gap-3">

                                <button
                                    onClick={() => handleStatusChange(g.id)}
                                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition duration-200"
                                >
                                    Change Status
                                </button>

                                <button
                                    onClick={() => handleDelete(g.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default AdminDashboard;