import { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
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
import ssj3 from "../assets/img/ssj3.gif";

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

    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setPageWidth(window.innerWidth / 2.61);
            } else {
                setPageWidth(window.innerWidth * 0.815);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="resume" className="h-screen">
            <div className="flex items-center justify-center">
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
                    <div className="sm:ml-12 text-center flex flex-col justify-between w-full h-min">
                        <div>
                            <div className="m-5 text-4xl">Owen Wang</div>
                            <div className="text-lg">
                                <p>
                                    &#128075; I'm a computer science student at
                                    the University of Waterloo
                                </p>
                            </div>
                            <br></br>
                            <div className="text-left text-base">
                                <p>
                                    I'm a second year computer science student
                                    at the University of Waterloo.
                                </p>
                                <br></br>
                                <p>
                                    I'm constantly looking for opportunities to
                                    learn new languages and technologies, and
                                    aim to push my skills{" "}
                                    <span className="group">
                                        <span className="underline">
                                            <i>even further beyond</i>
                                        </span>
                                        <img
                                            src={ssj3}
                                            className="absolute scale-0 group-hover:scale-100 origin-[25%_0%] duration-300 rounded-3xl border-4 border-black shadow-2xl"
                                        />
                                    </span>
                                    {" ⬅️"}
                                </p>
                                <br></br>
                                <p>
                                    Interested in robotics 🦾, real-time
                                    applications ⏱️, networking 🌐, computer
                                    vision 👁️, and server-side web development
                                    🚀.
                                </p>
                                <br></br>
                                <p>
                                    Currently seeking an internship for Winter
                                    2025 ❄️.
                                </p>
                                <br></br>
                                <ul>
                                    <li>
                                        💻 Currently working on{" "}
                                        <a
                                            href="https://github.com/wang-owen/Brook"
                                            target="_blank"
                                            className="underline text-blue-700"
                                        >
                                            Brook
                                        </a>
                                    </li>
                                    <li>
                                        🕸 Take a peek at my{" "}
                                        <a
                                            href="https://wangowen.com"
                                            target="_blank"
                                            className="underline text-blue-700"
                                        >
                                            website
                                        </a>
                                    </li>
                                    <li>
                                        ✉️ Email me at{" "}
                                        <a
                                            href="mailto:contact@wangowen.com"
                                            target="_blank"
                                            className="underline text-blue-700"
                                        >
                                            contact@wangowen.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="my-8 grid grid-cols-5 gap-4 justify-items-center">
                                {skills.map((skill, i) => (
                                    <li className="list-none" key={i}>
                                        {skill}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 self-center">
                            <span className="text-2xl">misc stats</span>
                            <ul className="list-item text-left text-base">
                                {stats.map((stat, i) => (
                                    <li className="list-disc" key={i}>
                                        {stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumePage;
