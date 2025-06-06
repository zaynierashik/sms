import IconButton from "../ui/button/IconButton";

export default function IconPageBreadCrumb({ title = "Page Title", onAddClick, icon, text = "" }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <IconButton onIconClick={onAddClick} icon={icon} text={text} />
        </div>
    );
}