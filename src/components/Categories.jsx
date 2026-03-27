const Categories = ({ categories }) => {
  return (
    <section id="categorias" className="py-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Explorar</p>
          <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">Categorías principales</h2>
        </div>
        <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 hover:border-lime-300/40 hover:text-lime-300">
          Ver todas
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <article
            key={category.name}
            className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.05]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-2xl shadow-inner">
              {category.icon}
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-lime-300">{category.name}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{category.desc}</p>
            <button className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300 transition group-hover:text-lime-300">
              Entrar →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;