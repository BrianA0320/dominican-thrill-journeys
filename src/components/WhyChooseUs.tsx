import { Shield, Star, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Equipos certificados, seguros incluidos y guías profesionales con más de 5 años de experiencia",
      color: "text-accent"
    },
    {
      icon: Star,
      title: "Experiencia Premium",
      description: "Tours exclusivos, grupos pequeños y experiencias personalizadas según tus preferencias",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Soporte completo antes, durante y después de tu aventura. Siempre estamos aquí para ti",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Lugares Únicos",
      description: "Acceso exclusivo a lugares paradisíacos que solo los locales conocen",
      color: "text-accent"
    }
  ];

  const stats = [
    { number: "500+", label: "Aventureros Felices" },
    { number: "10+", label: "Años de Experiencia" },
    { number: "100%", label: "Satisfacción Garantizada" }
  ];

  return (
    <section id="por-que" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dominican Pride Travel?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 10 años de experiencia creando aventuras inolvidables
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group border-0 bg-gradient-card">
                <CardContent className="space-y-4">
                  {/* Icon with background */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic max-w-4xl mx-auto">
            "En Dominican Pride Travel no solo ofrecemos excursiones, creamos recuerdos que durarán toda la vida"
          </blockquote>
          <div className="mt-6">
            <div className="text-lg font-semibold text-primary">Equipo Dominican Pride Travel</div>
            <div className="text-muted-foreground">Especialistas en Aventuras Extremas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;