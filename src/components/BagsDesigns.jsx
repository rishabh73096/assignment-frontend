import BagsDesignCard from "./BagsDesignCard";

const BagsDesigns = ()=>{
    const profiles = [
        {
          name: 'John Doe',
          image: 'https://via.placeholder.com/150',
          jobTitle: 'Web Developer',
          description: 'Passionate about building beautiful websites.'
        },
        {
          name: 'Jane Smith',
          image: 'https://via.placeholder.com/150',
          jobTitle: 'Graphic Designer',
          description: 'Creating stunning visuals and graphics.'
        },
        {
          name: 'Sam Wilson',
          image: 'https://via.placeholder.com/150',
          jobTitle: 'Product Manager',
          description: 'Focused on building products that users love.'
        },
        {
          name: 'Emily Davis',
          image: 'https://via.placeholder.com/150',
          jobTitle: 'Software Engineer',
          description: 'Solving complex problems with code.'
        }
      ];
    return (<>
     <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <BagsDesignCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
    </>)
}
export default BagsDesigns