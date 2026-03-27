const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Iniciar Sesión</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-400"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-lime-300 px-4 py-3 font-bold text-black"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-zinc-400">
          ¿No tienes cuenta? <a href="#" className="text-lime-300">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;