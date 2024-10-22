import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <div className="mt-10 tracking-wide">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20">
                What people <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent ">are saying</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral rounded-md p-6 text-sm border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300 " src={testimonial.image} alt={testimonial.user} />
                                <div>
                                    <h5 className="bold font-medium">{testimonial.user}</h5>
                                    <span className="text-sm font-normal italic text-neutral-600 ">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials;