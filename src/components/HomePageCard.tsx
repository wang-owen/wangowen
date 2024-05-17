import bg from "../assets/img/card.png";

const HomePageCard = () => {
    return (
        <div
            className="mx-20 my-16 h-56 w-96 p-5 text-center border border-gray-200 shadow-xl flex flex-col justify-between hover:-translate-y-3 duration-500 font-copperplate font-light"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex justify-between text-base">
                <span>Toronto, ON</span>
                <span>wangowen.com</span>
            </div>
            <div className="flex justify-center text-3xl">
                <span>OWEN WANG</span>
            </div>
            <div className="flex justify-center text-base">
                <span>contact@wangowen.com</span>
            </div>
        </div>
    );
};

export default HomePageCard;
