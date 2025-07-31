import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: ["César, Oliveira de Azeméis", "Portugal"],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda a Sábado", "9h às 19h"],
    },
    {
      icon: Phone,
      title: "Marcações",
      details: ["Via Instagram", "ou presencialmente"],
    },
    {
      icon: Instagram,
      title: "Redes Sociais",
      details: ["@paivasbarber", "Segue-nos no Instagram"],
    },
  ];

  return (
    <section id="contactos" className="py-20 bg-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contactos
            </h2>
            <div className="w-24 h-1 bg-gradient-wood mx-auto mb-6"></div>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Estamos prontos para te receber. Marca já o teu próximo corte!
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wood/20 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-wood" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-cream/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-charcoal-light rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Marca já o teu corte
            </h3>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Visita-nos em César, Oliveira de Azeméis ou segue-nos no Instagram para marcares o teu horário.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button variant="hero" size="lg">
                Instagram
              </Button>
              <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                Visitar Loja
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-cream/20">
            <p className="text-cream/60 text-sm">
              © 2024 Paiva's Barber - César, Oliveira de Azeméis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;