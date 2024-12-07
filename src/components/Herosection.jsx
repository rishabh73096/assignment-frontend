const Herosection = () => {
    return (<>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/your-image-path.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                    Big Heading Text Here
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
                    Smaller subheading text that provides more context and details.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
                    Smaller subheading text that provides more context and details.
                </p>
            
            </div>
        </div>

    </>)
}
export default Herosection