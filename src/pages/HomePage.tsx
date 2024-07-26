import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import ssj3 from "../assets/img/ssj3.gif";
import Carousel from "../components/Carousel";
import { FaDumbbell, FaBed } from "react-icons/fa6";
import { SiLeagueoflegends } from "react-icons/si";

const HomePage = () => {
    const theme = useContext(ThemeContext);

    const [itemHovered, setItemHovered] = useState("");
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPos({ x: event.clientX, y: event.clientY });
        };

        if (itemHovered) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [itemHovered]);

    return (
        <section className="flex flex-col self-center justify-center lg:gap-8">
            <div className="flex justify-center px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row justify-between lg:w-2/3 gap-8">
                    <div
                        className={`relative animate-fadeInFromLeft flex flex-col gap-8 h-full lg:w-1/2 ${
                            theme === "light" ? "text-black" : "text-white"
                        }`}
                    >
                        <h1 className="text-5xl font-bold">Owen Wang</h1>
                        <div>
                            <p className="text-2xl">
                                Hello, I'm a second year computer science
                                student at the University of Waterloo.
                            </p>
                            <br />
                            <div className="text-lg leading-relaxed">
                                <p>
                                    I'm always looking for opportunities to
                                    learn and grow, and aim to push my skills{" "}
                                    <span className="group">
                                        <span
                                            onMouseEnter={() =>
                                                setItemHovered("ssj3")
                                            }
                                            onMouseLeave={() =>
                                                setItemHovered("")
                                            }
                                        >
                                            <a
                                                className="italic hover:opacity-50 duration-300 hover:cursor-ne-resize"
                                                href="https://www.youtube.com/watch?v=8TGalu36BHA"
                                                target="_blank"
                                            >
                                                even further beyond
                                            </a>
                                        </span>
                                        {itemHovered === "ssj3" && (
                                            <img
                                                src={ssj3}
                                                alt="SSJ3"
                                                className={`fixed z-10 w-96 max-w-[50%] h-auto rounded-box shadow-2xl ${
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
                                    In my spare time I enjoy guitar 🎸,{" "}
                                    <span className="group">
                                        <span
                                            onMouseEnter={() =>
                                                setItemHovered("weightlifting")
                                            }
                                            onMouseLeave={() =>
                                                setItemHovered("")
                                            }
                                        >
                                            weightlifting 💪
                                        </span>
                                        {itemHovered === "weightlifting" && (
                                            <div
                                                className={`stat fixed bg-base-200 w-min z-10 rounded-box shadow-2xl ${
                                                    theme === "dark" &&
                                                    "shadow-white"
                                                }`}
                                                style={{
                                                    top: pos.y + 10 + "px",
                                                    left: pos.x + 10 + "px",
                                                }}
                                            >
                                                <div className="stat-figure text-secondary">
                                                    <FaDumbbell size={30} />
                                                </div>
                                                <div className="stat-title">
                                                    Bench
                                                </div>
                                                <div className="stat-value text-secondary">
                                                    185 lbs
                                                </div>
                                                <div className="stat-desc">
                                                    Mar 2024
                                                </div>
                                            </div>
                                        )}
                                    </span>
                                    , movies and TV shows 🍿, and{" "}
                                    <span className="group">
                                        <span
                                            onMouseEnter={() =>
                                                setItemHovered("video games")
                                            }
                                            onMouseLeave={() =>
                                                setItemHovered("")
                                            }
                                        >
                                            video games 🎮
                                        </span>
                                        {itemHovered === "video games" && (
                                            <div
                                                className={`stats fixed bg-base-200 w-min z-10 rounded-box shadow-2xl ${
                                                    theme === "dark" &&
                                                    "shadow-white"
                                                }`}
                                                style={{
                                                    top: pos.y + 10 + "px",
                                                    left: pos.x + 10 + "px",
                                                }}
                                            >
                                                <div className="stat">
                                                    <div className="stat-figure text-primary">
                                                        <SiLeagueoflegends
                                                            size={30}
                                                        />
                                                    </div>
                                                    <div className="stat-title">
                                                        League Rank
                                                    </div>
                                                    <div className="stat-value text-primary">
                                                        Masters
                                                    </div>
                                                    <div className="stat-desc">
                                                        219 LP
                                                    </div>
                                                </div>

                                                <div className="stat">
                                                    <div className="stat-figure text-secondary">
                                                        <FaBed size={30} />
                                                    </div>
                                                    <div className="stat-title">
                                                        Bedwars Wins
                                                    </div>
                                                    <div className="stat-value text-secondary">
                                                        1000
                                                    </div>
                                                    <div className="stat-desc">
                                                        4,917 Finals
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </span>
                                    .
                                </p>
                                <br />
                                <p>
                                    Feel free to reach out about anything! Also
                                    check out my{" "}
                                    <Link
                                        to="/projects"
                                        className="underline hover:opacity-50 duration-300"
                                    >
                                        projects
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to="/resume"
                                        className="underline hover:opacity-50 duration-300"
                                    >
                                        resume
                                    </Link>
                                    !
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-8 animate-fadeIn">
                        <img src="lofi knight.png" width={350} />
                        <Socials />
                    </div>
                </div>
            </div>
            <div className="animate-fadeIn flex justify-center">
                <Carousel />
            </div>
        </section>
    );
};

export default HomePage;
