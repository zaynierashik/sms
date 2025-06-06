import { PlusIcon } from "@heroicons/react/24/outline";

export default function IconButton({
    onIconClick,
    icon: Icon = PlusIcon,
    text = "",
    className = ""
}) {
    const hasText = Boolean(text);

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={onIconClick}
                className={`flex items-center justify-center gap-2 text-white bg-[#294998] border border-gray-200 rounded-lg hover:bg-gray-700 transition duration-300 
                ${hasText ? "px-4 py-2" : "w-10 h-10"} ${className}`}
            >
                <Icon className="w-4.5 h-4.5" />
                {hasText && <span className="text-sm py-0.5">{text}</span>}
            </button>
        </div>
    );
}