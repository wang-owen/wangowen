import CarouselCard from "./CarouselCard";

const Carousel = () => {
    return (
        <div className="carousel carousel-center max-w-full space-x-4 p-4">
            <div className="carousel-item">
                <CarouselCard
                    label="Brook"
                    img="https://github.com/wang-owen/Brook/blob/main/client/public/screenshots/homepage.png?raw=true"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Internsheet"
                    img="https://github.com/wang-owen/Internsheet/assets/69203168/98f1a7a1-c289-4d77-a33b-2f5b58d9f93c"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="JBKR Mobile"
                    img="https://github.com/wang-owen/JBKR-Mobile/assets/69203168/9bc91515-cfc4-459c-a814-54f108e8fa7a"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Local Superchat"
                    img="https://github.com/wang-owen/local-superchat/assets/69203168/dd957db0-08eb-4535-aab2-ce86a2eefec3"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Checkers"
                    img="https://github.com/wang-owen/Checkers/assets/69203168/7a812183-bb4a-47c9-b1ec-18eb686d379c"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Sorting Visualizer"
                    img="https://github.com/wang-owen/SortingVisualizer/assets/69203168/ba920749-eba3-4999-9d65-b7eed7b411db"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Snakedy Dakedy"
                    img="https://github.com/wang-owen/SnakedyDakedy/assets/69203168/7ea0dd52-66cb-4629-8426-99987372a238"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="The Wildfire Network"
                    img="https://github.com/wang-owen/TheWildfireNetwork/assets/69203168/22a007d6-d469-4b7c-bbc2-75e4c484e0f6"
                />
            </div>
            <div className="carousel-item">
                <CarouselCard
                    label="Stuckdoku"
                    img="https://github.com/wang-owen/Stuckdoku/assets/69203168/6cd67d09-1064-40c2-9cb3-9931708de7a5"
                />
            </div>
        </div>
    );
};

export default Carousel;
