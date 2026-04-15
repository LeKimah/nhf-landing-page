export default function Services() {
  const services = [
    {
      title: "Agua y desagües",
      desc: "Mantenimiento general de sistemas de agua y desagües. Reparaciones en instalaciones sanitarias y sistemas cloacales.",
    },
    {
      title: "Impermeabilización",
      desc: "Soluciones para filtraciones en techos y paredes. Aplicación de productos específicos para protección y sellado.",
    },
    {
      title: "Albañilería",
      desc: "Obras civiles, construcciones y refacciones. Trabajos con sistema Retak y estructuras de hormigón armado.",
    },
    {
      title: "Construcción en seco",
      desc: "Construcción en durlock, mantenimiento y reparación de paredes y techos. Modificaciones y montaje de nuevos espacios.",
    },
    {
      title: "Estructuras metálicas",
      desc: "Diseño y construcción de estructuras metalmecánicas. Montaje de plataformas, escaleras y soportes.",
    },
    {
      title: "Pintura",
      desc: "Trabajos de pintura interior y exterior. Tratamiento de superficies y aplicación sobre estructuras metálicas.",
    },
    {
      title: "Aluminio",
      desc: "Reparación y mantenimiento de aberturas de aluminio y cerramientos.",
    },
    {
      title: "Vidrios",
      desc: "Colocación y recambio de vidrios en distintos formatos y aplicaciones.",
    },
    {
      title: "Cerrajería",
      desc: "Reparación e instalación de cerraduras. Sistemas hidráulicos y antipánico.",
    },
    {
      title: "Herrería",
      desc: "Fabricación y reparación de estructuras metálicas. Trabajos de herrería industrial y de obra.",
    },
    {
      title: "Personal para servicios",
      desc: "Servicio de contratación de personal por horas demandadas o requeridas.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Servicios</h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Brindamos soluciones integrales de mantenimiento edilicio y servicios
          industriales adaptados a cada necesidad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-semibold mb-2">{service.title}</h3>

              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            ¿Necesitás un servicio específico?
          </p>

          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg 
             hover:bg-blue-700 hover:scale-105 
             transition-all duration-300 shadow-md"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
