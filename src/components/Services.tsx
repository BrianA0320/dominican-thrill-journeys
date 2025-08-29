import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Clock } from "lucide-react";
import buggyBeach from "@/assets/buggy-beach.jpg";
import atvAdventure from "@/assets/atv-adventure.jpg";
import partyBoat from "@/assets/party-boat.jpg";

const Services = () => {
  const services = [
    {
      title: "Tours en Buggy",
      description: "Aventuras todo terreno por los paisajes más espectaculares de República Dominicana",
      price: "Desde $75",
      image: buggyBeach,
      features: [
        "Guía certificado",
        "Equipo de seguridad", 
        "4 horas de duración",
        "Transporte incluido"
      ],
      duration: "4 horas",
      groupSize: "Hasta 8 personas"
    },
    {
      title: "Excursiones ATV 4x4",
      description: "Explora senderos extremos y paisajes únicos con nuestros ATVs de última generación",
      price: "Desde $85",
      image: atvAdventure,
      features: [
        "Guía especializado",
        "Equipo de protección completo",
        "3.5 horas de aventura",
        "Refrescos incluidos"
      ],
      duration: "3.5 horas",
      groupSize: "Hasta 6 personas"
    },
    {
      title: "Fiesta en Yate",
      description: "Disfruta de una experiencia exclusiva navegando por aguas cristalinas del Caribe",
      price: "Desde $95",
      image: partyBoat,
      features: [
        "Capitán profesional",
        "Bebidas incluidas",
        "5 horas de diversión",
        "Música y entretenimiento"
      ],
      duration: "5 horas",
      groupSize: "Hasta 20 personas"
    }
  ];

  const handleBooking = (serviceName: string) => {
    const message = `¡Hola! Me interesa reservar ${serviceName}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/8094986352?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="excursiones" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestras <span className="text-accent">Excursiones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre la aventura perfecta para ti. Cada excursión está diseñada para brindarte experiencias
            únicas e inolvidables en el paraíso caribeño.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2 group">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent hover:bg-accent text-accent-foreground font-semibold px-3 py-1">
                    {service.price}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{service.groupSize}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    onClick={() => handleBooking(service.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg transition-all duration-300 hover:shadow-primary"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Reservar
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    Ver Más Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;