import Socials from "../components/Socials";

const HomePage = () => {
    return (
        <>
            <section id="#" className="animate-fadeIn">
                <div className="h-screen flex items-center justify-center animate-fadeInFromBottom">
                    <div className="sm:h-2/5 flex flex-col justify-between items-center">
                        <h1 className="text-4xl">
                            &#128075; Hello, my name is
                        </h1>
                        <h1 className="m-12 text-6xl sm:text-8xl h-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text flex items-center font-semibold text-center leading-tight hover:scale-110 duration-200">
                            Owen Wang
                        </h1>
                        <Socials />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
