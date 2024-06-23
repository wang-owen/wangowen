import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import ssj3 from "../assets/img/ssj3.gif";
import { IoBarbell } from "react-icons/io5";
import { SiLeagueoflegends } from "react-icons/si";
import { FaBed } from "react-icons/fa6";

const HomePage = () => {
    const theme = useContext(ThemeContext);

    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPos({ x: event.clientX, y: event.clientY });
        };

        if (isHovered) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isHovered]);

    return (
        <>
            <section className="p-16 flex justify-center">
                <div className="flex justify-between w-4/5">
                    <div
                        className={`relative animate-fadeInFromLeft flex flex-col gap-8 h-full ${
                            theme === "light" ? "text-black" : "text-white"
                        }`}
                    >
                        <h1 className="text-5xl font-bold">Owen Wang</h1>
                        <div>
                            <p className="text-2xl">
                                I'm a second year computer science student at
                                the University of Waterloo.
                            </p>
                            <br />
                            <div className="text-lg leading-relaxed">
                                <p>
                                    I'm constantly looking for opportunities to
                                    learn new languages and technologies, and
                                    aim to push my skills{" "}
                                    <span className="group italic font-bold underline">
                                        <span
                                            onMouseEnter={() =>
                                                setIsHovered(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsHovered(false)
                                            }
                                        >
                                            even further beyond
                                        </span>
                                        {isHovered && (
                                            <img
                                                src={ssj3}
                                                alt="SSJ3"
                                                className={`fixed z-10 rounded-xl shadow-2xl ${
                                                    theme === "dark" &&
                                                    "shadow-white"
                                                }`}
                                                style={{
                                                    top: pos.y + 10 + "px",
                                                    left: pos.x + 10 + "px",
                                                }}
                                            />
                                        )}
                                    </span>
                                    .
                                </p>
                                <p>
                                    Interested in robotics 🦾, real-time
                                    applications ⏱️, networking 🌐, computer
                                    vision 👁️, and web development 🚀.
                                </p>
                                <p>
                                    Feel free to reach out about anything! Also
                                    check out my{" "}
                                    <a
                                        href="Owen Wang Resume.pdf"
                                        target="_blank"
                                        className="italic underline"
                                    >
                                        resume
                                    </a>{" "}
                                    or take a look at my{" "}
                                    <Link
                                        to="/projects"
                                        className="italic underline"
                                    >
                                        projects
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center">
                        <div className="flex flex-col items-center gap-8">
                            <img src="lofi knight.png" width={350} />
                            <div className="stats w-min">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <IoBarbell size={30} />
                                    </div>
                                    <div className="stat-title">Bench</div>
                                    <div className="stat-value">185 lbs</div>
                                    <div className="stat-desc">Mar 2024</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <SiLeagueoflegends size={30} />
                                    </div>
                                    <div className="stat-title">League</div>
                                    <div className="stat-value">Masters</div>
                                    <div className="stat-desc">221 LP</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <FaBed size={30} />
                                    </div>
                                    <div className="stat-title">
                                        Bedwars Wins
                                    </div>
                                    <div className="stat-value">1,000</div>
                                    <div className="stat-desc">May 5, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-8 transform -translate-y-1/3 w-fit">
                            <Socials />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
