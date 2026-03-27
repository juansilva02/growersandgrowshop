import { useCart } from '../context/CartContext';

const Header = ({ onCartClick, onLoginClick }) => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="relative z-10 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/40 bg-gradient-to-br from-lime-300/20 to-fuchsia-500/20 text-xl shadow-[0_0_30px_rgba(163,230,53,0.25)]">
            🌿
          </div>
          <div>
            <p className="text-lg font-black uppercase tracking-wider text-lime-300">Growers And Friends</p>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Growshop online</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#categorias" className="transition hover:text-lime-300">Categorías</a>
          <a href="#productos" className="transition hover:text-lime-300">Destacados</a>
          <a href="#promo" className="transition hover:text-lime-300">Promos</a>
          <a href="#contacto" className="transition hover:text-lime-300">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 hover:border-lime-300/40 hover:text-lime-300"
          >
            Login
          </button>
          <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 hover:border-lime-300/40 hover:text-lime-300">
            Buscar
          </button>
          <button
            onClick={onCartClick}
            className="rounded-full bg-lime-300 px-5 py-2 text-sm font-bold text-black shadow-[0_0_25px_rgba(163,230,53,0.45)] transition hover:scale-[1.02]"
          >
            Carrito ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;