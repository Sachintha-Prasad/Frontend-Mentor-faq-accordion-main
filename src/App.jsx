import React from "react"
import FaqsComponent from "./components/FaqsComponent"

const App = () => {
    return (
        <div className="bg-light-pink min-h-screen font-work-sans overflow-x-hidden relative">
            <div className="fixed w-screen min-h-[300px] bg-mobile sm:bg-desktop bg-cover bg-bottom bg-no-repeat"></div>
            <div className="container relative">
                <FaqsComponent />
            </div>
        </div>
    )
}

export default App
