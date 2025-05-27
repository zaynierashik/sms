// export default function Card({ icon: Icon, label, description, className = "", labelClassName = "", descriptionClassName = "", onClick, isSelected = false }) {
//     return (
//         <div onClick={onClick} className={`border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 hover:shadow-sm transition
//                 ${isSelected ? "ring-2 ring-gray-400" : ""}
//                 ${className}`}
//             >
//             {Icon && (
//                 <div className="flex items-center justify-center mb-5 w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
//                     <Icon className="w-6 h-6 text-gray-800 dark:text-white/90" />
//                 </div>
//             )}
            
//             <div className="flex items-end justify-between">
//                 <div>
//                     <span className={`${labelClassName}`}>
//                         {label}
//                     </span>
//                     <h4 className={`${descriptionClassName}`}>
//                         {description}
//                     </h4>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Card({
    icon: Icon,
    image,
    label,
    description,
    className = "",
    labelClassName = "",
    descriptionClassName = "",
    onClick,
    isSelected = false
}) {
    return (
        <div
            onClick={onClick}
            className={`border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 hover:shadow-sm transition
                ${isSelected ? "ring-2 ring-gray-400" : ""}
                ${className}`}
        >
            {(image || Icon) && (
                <div className="flex items-center justify-center mb-5 w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800 overflow-hidden">
                    {image ? (
                        <img src={image} alt="Logo" className="object-contain w-full h-full" />
                    ) : (
                        <Icon className="w-6 h-6 text-gray-800 dark:text-white/90" />
                    )}
                </div>
            )}

            <div className="flex items-end justify-between">
                <div>
                    <span className={`${labelClassName}`}>
                        {label}
                    </span>
                    <h4 className={`${descriptionClassName}`}>
                        {description}
                    </h4>
                </div>
            </div>
        </div>
    );
}
