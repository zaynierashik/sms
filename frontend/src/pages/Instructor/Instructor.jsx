import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ComponentCard from "../../components/card/ComponentCard";
import ItemsTable from "../../components/table/ItemsTable";
import { PlusIcon } from "@heroicons/react/24/outline";

import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";

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

export default function Instructor({ instructorName, email, assignedSchool, contact, onSave }) {
    const { isOpen, openModal, closeModal } = useModal();

	const handleSave = () => {
		onSave?.();
		closeModal();
	};

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
            <ComponentCard title="Instructors" icon={PlusIcon} onIconClick={openModal}>
                <ItemsTable columns={columns} data={InstructorData} onSelect={setSelectedIds} selectedIds={selectedIds} onSearch={handleSearch} filters={statusFilterDropdown}/>
            </ComponentCard>

            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
				<div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
					<div className="px-2 pr-14">
						<h4 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white/90"> Add Instructor </h4>
					</div>

					<form className="flex flex-col">
						<div className="px-2 pb-2 overflow-y-auto custom-scrollbar">
							<div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
								<div className="col-span-2 text-theme-base">
									<Label className={"text-theme-base"} htmlFor="instructorName">Instructor Name</Label>
									<Input className="text-theme-base font-normal" id="instructorName" type="text" value={instructorName} />
								</div>

								<div className="col-span-2 text-theme-base">
									<Label className={"text-theme-base"} htmlFor="assignedSchool">Assigned School</Label>
									<Input className="text-theme-base font-normal" id="assignedSchool" type="text" value={assignedSchool} />
								</div>

								<div>
									<Label className={"text-theme-base"} htmlFor="email">Email Address</Label>
									<Input className="text-theme-base font-normal" id="email" type="email" value={email} />
								</div>

								<div>
									<Label className={"text-theme-base"} htmlFor="contact">Contact</Label>
									<Input className="text-theme-base font-normal" id="contact" type="text" value={contact} />
								</div>
							</div>
						</div>

						<div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
							<Button size="sm" variant="outline" onClick={closeModal}> Close </Button>
							<Button size="sm" onClick={handleSave}> Save Changes </Button>
						</div>
					</form>
				</div>
			</Modal>
        </div>
    );
};