const Hero = ({ promos }) => {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col justify-center">
        <span className="mb-4 inline-flex w-fit rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
          Beta Store Concept
        </span>
        <h1 className="max-w-xl text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Más raíces. <span className="text-lime-300">Más flores.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
          Una tienda online con estética psicodélica, foco en cultivo y una identidad visual fuerte. Comprá insumos,
          nutrientes y parafernalia desde una experiencia inmersiva, rápida y clara.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-lime-300 px-6 py-3 font-bold text-black shadow-[0_0_30px_rgba(163,230,53,0.45)] transition hover:scale-[1.03]">
            Comprar ahora
          </button>
          <button className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-fuchsia-400/40 hover:bg-white/5">
            Ver catálogo
          </button>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {promos.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm">
              ✦ {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-5 bottom-10 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 shadow-[0_0_60px_rgba(168,85,247,0.2)] backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Featured Brand</p>
                <p className="mt-2 text-3xl font-black uppercase text-lime-300">Growers And Friends</p>
              </div>
              <div className="rounded-2xl border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.25em] text-lime-200">
                New Drop
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(132,255,0,.18),transparent_35%),linear-gradient(135deg,#2c1144,#070707_60%,#162300)] p-6">
              <div className="aspect-[4/5] rounded-[1.25rem] border border-white/10 bg-black/30 p-6 shadow-inner">
                <div className="flex h-full flex-col items-center justify-between rounded-[1rem] border border-dashed border-white/10 p-5 text-center">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-zinc-300">
                    Mascot Zone
                  </div>
                  <div>
                    <div className="text-8xl drop-shadow-[0_0_18px_rgba(163,230,53,0.35)]">👽</div>
                    <p className="mt-4 text-4xl font-black uppercase leading-none text-lime-300">No vendemos humo</p>
                    <p className="mt-3 text-zinc-300">La marca puede vivir acá con tu arte original, stickers y assets del growshop.</p>
                  </div>
                  <div className="rounded-2xl bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-fuchsia-200">
                    Banner / colección / promo principal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;