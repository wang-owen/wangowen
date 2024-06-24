import { FaExternalLinkAlt } from "react-icons/fa";

const ResumePage = () => {
    return (
        <section className="animate-fadeIn">
            <div className="flex justify-center h-full">
                <div className="flex justify-center h-full w-full lg:w-2/3">
                    <div className="h-full w-full flex justify-end">
                        <iframe
                            src="Owen Wang Resume.pdf"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="self-end m-4 hover:opacity-50 duration-300 absolute lg:relative right-0 lg:right-auto">
                    <a href="Owen Wang Resume.pdf" target="_blank">
                        <FaExternalLinkAlt size={25} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResumePage;
