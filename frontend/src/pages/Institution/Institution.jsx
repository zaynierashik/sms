import CardLayout from "../../components/card/CardLayout";

export default function Institution() {
    const institutionMetrics = [
        {
            image: "/assets/triton-logo.png",
            label: "Associated Institutions",
            description: "25",
        },
        {
            image: "/assets/triton-logo.png",
            label: "Involved Instructors",
            description: "15",
        },
        {
            image: "/assets/triton-logo.png",
            label: "In Process",
            description: "5",
        },
        {
            image: "/assets/triton-logo.png",
            label: "Cancelled Requests",
            description: "5",
        },
    ];

    return (
        <>
            <div className="gap-4 mb-6 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-6">
                    <CardLayout metrics={institutionMetrics} className="rounded-2xl md:gap-6 xl:grid-cols-4" labelClassName="text-theme-base dark:text-gray-400" descriptionClassName="font-bold text-title-lg dark:text-white/90"/>
                </div>
            </div>
        </>
    )
}