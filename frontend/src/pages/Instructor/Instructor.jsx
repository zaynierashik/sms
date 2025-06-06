import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ComponentCard from "../../components/card/ComponentCard";
import ItemsTable from "../../components/table/ItemsTable";
import { PlusIcon } from "@heroicons/react/24/outline";

const initialData = [
    {
        id: 1,
        instructorName: "Rashik Chauhan",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210"
    },
    {
        id: 2,
        instructorName: "Manisha Devkota",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210"
    },
    {
        id: 3,
        instructorName: "Aanuk Mahat",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210"
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
                c.address?.toLowerCase().includes(lower);
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
        <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="border border-gray-200 text-gray-500 px-3 py-[9px] rounded-md text-sm lg:w-[20%]"
        >
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
    ];

    return (
        <div className="text-lg font-medium text-gray-800 space-y-4">
            <ComponentCard title="Instructors" icon={PlusIcon} onIconClick={() => navigate("/new-instructor")} >
                <ItemsTable columns={columns} data={InstructorData} onSelect={setSelectedIds} selectedIds={selectedIds} onSearch={handleSearch} filters={statusFilterDropdown} />
            </ComponentCard>
        </div>
    );
}