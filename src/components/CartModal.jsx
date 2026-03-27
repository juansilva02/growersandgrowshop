import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Carrito</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
        </div>
        {cart.length === 0 ? (
          <p className="text-zinc-400">Tu carrito está vacío</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-zinc-400">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="rounded border px-2 py-1 text-sm"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="rounded border px-2 py-1 text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-400 hover:text-red-300"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full rounded-2xl bg-lime-300 px-4 py-3 font-bold text-black">
                Proceder al Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;