import { FaExternalLinkAlt } from "react-icons/fa";

const ResumePage = () => {
    return (
        <section className="animate-fadeIn h-full">
            <div className="flex justify-center h-full">
                <div className="h-full w-full lg:w-2/3 flex justify-end">
                    <div className="absolute m-6 hover:opacity-50 duration-300">
                        <a href="Owen Wang Resume.pdf" target="_blank">
                            <FaExternalLinkAlt size={25} color="black" />
                        </a>
                    </div>
                    <iframe
                        src="Owen Wang Resume.pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </section>
    );
};

export default ResumePage;
