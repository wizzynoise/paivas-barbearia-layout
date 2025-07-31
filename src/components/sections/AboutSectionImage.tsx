import interiorImage from "@/assets/nossa-historia-interior.jpg";

const AboutSectionImage = () => {
  return (
    <div className="lg:w-1/2">
      <div className="relative rounded-xl overflow-hidden shadow-elegant group">
        <div className="aspect-[4/3] w-full">
          <img 
            src={interiorImage} 
            alt="Interior da barbearia com ambiente profissional"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default AboutSectionImage;