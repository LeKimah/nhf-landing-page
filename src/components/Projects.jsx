export default function Projects() {
  const projects = [
    {
      title: "Reconstrucción de Cercos Perimetrales",
      images: [
        "/images/projects/cercos/img1.png",
        "/images/projects/cercos/img3.png",
        "/images/projects/cercos/img4.png",
      ],
    },
    {
      title: "Reparación techo de edificio",
      images: [
        "/images/projects/techo/img1.png",
        "/images/projects/techo/img2.png",
        "/images/projects/techo/img3.png",
      ],
    },
    {
      title: "Construcción de cielorraso antifugo",
      images: [
        "/images/projects/cielorraso/img1.png",
        "/images/projects/cielorraso/img2.png",
        "/images/projects/cielorraso/img3.png",
      ],
    },
    {
      title: "Remodelación de edificio antiguo",
      images: [
        "/images/projects/merendero/img1.png",
        "/images/projects/merendero/img3.png",
        "/images/projects/merendero/img4.png",
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trabajos realizados
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="rounded-lg object-cover w-full h-52 sm:h-60 w-full hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
