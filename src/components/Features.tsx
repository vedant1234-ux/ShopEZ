import { Card, CardContent } from "@/components/ui/card";
import { Headphones, RotateCcw, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over ₹999. Fast and reliable delivery across India.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is encrypted and secure with UPI, cards, and net banking.",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer support team is available 24/7 to help you with any questions.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Not satisfied? Return your purchase within 7 days for a full refund.",
    gradient: "from-orange-500 to-orange-600",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose ShopEZ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;