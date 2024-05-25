import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pythonIcon from "../assets/img/icons/python.svg";
import javaIcon from "../assets/img/icons/java.svg";
import typescriptIcon from "../assets/img/icons/typescript-icon.svg";
import javascriptIcon from "../assets/img/icons/javascript.svg";
import htmlIcon from "../assets/img/icons/html-5.svg";
import cssIcon from "../assets/img/icons/css-3.svg";
import sassIcon from "../assets/img/icons/sass.svg";
import cIcon from "../assets/img/icons/c.svg";
import djangoIcon from "../assets/img/icons/django-icon.svg";
import reactIcon from "../assets/img/icons/react.svg";
import tailwindIcon from "../assets/img/icons/tailwindcss-icon.svg";
import bootstrapIcon from "../assets/img/icons/bootstrap.svg";
import gitIcon from "../assets/img/icons/git-icon.svg";
import postgresqlIcon from "../assets/img/icons/postgresql.svg";
import linuxLogo from "../assets/img/icons/linux-tux.svg";
import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const ResumePage = () => {
    const skills = [
        pythonIcon,
        javaIcon,
        typescriptIcon,
        javascriptIcon,
        htmlIcon,
        cssIcon,
        sassIcon,
        cIcon,
        djangoIcon,
        reactIcon,
        tailwindIcon,
        bootstrapIcon,
        gitIcon,
        postgresqlIcon,
        linuxLogo,
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
                                <br></br>
                                <p>
                                    My hobbies include playing guitar, reading
                                    One Piece and DC, playing video games, and
                                    watching movies & TV shows!
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="m-8 grid grid-cols-5 gap-4 justify-items-center">
                                {skills.map((skill) => (
                                    <img src={skill} width="50"></img>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 self-center">
                            <span className="text-2xl">misc stats</span>
                            <ul className="list-item text-left">
                                {stats.map((stat) => (
                                    <li className="list-disc">{stat}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePage;
