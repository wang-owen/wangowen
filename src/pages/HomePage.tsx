import Socials from "../components/Socials";

const HomePage = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="h-2/5 flex flex-col justify-between items-center">
                    <h1 className="mt-10 text-4xl">
                        &#128075; Hello, my name is
                    </h1>
                    <h1 className="text-8xl h-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text flex items-center font-semibold">
                        Owen Wang
                    </h1>
                    <Socials />
                </div>
            </div>
        </>
    );
};

export default HomePage;
