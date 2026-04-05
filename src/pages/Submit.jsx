import { useState } from "react";

function Submit({ grievances, setGrievances }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [anonymous, setAnonymous] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGrievance = {
            id: Date.now(),
            title,
            description,
            category,
            anonymous,
            status: "Pending",
        };

        setGrievances([...grievances, newGrievance]);

        alert("Grievance Submitted Successfully!");

        setTitle("");
        setDescription("");
        setCategory("");
        setAnonymous(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">

                <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
                    Submit Grievance
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            placeholder="Enter grievance title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            placeholder="Describe your issue"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border p-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">Select category</option>
                            <option value="Academic">Academic</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Facilities">Facilities</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={anonymous}
                            onChange={() => setAnonymous(!anonymous)}
                            className="accent-green-600"
                        />
                        <label className="text-gray-700">
                            Submit Anonymously
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Submit;