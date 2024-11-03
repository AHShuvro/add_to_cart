import { useCart } from 'react-use-cart';

export const useExtendedCart = () => {
  const {
    items,
    addItem,
    emptyCart,
    updateItemQuantity,
    removeItem,
    isEmpty,
    ...cartProps
  } = useCart();

  // Separate cart and wishlist items based on the `type` property
  const cartItems = items.filter(item => item.type === 'cart');
  const wishlistItems = items.filter(item => item.type === 'wishlist');

  // Total counts for cart and wishlist items
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wishlistItems.reduce((total, item) => total + item.quantity, 0);

  // Total value for cart and wishlist
  const cartTotals = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const wishlistTotal = wishlistItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Add item to cart or wishlist
  const addItemToCart = (item) => {
    addItem({ ...item, type: 'cart' });
  };

  const addItemToWishlist = (item) => {
    addItem({ ...item, type: 'wishlist' });
  };

  // Check if item exists in the cart or wishlist
  const isInCart = (id) => items.some(item => item.id === id && item.type === 'cart');
  const isInWishlist = (id) => items.some(item => item.id === id && item.type === 'wishlist');

  // Remove item from cart or wishlist by type
  const removeItemFromCart = (id) => {
    if (isInCart(id)) removeItem(id);
  };

  const removeItemFromWishlist = (id) => {
    if (isInWishlist(id)) removeItem(id);
  };

  // Empty the wishlist
  const emptyWishlist = () => {
    wishlistItems.forEach(item => removeItem(item.id));
  };

  // Adjust quantity for cart items only
  const updateCartItemQuantity = (id, quantity) => {
    if (isInCart(id)) updateItemQuantity(id, quantity);
  };

  const updateWishlistItemQuantity = (id, quantity) => {
    if (isInWishlist(id)) updateItemQuantity(id, quantity);
  };

  return {
    cartItems,
    emptyCart,
    cartTotals, // Total value for cart items
    totalCartItems, // Count of items in the cart
    wishlistItems,
    wishlistTotal, // Total value for wishlist items
    totalWishlistItems, // Count of items in the wishlist
    addItemToCart,
    addItemToWishlist,
    isInCart,
    isInWishlist,
    removeItemFromCart,
    removeItemFromWishlist,
    updateCartItemQuantity,
    emptyWishlist,
    isEmpty,
    updateWishlistItemQuantity,

    ...cartProps
  };
};
