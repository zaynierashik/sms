import Card from "./Card";

export default function CardLayout({ metrics, className = "", descriptionClassName = "", labelClassName = "" }) {
    return (
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ${className}`}>
            {metrics.map((metric, index) => (
                <Card
                    key={index}
                    icon={metric.icon}
                    label={metric.label}
                    description={metric.description}
                    className={metric.className || className}
                    labelClassName={metric.labelClassName || labelClassName}
                    descriptionClassName={metric.descriptionClassName || descriptionClassName}
                    isSelected={metric.isSelected || false}
                    {...(metric.onClick ? { onClick: metric.onClick } : {})}
                />
            ))}
        </div>
    );
}