import toolsImage from "@/assets/barber-tools-hands.jpg";

const AboutSectionImage = () => {
  return (
    <div className="lg:w-1/2">
      <div className="relative rounded-lg overflow-hidden shadow-elegant">
        <img 
          src={toolsImage} 
          alt="Preparação de ferramentas de barbeiro"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default AboutSectionImage;