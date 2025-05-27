import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ComponentCard from "../../components/card/ComponentCard";
import ItemsTable from "../../components/table/ItemsTable";
import { CheckCircleIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/outline";

const initialData = [
    {
        id: 1,
        instructorName: "Rashik Chauhan",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
    },
    {
        id: 2,
        instructorName: "Manisha Devkota",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
    },
    {
        id: 3,
        instructorName: "Aanuk Mahat",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
    },
];

export default function Instructor() {
    const navigate = useNavigate();
    const [allInstructors, setAllInstructors] = useState(initialData);
    const [InstructorData, setInstructorData] = useState(initialData);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const applyFilters = (query, status) => {
        const lower = query.toLowerCase();
        const filtered = allInstructors.filter((c) => {
            const matchesSearch =
                c.instructorName.toLowerCase().includes(lower) ||
                c.school.toLowerCase().includes(lower) ||
                c.address.toLowerCase().includes(lower);
            const matchesStatus = status === "All" || c.status === status;
            return matchesSearch && matchesStatus;
        });
        setInstructorData(filtered);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        applyFilters(query, statusFilter);
    };

    const handleStatusFilterChange = (e) => {
        const value = e.target.value;
        setStatusFilter(value);
        applyFilters(searchQuery, value);
    };

    const statusFilterDropdown = (
        <select value={statusFilter} onChange={handleStatusFilterChange} className="border border-gray-200 text-gray-500 dark:bg-gray-900 dark:text-gray-400 px-3 py-[9px] rounded-md text-sm lg:w-[20%]">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
        </select>
    );

    const columns = [
        { label: "Instructor Name", accessor: "instructorName" },
        { label: "Email Address", accessor: "email" },
        { label: "Assigned School", accessor: "school" },
        { label: "Contact", accessor: "contact" },
        // {
        //     label: "",
        //     accessor: "actions",
        //     render: (row) => (
        //         <div className="flex justify-center items-center gap-3 px-4">
        //             <button onClick={(e) => { e.stopPropagation(); navigate(`/instructor-details/${row.id}`, { state: { instructor: row } }); }} title="Delete" className="text-gray-500 hover:text-gray-700">
        //                 <EyeIcon className="w-4 h-4" />
        //             </button>
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="text-lg font-medium text-gray-800 space-y-4">
            <ComponentCard title="Report">
                <ItemsTable columns={columns} data={InstructorData} onSelect={setSelectedIds} selectedIds={selectedIds} onSearch={handleSearch} filters={statusFilterDropdown}/>
            </ComponentCard>
        </div>
    );
};