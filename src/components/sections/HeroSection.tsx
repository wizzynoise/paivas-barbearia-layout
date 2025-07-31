import { Button } from "@/components/ui/button";
import heroImage from "@/assets/barbershop-interior.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Corte com estilo. Confiança garantida.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto">
          Na Paiva's Barber, cada corte é feito com precisão, dedicação e atenção ao detalhe.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button variant="hero" size="lg">
            Marcar Agora
          </Button>
          <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
            Ver Serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;