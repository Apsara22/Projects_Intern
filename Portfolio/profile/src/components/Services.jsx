const services1 = [
    {
        id:1,
        title:"Web Developemnt",
        description:"Creating visually applaling and user-friendly web design"
    },
    {
        id:2,
        title:"Web design",
        description:"Creating visually applaling and user-friendly web design"
    },
    {
        id:3,
        title:"Frontend Development",
        description:"Creating visually applaling and user-friendly web design"
    },
    {
        id:4,
        title:"Backend Developemnt",
        description:"Creating visually applaling and user-friendly web design"
    },
    {
        id:5,
        title:"Digital Marketing",
        description:"Creating visually applaling and user-friendly web design"
    },
    {
        id:6,
        title:"Graphic Designing",
        description:"Creating visually applaling and user-friendly web design"
    }
]

export default function Services(){
    return(
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services1.map(service =>(
                        <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 ">
                                {service.id}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">

                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-300">{service.description}</p>
                            <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-400">Read More</a>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}