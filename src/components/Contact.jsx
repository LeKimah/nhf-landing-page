export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>

        <p className="text-gray-300 mb-10">
          Estamos disponibles para asesorarte y brindarte soluciones a medida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DATOS */}
          <div className="space-y-4">
            <p>
              <strong>Ubicación:</strong> Calle 9 Nº 2604, Granadero Baigorria
            </p>

            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:0341155074047" className="text-green-400">
                0341 155074047
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nestorfernandez@nhfservicios.com"
                className="text-blue-400"
              >
                nestorfernandez@nhfservicios.com
              </a>
            </p>

            <p>
              <strong>CUIT:</strong> 20-18545403-8
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center items-center text-center">
            <p className="mb-6 text-gray-300">
              Puedes contactanos por WhatsApp.
            </p>

            <a
              href="https://wa.me/54341155074047"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12">
        <iframe
          src="https://www.google.com/maps?q=Calle+9+2604+Granadero+Baigorria&output=embed"
          className="w-full h-52 sm:h-64 rounded-xl"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
