export default function Card({
    icon: Icon,
    image,
    backgroundImage,
    label,
    description,
    className = "",
    labelClassName = "",
    descriptionClassName = "",
    onClick,
    isSelected = false
}) {
    return (
        <div onClick={onClick} className={`relative border border-gray-200 bg-white p-5 md:p-6 hover:shadow-sm transition
                ${isSelected ? "ring-2 ring-gray-400" : ""} ${className}`}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {backgroundImage && (
                <div className="absolute inset-0 bg-white/50 rounded-2xl pointer-events-none"></div>
            )}

            <div className="relative z-10">
                {image ? (
                    <div className="mb-5 overflow-hidden">
                        <img src={image} alt="Logo" className="w-full object-contain bg-white" />
                    </div>
                ) : Icon ? (
                    <div className="flex items-center justify-center mb-5 w-12 h-12 bg-gray-100 rounded-xl">
                        <Icon className="w-6 h-6 text-gray-800" />
                    </div>
                ) : null}

                <div className={`flex ${!Icon && !image ? "justify-end" : "justify-between"} items-end`}>
                    <div>
                        <span className={`${labelClassName}`}> {label} </span>
                        <h4 className={`${descriptionClassName}`}> {description} </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}