import { useParams, useLocation, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import React, { useState } from "react";
import CardLayout from "../../components/card/CardLayout";
import { PlusIcon, UserIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import ComponentCard from "../../components/card/ComponentCard";
import ItemsTable from "../../components/table/ItemsTable";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const initialData = [
    {
        id: 1,
        date: new Date("2025-06-06"),
        instructorName: "Rashik Chauhan",
        topics: "dokorecyclers@gmail.com",
        program: "Bernhardt School",
    },
    {
        id: 2,
        date: new Date("2025-06-06"),
        instructorName: "Manisha Devkota",
        topics: "dokorecyclers@gmail.com",
        program: "Bernhardt School",
    },
    {
        id: 3,
        date: new Date("2025-06-06"),
        instructorName: "Aanuk Mahat",
        topics: "dokorecyclers@gmail.com",
        program: "Bernhardt School",
    },
];

export default function InstitutionDetails() {
    const { id } = useParams();
    const location = useLocation();
    const institution = location.state;
    const navigate = useNavigate();

    const schoolMetrics = [
        {
            icon: UserIcon,
            label: "Classes",
            path: `/institution-details/${id}/classes`,
            onClick: () => navigate(`/institution-details/${id}/classes`, { state: institution }),
        },
        { icon: BookOpenIcon, label: "Submissions" },
    ];

    const pieData = {
        labels: ["Classes", "Students", "Submissions"],
        datasets: [
            {
                label: "Submissions",
                data: [12, 19, 7],
                backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const columns = [
        { label: "Date", accessor: "date" },
        { label: "Topics Covered", accessor: "topics" },
        { label: "Program", accessor: "program" },
    ];

    const formattedData = initialData.map(item => ({
        ...item,
        date: new Intl.DateTimeFormat("en-US").format(new Date(item.date)),
    }));

    const [InstitutionData, setInstitutionData] = useState(formattedData);

    return (
        <div className="space-y-4">
            <PageBreadcrumb
                pathSegments={[
                    { name: "Dashboard", path: "/dashboard" },
                    { name: institution?.label ?? `Institution ${id}` },
                ]}
            />

            <CardLayout
                metrics={schoolMetrics}
                className="rounded-2xl md:gap-3 xl:grid-cols-4 sm:grid-cols-4"
                labelClassName="text-theme-base"
                descriptionClassName="font-bold text-title-lg"
            />

            <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="text-lg font-medium text-gray-800 space-y-4">
                        <ComponentCard title="Latest Submissions" titleClassName="text-lg normal-case">
                            <ItemsTable columns={columns} data={InstitutionData}/>
                        </ComponentCard>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <Pie data={pieData} options={pieOptions} />

                    <div className="mt-6 grid grid-cols-3 gap-3">
                        {pieData.labels.map((label, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md"
                            >
                                <div
                                    className="w-4 h-4 rounded-sm"
                                    style={{ backgroundColor: pieData.datasets[0].backgroundColor[idx] }}
                                ></div>
                                <span className="text-sm text-gray-700">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
