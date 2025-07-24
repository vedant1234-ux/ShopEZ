import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, X } from "lucide-react";

const CartDrawer = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        isOpen,
        setIsOpen
    } = useCartContext();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-xl">
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-semibold">Shopping Cart</h2>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="text-muted-foreground mb-2">Your cart is empty</div>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Continue Shopping
                                </Button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-3 border rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">{item.category}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="font-semibold text-primary">
                                                ₹{item.price.toLocaleString('en-IN')}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    className="h-6 w-6"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="text-sm font-medium w-8 text-center">
                                                    {item.quantity}
                                                </span>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    className="h-6 w-6"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-6 w-6 text-destructive"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Total ({getCartCount()} items):</span>
                                <span className="text-xl font-bold text-primary">
                                    ₹{getCartTotal().toLocaleString('en-IN')}
                                </span>
                            </div>
                            <Button className="w-full" size="lg">
                                Proceed to Checkout
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartDrawer; 