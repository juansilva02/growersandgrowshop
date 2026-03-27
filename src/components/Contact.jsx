const Contact = () => {
  return (
    <section id="contacto" className="py-10">
      <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Contacto</p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">Asesoramiento para tu cultivo</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
              Sumá un canal rápido para consultas, armado de combos y ventas por WhatsApp. Ideal para cerrar compras de
              productos técnicos o recomendar kits.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <button className="w-full rounded-2xl bg-lime-300 px-6 py-4 font-bold text-black md:w-auto">
              <a href="https://wa.me/5491234567890?text=Hola,%20quiero%20asesoramiento%20para%20mi%20cultivo" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </button>
            <button className="w-full rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white md:w-auto">
              <a href="https://instagram.com/growersandfriends" target="_blank" rel="noopener noreferrer">
                Ver Instagram
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;