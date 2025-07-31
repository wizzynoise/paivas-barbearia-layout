import clipperImage from "@/assets/clipper-detail.jpg";

const ServicesImage = () => {
  return (
    <div className="text-center mt-16">
      <div className="max-w-md mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-elegant">
          <img 
            src={clipperImage} 
            alt="Equipamento profissional de barbeiro"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesImage;