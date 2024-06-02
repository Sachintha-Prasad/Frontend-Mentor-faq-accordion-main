import React, { useState } from "react"
import logo from "../assets/images/icon-star.svg"
import plusIcon from "../assets/images/icon-plus.svg"
import minusIcon from "../assets/images/icon-minus.svg"

const FaqsComponent = () => {
    const faqItems = [
        {
            id: 1,
            question: "What is Frontend Mentor, and how will it help me?",
            answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            id: 2,
            question: "Is Frontend Mentor free?",
            answer: "Frontend Mentor offers both free and premium challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            id: 3,
            question: "Can I use Frontend Mentor projects in my portfolio?",
            answer: "Yes, you can use the projects you build on Frontend Mentor in your portfolio. It's a great way to showcase your skills and the work you've done."
        },
        {
            id: 4,
            question: "How can I get help if I'm stuck on a challenge?",
            answer: "Frontend Mentor has a community forum where you can ask for help if you're stuck on a challenge. You can also view solutions from other developers."
        }
    ]

    const [openFaqs, setOpenFaqs] = useState({})

    const handleToggle = (id) => {
        setOpenFaqs((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <div className="mx-auto my-24 px-6 py-8 max-w-[800px] w-full min-h-max bg-white rounded-lg shadow-2xl shadow-grayish-purple">
            <header className="flex items-center gap-4">
                <img src={logo} alt="star icon" />
                <h1 className="text-4xl md:text-[42px] text-dark-purple font-bold">
                    FAQs
                </h1>
            </header>
            <div className="flex flex-col divide-y-[1px]">
                {faqItems.map((item) => (
                    <div key={item.id} className="py-6 flex flex-col gap-4">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => handleToggle(item.id)}
                        >
                            <p className="text-lg font-semibold text-dark-purple hover:text-[#AD28EB] focus:text-[#AD28EB] cursor-pointer">
                                {item.question}
                            </p>
                            <img
                                src={openFaqs[item.id] ? minusIcon : plusIcon}
                                alt="toggle icon"
                            />
                        </div>

                        <p
                            className={`${
                                openFaqs[item.id]
                                    ? "h-auto"
                                    : "h-0 absolute overflow-hidden opacity-0 -translate-y-5"
                            } text-grayish-purple transition-all duration-300 ease-linear`}
                        >
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqsComponent
