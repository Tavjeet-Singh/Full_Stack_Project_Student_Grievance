function View({ grievances }) {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">

            <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
                My Grievances
            </h1>

            {grievances.length === 0 ? (
                <p className="text-center text-gray-600">
                    No grievances submitted yet.
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

                            <div className="text-sm text-gray-700 space-y-1">
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

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default View;