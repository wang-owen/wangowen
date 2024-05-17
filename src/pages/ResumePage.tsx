import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import oliver from "../assets/img/Oliver2.png";
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

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-3/4 flex justify-between">
                    <div className="text-center">
                        <div className="w-min border border-gray-400 shadow-xl">
                            <Document file="Owen Wang Resume.pdf">
                                <Page pageNumber={1} scale={1.1} />
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
                    <div className="mx-20 text-center flex flex-col justify-between">
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
                        <div className="flex flex-col items-center text-xs">
                            <img src={oliver} width={325}></img>
                            <br></br>
                            My cat, Oliver
                        </div>
                        <div>
                            <div className="m-8 grid grid-cols-5 gap-10 justify-items-center">
                                {skills.map((skill) => (
                                    <img src={skill} width="50"></img>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePage;
