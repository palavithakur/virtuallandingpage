import { CheckCircle2 } from "lucide-react";
import codeImage from '../assets/code.jpg';
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className='text-2xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center'>
                Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImage} alt="Code" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">

                    {checklistItems.map((listItem, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="flex items-center text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{listItem.title}</h5>
                                <p className="text-md text-neutral-500">{listItem.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow;