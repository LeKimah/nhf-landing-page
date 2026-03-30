export default function Services() {
  const services = [
    {
      title: "Agua y desagües",
      desc: "Mantenimiento y reparación de sistemas sanitarios y efluentes industriales.",
    },
    {
      title: "Albañilería",
      desc: "Obras civiles, refacciones y construcción de estructuras de hormigón.",
    },
    {
      title: "Construcción en seco",
      desc: "Montaje y reparación de paredes y techos en durlock.",
    },
    {
      title: "Aluminio",
      desc: "Reparación y mantenimiento de aberturas y cerramientos.",
    },
    {
      title: "Pintura",
      desc: "Trabajos de pintura interior y exterior con tratamiento de superficies.",
    },
    {
      title: "Impermeabilización",
      desc: "Solución de filtraciones en techos, paredes y estructuras.",
    },
    {
      title: "Cerrajería",
      desc: "Reparación e instalación de cerraduras y sistemas de seguridad.",
    },
    {
      title: "Herrería",
      desc: "Fabricación y reparación de estructuras metálicas y soldadura.",
    },
    {
      title: "Vidrios",
      desc: "Colocación y recambio de vidrios de diferentes tipos.",
    },
    {
      title: "Chapeado",
      desc: "Reparación y mantenimiento de techos y estructuras metálicas.",
    },
    {
      title: "Estructuras metálicas",
      desc: "Diseño, fabricación y montaje de estructuras y plataformas.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-4">
          Servicios
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Brindamos soluciones integrales de mantenimiento edilicio y servicios industriales adaptados a cada necesidad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            ¿Necesitás un servicio específico?
          </p>

          <a
            href="#contact"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg"
          >
            Solicitar presupuesto
          </a>
        </div>

      </div>
    </section>
  );
}