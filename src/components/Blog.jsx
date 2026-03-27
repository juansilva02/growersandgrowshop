const Blog = () => {
  const posts = [
    {
      title: "Guía para principiantes en cultivo indoor",
      excerpt: "Aprende los básicos para empezar tu primer cultivo en casa.",
      date: "2024-03-27",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Nutrientes esenciales para plantas de cannabis",
      excerpt: "Descubre qué nutrientes necesita tu cultivo en cada etapa.",
      date: "2024-03-25",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Blog</p>
        <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">Consejos de cultivo</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-fuchsia-400/30"
          >
            <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover opacity-85 transition duration-500 hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-sm text-zinc-400">{post.date}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
              <button className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                Leer más →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;