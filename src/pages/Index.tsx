import Categories from "@/components/Categories";
import CategoryProducts from "@/components/CategoryProducts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <Categories />
      <ProductGrid searchQuery={searchQuery} />

      {/* Electronics Section */}
      <CategoryProducts
        category="Electronics"
        title="Latest Electronics"
      />

      {/* Fashion Section */}
      <CategoryProducts
        category="Fashion"
        title="Trending Fashion"
      />

      <Features />
      <Footer />
    </div>
  );
};

export default Index;
