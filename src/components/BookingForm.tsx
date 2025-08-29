import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, Mail, Phone, Users, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "",
    service: "",
    message: ""
  });

  const services = [
    "Tours en Buggy",
    "Excursiones ATV 4x4", 
    "Fiesta en Yate",
    "Paquete Completo (3 actividades)"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service || !formData.people) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `
¡Hola! Me interesa hacer una reserva con Dominican Pride Travel.

👤 Nombre: ${formData.name}
📧 Email: ${formData.email || "No proporcionado"}
📱 Teléfono: ${formData.phone}
📅 Fecha preferida: ${formData.date || "Por definir"}
👥 Número de personas: ${formData.people}
🎯 Servicio: ${formData.service}
💬 Mensaje adicional: ${formData.message || "Ninguno"}

¡Espero su respuesta para coordinar la aventura!
    `.trim();

    const whatsappUrl = `https://wa.me/8094986352?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Reserva enviada!",
      description: "Te hemos redirigido a WhatsApp para completar tu reserva.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      people: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserva Tu <span className="bg-gradient-hero bg-clip-text text-transparent">Aventura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¡No esperes más! Asegura tu lugar en esta increíble experiencia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-gradient-hero p-1">
            <div className="bg-background rounded-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-white bg-gradient-hero rounded-lg p-6 -m-6 mb-6">
                  Formulario de Reserva
                </CardTitle>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium flex items-center">
                        <User className="w-4 h-4 mr-2 text-primary" />
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-border focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        Correo Electrónico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-border focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(809) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-border focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        Fecha Preferida
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="border-border focus:ring-primary focus:border-primary"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Número de Personas *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("people", value)} required>
                        <SelectTrigger className="border-border focus:ring-primary focus:border-primary">
                          <SelectValue placeholder="Selecciona el número de personas" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        Servicio *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger className="border-border focus:ring-primary focus:border-primary">
                          <SelectValue placeholder="Selecciona tu aventura" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                      Mensaje Adicional (Opcional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="¿Alguna solicitud especial o pregunta?"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-border focus:ring-primary focus:border-primary min-h-[100px]"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-hero hover:opacity-90 text-white font-bold py-4 text-lg shadow-primary transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Enviar Reserva por WhatsApp
                    </Button>
                  </div>
                </form>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-accent-light rounded-xl text-center">
                  <p className="text-muted-foreground text-sm mb-2">
                    También puedes contactarnos directamente:
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-accent font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>809-498-6352</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;