import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Products = ({ products }) => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Nutrientes', 'Iluminación', 'Sustratos', 'Parafernalia'];

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Tienda</p>
        <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">Productos destacados</h2>
        <div className="mt-4 flex gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                selectedCategory === category
                  ? 'bg-lime-300 text-black'
                  : 'border border-white/15 text-zinc-200 hover:border-lime-300/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <article
            key={product.name}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-fuchsia-400/30"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover opacity-85 transition duration-500 hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-lime-300 backdrop-blur">
                {product.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <span className="text-lg font-black text-lime-300">{product.price}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Descripción corta del producto, beneficios principales y aplicación recomendada.
              </p>
              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 rounded-2xl bg-lime-300 px-4 py-3 text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  Agregar
                </button>
                <button
                  onClick={() => addToWishlist(product)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                    wishlist.find(item => item.name === product.name)
                      ? 'border-red-400 text-red-300'
                      : 'border-white/15 text-zinc-100 hover:border-fuchsia-400/40 hover:text-fuchsia-300'
                  }`}
                >
                  ♥
                </button>
                <button className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-zinc-100 hover:border-fuchsia-400/40 hover:text-fuchsia-300">
                  Ver
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;