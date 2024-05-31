import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState, useEffect } from "react";
import oliver from "../assets/img/Oliver.png";
import {
    FaPython,
    FaJava,
    FaJs,
    FaHtml5,
    FaCss3,
    FaSass,
    FaReact,
    FaBootstrap,
    FaGitAlt,
    FaLinux,
} from "react-icons/fa6";
import {
    SiTypescript,
    SiDjango,
    SiTailwindcss,
    SiPostgresql,
    SiSqlite,
    SiRabbitmq,
    SiDocker,
    SiAmazonaws,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const ResumePage = () => {
    const iconSize = 50;
    const skills = [
        <FaPython size={iconSize} />,
        <FaJava size={iconSize} />,
        <FaJs size={iconSize} />,
        <SiTypescript size={iconSize} />,
        <FaHtml5 size={iconSize} />,
        <FaCss3 size={iconSize} />,
        <FaSass size={iconSize} />,
        <TbSql size={iconSize} />,
        <SiDjango size={iconSize} />,
        <FaReact size={iconSize} />,
        <SiTailwindcss size={iconSize} />,
        <FaBootstrap size={iconSize} />,
        <FaGitAlt size={iconSize} />,
        <FaLinux size={iconSize} />,
        <SiPostgresql size={iconSize} />,
        <SiSqlite size={iconSize} />,
        <SiRabbitmq size={iconSize} />,
        <SiDocker size={iconSize} />,
        <SiAmazonaws size={iconSize} />,
    ];

    const stats = [
        "185 bench",
        "masters 221 lp league",
        "1 million mastery rengar",
        "1000 bedwars wins",
    ];

    const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.75);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setPageWidth((window.innerWidth * 2) / 5);
            } else {
                setPageWidth(window.innerWidth * 0.85);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-5/6 flex flex-col sm:flex-row justify-between my-20 sm:my-8">
                    <div className="text-center animate-fadeInFromLeft">
                        <div className="w-min border border-gray-400 shadow-xl">
                            <Document file="Owen Wang Resume.pdf">
                                <Page pageNumber={1} width={pageWidth} />
                            </Document>
                        </div>
                        <a
                            className="underline"
                            href="Owen Wang Resume.pdf"
                            target="_blank"
                        >
                            Open PDF
                        </a>
                    </div>
                    <div className="sm:ml-12 text-center flex flex-col justify-start w-full">
                        <div>
                            <div className="m-5 text-4xl">Owen Wang</div>
                            <div className="text-lg">
                                <p>
                                    &#128075; I'm a computer science student at
                                    Carleton University
                                </p>
                            </div>
                            <br></br>
                            <div className="text-left text-base">
                                <p>
                                    Greetings! My name is Owen Wang, and I'm
                                    studying computer science at Carleton
                                    University. You may be interested my
                                    projects or resume, in which you may refer
                                    to the links on the top right of your
                                    screen.
                                </p>
                                <p>
                                    My hobbies include playing guitar, reading
                                    One Piece and DC, playing video games, and
                                    watching movies & TV shows!
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-8 grid grid-cols-5 gap-4 justify-items-center">
                                {skills.map((skill) => skill)}
                            </div>
                        </div>
                        <div className="w-1/2 self-center">
                            <span className="text-2xl">misc stats</span>
                            <ul className="list-item text-left text-base">
                                {stats.map((stat) => (
                                    <li className="list-disc">{stat}</li>
                                ))}
                            </ul>
                        </div>
                        <img
                            className="m-4 self-center"
                            src={oliver}
                            width={450}
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePage;
