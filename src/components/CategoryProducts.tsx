import { getProductsByCategory } from "@/data/products";
import ProductCard from "./ProductCard";

interface CategoryProductsProps {
    category: string;
    title?: string;
}

const CategoryProducts = ({ category, title }: CategoryProductsProps) => {
    const products = getProductsByCategory(category);
    const displayTitle = title || `${category} Products`;

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        {displayTitle}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our amazing collection of {category.toLowerCase()} products
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {/* Show message if no products */}
                {products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryProducts; 