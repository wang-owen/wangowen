import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
    const labelClass = "font-bold";
    const inputClass =
        "border rounded-md p-2 hover:border-blue-500 focus:border-blue-500 duration-300 outline-none";

    return (
        <form
            action="https://formsubmit.co/83d3654663a3dbc7f2bcdc3246069c2e"
            method="POST"
            className="w-1/3 flex flex-col gap-2"
        >
            <h1 className="text-xl font-bold self-center mb-4">Contact Me</h1>
            <label className={labelClass} htmlFor="name">
                Name
            </label>
            <input
                className={inputClass}
                type="text"
                name="name"
                placeholder="John"
                required
            />
            <label className={labelClass} htmlFor="email">
                Email Address
            </label>
            <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Doe"
                required
            />
            <label className={labelClass} htmlFor="message">
                Message
            </label>
            <textarea
                className={inputClass}
                name="message"
                placeholder="Type your message here..."
                rows={8}
                required
            />
            <button
                className="border rounded-2xl w-fit p-3 hover:border-blue-500 hover:text-blue-500 duration-300 mt-4"
                type="submit"
            >
                <div className="flex items-center justify-center gap-3">
                    <FaPaperPlane />
                    Send Message
                </div>
            </button>
        </form>
    );
};

export default ContactForm;
