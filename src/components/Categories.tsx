import { Card, CardContent } from "@/components/ui/card";
import { getProductsByCategory } from "@/data/products";
import { Gem, Headphones, Home, Laptop, Shirt, Smartphone } from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    count: getProductsByCategory("Electronics").length,
    color: "bg-blue-500",
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    count: getProductsByCategory("Fashion").length,
    color: "bg-pink-500",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    icon: Gem,
    count: getProductsByCategory("Jewelry").length,
    color: "bg-purple-500",
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
    count: getProductsByCategory("Audio").length,
    color: "bg-green-500",
  },
  {
    id: "computers",
    name: "Computers",
    icon: Laptop,
    count: getProductsByCategory("Computers").length,
    color: "bg-orange-500",
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    count: getProductsByCategory("Home & Garden").length,
    color: "bg-teal-500",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background"
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category Info */}
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} items
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

export default Categories;