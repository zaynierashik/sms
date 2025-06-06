import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import ComponentCard from "../../components/card/ComponentCard";
import ItemsTable from "../../components/table/ItemsTable";
import { PlusIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const initialData = [
    {
        id: 1,
        studentName: "Rashik Chauhan",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210",
    },
    {
        id: 2,
        studentName: "Manisha Devkota",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210",
    },
    {
        id: 3,
        studentName: "Aanuk Mahat",
        email: "dokorecyclers@gmail.com",
        school: "Bernhardt School",
        contact: "+977 9876543210",
    },
];

export default function ClassDetails() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const classData = state?.classData;
    const classId = state?.classId;
    const institution = state?.institution;

    const [allStudents, setAllStudents] = useState(initialData);
    const [StudentData, setStudentData] = useState(initialData);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Delete modal state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [pendingDeleteStudent, setPendingDeleteStudent] = useState(null);

    const applyFilters = (query, status) => {
        const lower = query.toLowerCase();
        const filtered = allStudents.filter((c) => {
            const matchesSearch =
                c.studentName.toLowerCase().includes(lower) ||
                c.school.toLowerCase().includes(lower) ||
                c.address?.toLowerCase().includes(lower);
            const matchesStatus = status === "All" || c.status === status;
            return matchesSearch && matchesStatus;
        });
        setStudentData(filtered);
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

    const handleEdit = (student) => {
        console.log("Edit student:", student);
        // navigate to edit page or open modal here
    };

    // Open delete modal for the selected student
    const handleDeleteClick = (student) => {
        setPendingDeleteStudent(student);
        setIsDeleteModalOpen(true);
    };

    // Confirm deletion
    const confirmDelete = () => {
        if (pendingDeleteStudent) {
            setAllStudents((prev) => prev.filter((s) => s.id !== pendingDeleteStudent.id));
            setStudentData((prev) => prev.filter((s) => s.id !== pendingDeleteStudent.id));
            setIsDeleteModalOpen(false);
            setPendingDeleteStudent(null);
        }
    };

    const statusFilterDropdown = (
        <select value={statusFilter} onChange={handleStatusFilterChange} className="border border-gray-200 text-gray-500 px-3 py-[9px] rounded-md text-sm lg:w-[20%]">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
        </select>
    );

    const columns = [
        { label: "Student Name", accessor: "studentName" },
        { label: "Email Address", accessor: "email" },
        { label: "Assigned School", accessor: "school" },
        { label: "Contact", accessor: "contact" },
        {
            label: "Actions",
            accessor: "actions",
            render: (row) => (
                <div className="flex items-center space-x-3 text-gray-500">
                    <button onClick={() => handleEdit(row)} className="hover:text-gray-800" style={{ backgroundColor: "transparent" }} >
                        <PencilSquareIcon className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(row);
                        }}
                        title="Delete" className="text-red-600 hover:text-red-800" style={{ backgroundColor: "transparent" }} >
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="text-lg font-medium text-gray-800 space-y-4">
            <PageBreadcrumb
                pathSegments={[
                    { name: "Dashboard", path: "/dashboard" },
                    {
                        name: institution?.label ?? `Institution ${institution?.id ?? ""}`,
                        path: `/institution-details/${institution?.id}`,
                    },
                    {
                        name: "Classes",
                        path: `/institution-details/${institution?.id}/classes`,
                    },
                    { name: `Class ${classData?.description ?? classId}` },
                ]}
            />

            <ComponentCard title="Students Detail" icon={PlusIcon} 
                onIconClick={() =>
                    navigate(`/institution-details/${institution?.id}/classes/${classId}/new-student`, {
                        state: { institution, classData, classId }
                    }) } 
            >
                <ItemsTable columns={columns} data={StudentData} onSelect={setSelectedIds} selectedIds={selectedIds} onSearch={handleSearch} filters={statusFilterDropdown} snLabel="Roll No." />
            </ComponentCard>

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm">
                        <h2 className="text-lg font-semibold mb-4 text-center text-gray-800"> Are you sure? </h2>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Do you really want to delete <strong>{pendingDeleteStudent?.studentName}</strong>?
                        </p>

                        <div className="flex justify-end gap-4">
                            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm" >
                                Cancel
                            </button>
                            <button onClick={confirmDelete} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm" >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}