import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function ItemsTable({ columns = [], data = [] }) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const filteredData = data.filter((item) =>
		item.instructorName.toLowerCase().includes(searchQuery)
	);

	return (
		<div className="bg-white rounded-2xl shadow-sm p-4">
			{/* Search & Filters */}
			<div className="flex justify-between items-center mb-4">
				<div className="flex items-center gap-2">
					<input
						type="text"
						placeholder="🔍 Search by Name"
						className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
						onChange={handleSearch}
						value={searchQuery}
					/>
					<button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md text-sm">
						Select
					</button>
				</div>
			</div>

			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead className="bg-[#EDF9FD] rounded-t-xl">
						<tr>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">No</th>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">Teachers Name</th>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">Email</th>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">Assigned School</th>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">Contact</th>
							<th className="px-6 py-3 text-sm font-medium text-gray-600">Action</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((row, idx) => (
							<tr key={row.id} className="border-t border-gray-100">
								<td className="px-6 py-4 text-sm font-medium text-gray-700">0{idx + 1}</td>
								<td className="px-6 py-4 flex items-center gap-3 text-sm font-medium text-gray-700">
									<img src={row.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
									{row.instructorName}
								</td>
								<td className="px-6 py-4 text-sm text-gray-600">{row.email}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{row.school}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{row.contact}</td>
								<td className="px-6 py-4 text-sm text-gray-600">
									<button className="p-2 hover:bg-gray-100 rounded-full">
										<PencilIcon className="w-4 h-4 text-gray-500" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
