const CarouselCard = ({
    img,
    label,
    link,
}: {
    img: string;
    label: string;
    link: string;
}) => {
    return (
        <div className="relative text-center flex flex-col gap-4">
            <a href={link} target="_blank">
                <img
                    className="object-scale-down h-48 hover:scale-110 hover:z-10 hover:cursor-ne-resize duration-300"
                    src={img}
                />
            </a>
            <label>{label}</label>
        </div>
    );
};

export default CarouselCard;
