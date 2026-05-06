export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6 animate-fade-in">
      <img
        src="/images/hero/img1.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <img
          src="/images/logo2.png"
          alt="NHF Servicios"
          className="mx-auto mb-1 w-40 md:w-56 lg:w-64"
        />

        <h1 className="text-3xl text-gray-300 sm:text-4xl md:text-6xl font-bold mb-4">
          NHF Servicios
        </h1>

        <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto">
          Soluciones integrales en mantenimiento edilicio y construcción
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Contacto
          </a>

          <a
            href="#services"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Servicios
          </a>

          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Trabajos realizados
          </a>
        </div>
      </div>
    </section>
  );
}
