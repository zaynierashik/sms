import { useState, useEffect, useRef } from "react";
import { EyeIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import TritonLogo from "../../assets/institutions/triton-logo.png";
import IconPageBreadCrumb from "../../components/breadcrumb/IconPageBreadCrumb";

export default function Home() {
	const [visibleCount, setVisibleCount] = useState(8);
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [pendingDeleteIndex, setPendingDeleteIndex] = useState(null);
	const navigate = useNavigate();

	const cardRefs = useRef([]);

	const [institutionMetrics, setInstitutionMetrics] = useState(
		Array(16)
			.fill()
			.map((_, i) => ({
				id: i + 1,
				image: TritonLogo,
				label: `Triton SS & College ${i + 1}`,
			}))
	);

	const visibleInstitutions = institutionMetrics.slice(0, visibleCount);

	const handleShowMore = () => setVisibleCount((prev) => prev + 8);

	const handleCardClick = (index) => {
		setSelectedIndex((prev) => (prev === index ? null : index));
	};

	const handleDeleteClick = (index) => {
		setPendingDeleteIndex(index);
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = () => {
		if (pendingDeleteIndex !== null) {
			const updatedMetrics = [...institutionMetrics];
			updatedMetrics.splice(pendingDeleteIndex, 1);
			setInstitutionMetrics(updatedMetrics);
			setIsDeleteModalOpen(false);
			setPendingDeleteIndex(null);
			setSelectedIndex(null);
		}
	};

	useEffect(() => {
		function handleClickOutside(event) {
			if (selectedIndex === null) return;
			const cardNode = cardRefs.current[selectedIndex];
			if (cardNode && !cardNode.contains(event.target)) {
				setSelectedIndex(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [selectedIndex]);

	return (
		<>  
            <div className="space-y-4">
                <IconPageBreadCrumb title="Institutions" text="Add Institution" icon={PlusIcon} />
                
                <div className="gap-4 mb-4 md:gap-6">
                    <div className="col-span-12 space-y-6 xl:col-span-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                            {visibleInstitutions.map((item, index) => (
                                <div key={item.id} ref={(el) => (cardRefs.current[index] = el)} onClick={() => handleCardClick(index)}
                                    className={`relative border border-gray-200 bg-white p-5 md:p-6 rounded-2xl cursor-pointer ${
                                        selectedIndex === index ? "ring-1 ring-gray-400" : ""
                                    }`}
                                >
                                    <div className="mb-5 overflow-hidden">
                                        <img src={item.image} alt={item.label} className="w-full object-contain bg-white" />
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="text-theme-base font-medium">{item.label}</span>
                                        </div>
                                    </div>

                                    {selectedIndex === index && (
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-2xl flex items-center justify-center z-10">
                                            <div className="flex gap-4">
                                                <button
                                                    className="group p-2 bg-white rounded-full shadow hover:bg-red-500"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteClick(index);
                                                    }}
                                                >
                                                    <TrashIcon className="w-4 h-4 text-red-600 group-hover:text-white" />
                                                </button>
                                                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/institution-details/${item.id}`, { state: item });
                                                    }}
                                                >
                                                    <EyeIcon className="w-4 h-4 text-gray-700" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

			{visibleCount < institutionMetrics.length && (
				<div className="flex justify-center mb-10">
					<button onClick={handleShowMore} className="text-sm font-medium px-4 py-2.5 rounded-md bg-[#e9a126] text-white hover:bg-gray-700 transition duration-300">
						Load More
					</button>
				</div>
			)}

			{isDeleteModalOpen && (
				<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm">
						<h2 className="text-lg font-semibold mb-4 text-center text-gray-800">Are you sure?</h2>
						<p className="text-sm text-gray-600 text-center mb-6">
							Do you really want to delete this institution?
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
		</>
	);
}