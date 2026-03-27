const Promo = () => {
  return (
    <section id="promo" className="py-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-lime-300/20 bg-gradient-to-br from-lime-300/10 via-transparent to-fuchsia-500/10 p-8 shadow-[0_0_60px_rgba(163,230,53,0.08)]">
          <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Promo principal</p>
          <h2 className="mt-3 max-w-xl text-4xl font-black uppercase leading-none md:text-5xl">
            Tu marca pide una tienda con <span className="text-fuchsia-300">merch + cultivo + comunidad</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            Esta beta plantea una tienda visualmente potente, con bloques listos para sumar productos reales, promociones,
            packs, testimonios, blog y una integración futura con Mercado Pago, stock y WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Mercado Pago",
              "WhatsApp",
              "Instagram",
              "Filtros",
              "Carrito",
              "SEO",
            ].map((pill) => (
              <span key={pill} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-200">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Panel rápido</p>
          <h3 className="mt-3 text-2xl font-black uppercase">¿Qué sigue?</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
            <li>01. Reemplazar placeholders por tus imágenes reales y branding final.</li>
            <li>02. Definir catálogo: productos, precios, stock, marcas y categorías.</li>
            <li>03. Armar ficha de producto completa con fotos, dosis y beneficios.</li>
            <li>04. Integrar checkout, envíos y contacto directo.</li>
          </ul>
          <button className="mt-8 w-full rounded-2xl bg-fuchsia-500 px-5 py-3 font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:scale-[1.02]">
            Lanzar siguiente versión
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promo;