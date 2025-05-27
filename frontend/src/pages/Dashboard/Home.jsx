import CardLayout from "../../components/card/CardLayout";
import { BuildingOffice2Icon, UserIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
	const schoolMetrics = [
        {
            icon: BuildingOffice2Icon,
            label: "Associated Institutions",
            description: "25",
        },
        {
            icon: UserIcon,
            label: "Involved Instructors",
            description: "15",
        },
        {
            icon: ClockIcon,
            label: "Offered Courses",
            description: "5",
        },
        {
            icon: XCircleIcon,
            label: "Cancelled Requests",
            description: "5",
        },
    ];

	return (
		<>
            <div className="mt-11 mb-5">
                <h1 className="text-4xl font-semibold dark:text-white/90">Welcome, Rashik Chauhan.</h1>
            </div>

			<div className="gap-4 mb-6 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-6">
                    <CardLayout metrics={schoolMetrics} className="rounded-2xl md:gap-6 xl:grid-cols-4" labelClassName="text-theme-base dark:text-gray-400" descriptionClassName="font-bold text-title-lg dark:text-white/90"/>
                </div>
            </div>
		</>
	);
}