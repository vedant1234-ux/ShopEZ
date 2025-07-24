import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCartContext } from "@/contexts/CartContext";
import { useUnsplashImage } from "@/hooks/useUnsplashImages";
import { Heart, Loader2, ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isOnSale?: boolean;
  category: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isOnSale,
  category,
}: ProductCardProps) => {
  const { addToCart } = useCartContext();
  const { imageUrl, isLoading, error, attribution, attributionLink } = useUnsplashImage(name, category);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      originalPrice,
      image: imageUrl || image, // Use Unsplash image if available, fallback to original
      category,
    });
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card">
      <div className="relative overflow-hidden">
        {isLoading ? (
          <div className="w-full h-64 bg-muted flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="w-full h-64 bg-muted flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <img
            src={imageUrl || image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="hero"
              className="h-10 w-10 rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isOnSale && (
            <Badge variant="destructive" className="bg-secondary text-secondary-foreground">
              Sale
            </Badge>
          )}
          <Badge variant="outline" className="bg-background/90 text-xs">
            {category}
          </Badge>
        </div>

        {/* Wishlist */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Unsplash Attribution */}
        {attribution && attributionLink && (
          <div className="absolute bottom-2 right-2">
            <a
              href={attributionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-white transition-colors bg-black/50 px-2 py-1 rounded"
            >
              {attribution}
            </a>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                    }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">
              ₹{price.toLocaleString('en-IN')}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {isOnSale && originalPrice && (
              <Badge variant="secondary" className="text-xs">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;