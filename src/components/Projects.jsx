import { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const newIndex =
      currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const previousImage = () => {
    const newIndex =
      currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const projects = [
    {
      title: "Obra pasarela en playa de camiones",
      images: [
        "/images/projects/pasarela/img1.png",
        "/images/projects/pasarela/img2.png",
        "/images/projects/pasarela/img3.png",
        "/images/projects/pasarela/img4.png",
        "/images/projects/pasarela/img5.png",
      ],
      preview: [
        "/images/projects/pasarela/img1.png",
        "/images/projects/pasarela/img2.png",
        "/images/projects/pasarela/img4.png",
      ],
    },
    {
      title: "Vereda de hormigón",
      images: [
        "/images/projects/veredas/img1.png",
        "/images/projects/veredas/img2.png",
        "/images/projects/veredas/img3.png",
      ],
      preview: [
        "/images/projects/veredas/img1.png",
        "/images/projects/veredas/img2.png",
        "/images/projects/veredas/img3.png",
      ],
    },
    {
      title: "Construcción de cielorraso ignifugo",
      images: [
        "/images/projects/cielorraso/img1.png",
        "/images/projects/cielorraso/img2.png",
        "/images/projects/cielorraso/img3.png",
        "/images/projects/cielorraso/img4.png",
      ],
      preview: [
        "/images/projects/cielorraso/img1.png",
        "/images/projects/cielorraso/img2.png",
        "/images/projects/cielorraso/img4.png",
      ],
    },
    {
      title: "Refacción de contenedor oficina",
      images: [
        "/images/projects/contenedor/img1.png",
        "/images/projects/contenedor/img2.png",
        "/images/projects/contenedor/img3.png",
        "/images/projects/contenedor/img4.png",
        "/images/projects/contenedor/img5.png",
      ],
      preview: [
        "/images/projects/contenedor/img1.png",
        "/images/projects/contenedor/img3.png",
        "/images/projects/contenedor/img5.png",
      ],
    },
    {
      title: "Construcción de quincho en Ibarlucea",
      images: [
        "/images/projects/quincho/img1.png",
        "/images/projects/quincho/img2.png",
        "/images/projects/quincho/img3.png",
        "/images/projects/quincho/img4.png",
        "/images/projects/quincho/img5.png",
      ],
      preview: [
        "/images/projects/quincho/img1.png",
        "/images/projects/quincho/img3.png",
        "/images/projects/quincho/img5.png",
      ],
    },
    {
      title: "Construcción de sala de operadores",
      images: [
        "/images/projects/sala/img1.png",
        "/images/projects/sala/img2.png",
        "/images/projects/sala/img3.png",
        "/images/projects/sala/img4.png",
      ],
      preview: [
        "/images/projects/sala/img1.png",
        "/images/projects/sala/img2.png",
        "/images/projects/sala/img4.png",
      ],
    },
    {
      title: "Construcción de piso hormigón armado en cañería de muelle",
      images: [
        "/images/projects/muelle/img1.png",
        "/images/projects/muelle/img2.png",
        "/images/projects/muelle/img3.png",
      ],
      preview: [
        "/images/projects/muelle/img1.png",
        "/images/projects/muelle/img2.png",
        "/images/projects/muelle/img3.png",
      ],
    },
    {
      title: "Remodelación de edificio antiguo",
      images: [
        "/images/projects/merendero/img1.png",
        "/images/projects/merendero/img2.png",
        "/images/projects/merendero/img3.png",
        "/images/projects/merendero/img4.png",
        "/images/projects/merendero/img5.png",
        "/images/projects/merendero/img6.png",
        "/images/projects/merendero/img7.png",
      ],
      preview: [
        "/images/projects/merendero/img2.png",
        "/images/projects/merendero/img3.png",
        "/images/projects/merendero/img4.png",
      ],
    },
  ];

  const openImage = (project, image) => {
    const realIndex = project.images.indexOf(image);

    setAllImages(project.images);
    setCurrentIndex(realIndex);
    setSelectedImage(image);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trabajos realizados
      </h2>

      {/* PROYECTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="text-lg font-semibold mb-4">
              {project.title}
            </h3>

            {/* GALERÍA DE PREVIEW */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-64 sm:h-72 lg:h-64">

              {/* IMAGEN PRINCIPAL */}
              <img
                src={project.preview[0]}
                alt={`${project.title} - imagen principal`}
                onClick={() => openImage(project, project.preview[0])}
                className="row-span-2 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition duration-300"
              />

              {/* IMAGEN SECUNDARIA 1 */}
              <img
                src={project.preview[1]}
                alt={`${project.title} - imagen secundaria`}
                onClick={() => openImage(project, project.preview[1])}
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition duration-300"
              />

              {/* IMAGEN SECUNDARIA 2 */}
              <img
                src={project.preview[2]}
                alt={`${project.title} - imagen secundaria`}
                onClick={() => openImage(project, project.preview[2])}
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">

            {/* ANTERIOR */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
            >
              ‹
            </button>

            {/* SIGUIENTE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
            >
              ›
            </button>

            {/* CERRAR */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* IMAGEN */}
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* CONTADOR */}
            <p className="text-center text-white mt-4">
              {currentIndex + 1} / {allImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}