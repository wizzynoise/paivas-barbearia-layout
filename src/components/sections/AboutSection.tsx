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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Tradição e Modernidade
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                [Espaço para texto sobre a barbearia e os dois irmãos que a fundaram. 
                História, experiência e dedicação ao craft.]
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                [Texto sobre a filosofia da barbearia, qualidade do serviço e 
                ambiente acolhedor em César, Oliveira de Azeméis.]
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
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
      </div>
    </section>
  );
};

export default AboutSection;