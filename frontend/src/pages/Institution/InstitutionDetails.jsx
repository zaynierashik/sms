import { useParams, useLocation, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import CardLayout from "../../components/card/CardLayout";
import { UserIcon, BookOpenIcon } from "@heroicons/react/24/outline";

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

	return (
		<div className="space-y-4">
            <PageBreadcrumb
                pathSegments={[
                    { name: "Dashboard", path: "/dashboard" },
                    { name: institution?.label ?? `Institution ${id}` }
                ]}
            />

            <div className="flex-1">
                <CardLayout metrics={schoolMetrics} className="rounded-2xl md:gap-3 xl:grid-cols-3 sm:grid-cols-3" labelClassName="text-theme-base dark:text-gray-400" descriptionClassName="font-bold text-title-lg dark:text-white/90" />
            </div>
		</div>
	);
}