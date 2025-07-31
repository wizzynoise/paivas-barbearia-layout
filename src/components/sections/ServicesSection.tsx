import { Scissors, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesImage from "./ServicesImage";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte clássico ou moderno",
      description: "Cortes personalizados ao teu estilo e preferência",
    },
    {
      icon: Users,
      title: "Desenho e corte de barba",
      description: "Modelagem profissional para todos os tipos de barba",
    },
    {
      icon: Clock,
      title: "Aparos e retoques",
      description: "Manutenção rápida para manter o teu visual sempre em dia",
    },
    {
      icon: Star,
      title: "Cuidados de styling",
      description: "Finalização e produtos para o teu look perfeito",
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Os nossos serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-wood mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de barbearia com técnicas modernas e tradicionais
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card p-6 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-wood/10 rounded-full mb-4 group-hover:bg-wood/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-wood" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services Image */}
          <ServicesImage />

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 text-lg font-medium">
              Preços justos, serviço de excelência.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="#contactos">
                Marca já o teu corte
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;