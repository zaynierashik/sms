import { useState, useEffect, useRef } from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import CloudsImage from "../../assets/class-bg.svg";

export default function Class() {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const institution = location.state;

	const [selectedIndex, setSelectedIndex] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [pendingDeleteIndex, setPendingDeleteIndex] = useState(null);
	const cardRefs = useRef([]);

	const [schoolMetrics, setSchoolMetrics] = useState([
		{ description: "3", backgroundImage: CloudsImage, students: 25 },
		{ description: "4", backgroundImage: CloudsImage, students: 32 },
		{ description: "5", backgroundImage: CloudsImage, students: 28 },
		{ description: "6", backgroundImage: CloudsImage, students: 30 },
		{ description: "7", backgroundImage: CloudsImage, students: 22 },
		{ description: "8", backgroundImage: CloudsImage, students: 27 },
		{ description: "9", backgroundImage: CloudsImage, students: 29 },
	]);

	const handleCardClick = (index) => {
		setSelectedIndex((prev) => (prev === index ? null : index));
	};

	const handleDeleteClick = (index) => {
		setPendingDeleteIndex(index);
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = () => {
		if (pendingDeleteIndex !== null) {
			const updatedMetrics = [...schoolMetrics];
			updatedMetrics.splice(pendingDeleteIndex, 1);
			setSchoolMetrics(updatedMetrics);
			setIsDeleteModalOpen(false);
			setPendingDeleteIndex(null);
			setSelectedIndex(null);
		}
	};

	useEffect(() => {
		function handleClickOutside(event) {
			if (selectedIndex === null) return;
			const node = cardRefs.current[selectedIndex];
			if (node && !node.contains(event.target)) {
				setSelectedIndex(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [selectedIndex]);

	return (
		<div className="space-y-4">
			<PageBreadcrumb
				pathSegments={[
					{ name: "Dashboard", path: "/dashboard" },
					{ name: institution?.label ?? `Institution ${id}`, path: `/institution-details/${id}` },
					{ name: "Classes" },
				]}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3">
				{schoolMetrics.map((metric, index) => (
					<div
						key={index}
						ref={(el) => (cardRefs.current[index] = el)}
						onClick={() => handleCardClick(index)}
						className="relative border border-gray-200 bg-white h-55 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 rounded-2xl cursor-pointer transition duration-200 ease-in-out overflow-hidden"
					>
						<img src={metric.backgroundImage} alt="" className="absolute inset-0 w-full h-full object-contain opacity-50 pointer-events-none" />

						<div className="absolute top-3 right-4 z-10">
							<h4 className="text-title-lg font-bold text-right dark:text-white/90">
								{metric.description}
							</h4>
						</div>

						<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
							<span className="bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-200 text-sm px-3 py-1 rounded-full shadow-sm">
								Total Students: {metric.students}
							</span>
						</div>

						{selectedIndex === index && (
							<div className="absolute inset-0 bg-white/60 dark:bg-black/30 backdrop-blur-md flex items-center justify-center rounded-2xl z-20">
								<div className="flex gap-4">
									<button className="p-2 bg-white rounded-full shadow hover:bg-red-500 dark:bg-white/10 dark:hover:bg-red-600"
										onClick={(e) => {
											e.stopPropagation();
											handleDeleteClick(index);
										}}
									>
										<TrashIcon className="w-4 h-4 text-red-600 dark:text-white" />
									</button>
									<button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20"
										onClick={(e) => {
										e.stopPropagation();
										navigate(`/institution-details/${id}/classes/${index + 1}`, {
											state: {
											classData: schoolMetrics[index],
											classId: index + 1,
											institution: { id, label: institution?.label ?? `Institution ${id}` }
											}
										});
										}}
									>
										<EyeIcon className="w-4 h-4 text-gray-700 dark:text-white" />
									</button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			{isDeleteModalOpen && (
				<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
					<div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[90%] max-w-sm">
						<h2 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white"> Are you sure? </h2>
						<p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6"> Do you really want to delete this class? </p>

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