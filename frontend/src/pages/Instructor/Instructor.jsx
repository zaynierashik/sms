import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ComponentCard from "../../components/card/ComponentCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import FilterIcon from "../../assets/FilterIcon.png"
import Symbol from "../../assets/symbol.png"
import TeacherIcon from "../../assets/TeacherIcon.png"
import { IoIosArrowForward } from "react-icons/io";

const initialData = [
    {
        id: 1,
        instructorName: "William",
        email: "12-A",
        school: "MeroCoding",
        contact: "12345",
        avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
        id: 2,
        instructorName: "Jack",
        email: "12-A",
        school: "MeroCoding",
        contact: "34343434",
        avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
        id: 3,
        instructorName: "Willy",
        email: "12-A",
        school: "Galaxy",
        contact: "34343453534",
        avatar: "https://i.pravatar.cc/100?img=3"
    },
    {
        id: 4,
        instructorName: "Tom",
        email: "12-A",
        school: "Medhashree",
        contact: "78989878778",
        avatar: "https://i.pravatar.cc/100?img=4"
    }
];

export default function Instructor() {
    const navigate = useNavigate();
    const [allInstructors, setAllInstructors] = useState(initialData);
    const [InstructorData, setInstructorData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState("");

    const applyFilters = (query) => {
        const lower = query.toLowerCase();
        const filtered = allInstructors.filter((c) =>
            c.instructorName.toLowerCase().includes(lower)
        );
        setInstructorData(filtered);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        applyFilters(query);
    };

    const columns = [
        { label: "No", accessor: "serial", render: (_row, index) => <span>{String(index + 1).padStart(2, '0')}</span> },
        {
            label: "Teachers Name", accessor: "instructorName", render: (row) => (
                <div className="flex items-center gap-2">
                    <img src={row.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{row.instructorName}</span>
                </div>
            )
        },
        { label: "Email", accessor: "email" },
        { label: "Assigned School", accessor: "school" },
        { label: "Contact", accessor: "contact" },
        {
            label: "Actions", accessor: "actions", render: () => (
                <button className="text-gray-500 hover:text-gray-700">
                    ✏️
                </button>
            )
        }
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
           <div className="flex items-center gap-3 mb-8">
    <img src={Symbol} className="h-5 w-5" alt="Symbol" />
    <IoIosArrowForward className="h-3 w-3 text-gray-400" />
    <img src={TeacherIcon} className="h-5 w-5" alt="Teacher" />
    <p className="text-gray-500 text-sm">Manage Teachers</p>
</div>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Manage Teachers</h1>
                <button
                    onClick={() => navigate("/new-instructor")}
                    className="bg-[#455CA3] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
                >
                    <PlusIcon className="w-5 h-5" />
                    Add Teacher
                </button>
            </div>

            <ComponentCard>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Teachers list</h3>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full bg-white hover:bg-gray-100">
                           <img src={FilterIcon} className="h-6 w-6 text-gray-600"  alt="" />
                           
                        </button>

                        <input
                            type="text"
                            placeholder="Search by Name"
                            className="w-60 px-4 h-8 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
                            onChange={(e) => handleSearch(e.target.value)}
                            value={searchQuery}
                        />

                        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                            Select
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-sm text-gray-600">
                            <tr>
                                {columns.map((col, idx) => (
                                    <th key={idx} className="text-left px-4 py-3 border-b">{col.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {InstructorData.map((row, idx) => (
                                <tr key={row.id} className="border-b hover:bg-gray-50">
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className="px-4 py-3 text-sm text-gray-800">
                                            {col.render ? col.render(row, idx) : row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ComponentCard>
        </div>
    );
}
