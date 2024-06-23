const CarouselCard = ({ img, label }: { img: string; label: string }) => {
    return (
        <div className="relative text-center flex flex-col gap-4">
            <img
                className="object-scale-down h-48 hover:scale-110 hover:z-10 duration-200"
                src={img}
            />
            <label>{label}</label>
        </div>
    );
};

export default CarouselCard;
