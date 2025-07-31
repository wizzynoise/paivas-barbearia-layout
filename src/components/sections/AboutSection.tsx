import AboutSectionImage from "./AboutSectionImage";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-gradient-wood mx-auto mb-6"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                A Nossa História
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Paiva's Barber nasceu da vontade de dois irmãos em criar um espaço moderno, 
                acessível e de confiança. Com mais de dois anos ao serviço da comunidade de 
                César, Oliveira de Azeméis, oferecemos cortes de cabelo e barbas com 
                profissionalismo e atenção ao detalhe.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aqui cada cliente é bem-vindo. Trabalhamos com gosto e dedicação para que 
                te sintas bem com o teu estilo.
              </p>
            </div>

            {/* Image Section */}
            <AboutSectionImage />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Barbeiros Profissionais</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Local</div>
              <div className="text-muted-foreground">César, O. Azeméis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;