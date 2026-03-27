import { useCart } from '../context/CartContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Checkout = () => {
  const { cart, getTotal } = useCart();

  // Inicializar MercadoPago con tu public key (debes reemplazar con la real)
  initMercadoPago('TEST-1234567890123456-123456-78901234567890123');

  const createPreference = async () => {
    // Aquí deberías hacer una llamada a tu backend para crear la preferencia
    // Por ahora, simulamos
    const preference = {
      id: '123456789',
      items: cart.map(item => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: parseFloat(item.price.replace(/[$.]/g, '').replace(',', '.')),
      })),
      back_urls: {
        success: 'http://localhost:5173/success',
        failure: 'http://localhost:5173/failure',
        pending: 'http://localhost:5173/pending',
      },
    };
    return preference.id;
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.name} className="flex justify-between">
            <span>{item.name} x{item.quantity}</span>
            <span>{item.price}</span>
          </div>
        ))}
        <div className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</div>
      </div>
      <div className="mt-8">
        <Wallet initialization={{ preferenceId: createPreference() }} />
      </div>
    </div>
  );
};

export default Checkout;