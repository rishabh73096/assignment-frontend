const BagsDesignCard = ({ name, image, jobTitle, description })=>{
    return (<>
    
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{jobTitle}</p>
      <p className="text-gray-500 text-center">{description}</p>
    </div>

    </>)
}
export default BagsDesignCard