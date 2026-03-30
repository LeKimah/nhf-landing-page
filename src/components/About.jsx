export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre la empresa</h2>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          NHF Servicios es una empresa dedicada desde 2017 al mantenimiento
          integral edilicio dentro del sector industrial.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Nos especializamos en brindar soluciones eficientes y definitivas,
          adaptándonos a las necesidades de cada cliente.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Contamos con personal capacitado y comprometido, garantizando
          profesionalismo, seguridad y responsabilidad en cada trabajo.
        </p>

        <p className="text-gray-600">
          Empresas del cordón industrial ya confían en nuestra experiencia y
          compromiso diario.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h4 className="font-semibold mb-2">Responsabilidad</h4>
            <p className="text-sm text-gray-500">
              Cumplimos con cada trabajo en tiempo y forma.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h4 className="font-semibold mb-2">Seguridad</h4>
            <p className="text-sm text-gray-500">
              Trabajamos bajo estándares seguros y confiables.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h4 className="font-semibold mb-2">Eficiencia</h4>
            <p className="text-sm text-gray-500">
              Soluciones rápidas y efectivas para cada necesidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
