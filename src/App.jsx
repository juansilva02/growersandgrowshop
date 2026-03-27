import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Promo from './components/Promo';
import Blog from './components/Blog';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LoginModal from './components/LoginModal';
import CartModal from './components/CartModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const categories = [
    {
      name: 'Nutrientes',
      desc: 'Fertilizantes, boosters y aditivos para cada etapa.',
      icon: '🧪',
    },
    {
      name: 'Iluminación',
      desc: 'Paneles, reflectores y accesorios indoor.',
      icon: '💡',
    },
    {
      name: 'Sustratos',
      desc: 'Tierras, coco, perlita y mixes listos para cultivo.',
      icon: '🌱',
    },
    {
      name: 'Parafernalia',
      desc: 'Pipas, bongs, bandejas y accesorios.',
      icon: '🌀',
    },
  ];

  const products = [
    {
      name: 'Trich Shot',
      price: '$18.900',
      tag: 'Top ventas',
      category: 'Nutrientes',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Kit Indoor Inicial',
      price: '$249.000',
      tag: 'Kit completo',
      category: 'Iluminación',
      image:
        'https://images.unsplash.com/photo-1615485925873-5d0c7b1b53ee?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Medidor pH / EC',
      price: '$39.500',
      tag: 'Esencial',
      category: 'Parafernalia',
      image:
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sustrato Premium 50L',
      price: '$13.900',
      tag: 'Cultivo base',
      category: 'Sustratos',
      image:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const promos = [
    'No vendemos humo',
    'Más raíces, más flores',
    'Asesoramiento para tu cultivo',
    'Envíos a todo el país',
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white selection:bg-lime-300 selection:text-black">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,255,0,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(168,85,247,0.18),transparent_25%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:28px_28px]" />

          <Header
            onCartClick={() => setIsCartOpen(true)}
            onLoginClick={() => setIsLoginOpen(true)}
          />

          <Hero promos={promos} />
        </div>

        <main className="mx-auto max-w-7xl px-6 pb-24">
          <Categories categories={categories} />
          <Products products={products} />
          <Promo />
          <Blog />
          <Contact />
        </main>

        <WhatsAppButton />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;