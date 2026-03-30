export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center text-white text-center px-6">
      <img
        src="/images/projects/cercos/img4.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <img
          src="/images/logo.png"
          alt="NHF Servicios"
          className="mx-auto mb-6 w-32 sm:w-40"
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">NHF Servicios</h1>

        <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto">
          Soluciones integrales en mantenimiento edilicio y construcción
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Contacto
          </a>

          <a
            href="#services"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Servicios
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Trabajos realizados
          </a>
        </div>
      </div>
    </section>
  );
}
