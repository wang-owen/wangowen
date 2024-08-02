import { ReactElement } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { useContext } from "react";

const ContactCard = ({
    icon,
    title,
    subtitle,
    href,
    button_icon,
    button_label,
}: {
    icon: ReactElement;
    title: string;
    subtitle: string;
    href: string;
    button_icon: ReactElement;
    button_label: string;
}) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`flex flex-col justify-center items-center gap-3 border p-4 rounded-xl shadow-2xl ${
                theme === "light" ? "bg-white" : "bg-zinc-900"
            }`}
        >
            {icon}
            <h1 className="text-xl font-bold">{title}</h1>
            <label className="mb-1">{subtitle}</label>
            <button className="border rounded-xl py-2 px-3 w-min hover:opacity-70 duration-300">
                <a href={href} target="_blank">
                    <div className="flex items-center justify-center gap-3">
                        {button_icon}
                        {button_label}
                    </div>
                </a>
            </button>
        </div>
    );
};

export default ContactCard;
