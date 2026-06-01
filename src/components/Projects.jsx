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
    },
    {
      title: "Construcción de cielorraso ignifugo",
      images: [
        "/images/projects/cielorraso/img1.png",
        "/images/projects/cielorraso/img2.png",
        "/images/projects/cielorraso/img4.png",
      ],
    },
    {
      title: "Refacción de contenedor oficina",
      images: [
        "/images/projects/contenedor/img1.png",
        "/images/projects/contenedor/img3.png",
        "/images/projects/contenedor/img5.png",
      ],
    },
    {
      title: "Construcción de quincho en Ibarlucea",
      images: [
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
        "/images/projects/sala/img4.png",
      ],
    },
    {
      title: "Remodelación de edificio antiguo",
      images: [
        "/images/projects/merendero/img1.png",
        "/images/projects/merendero/img2.png",
        "/images/projects/merendero/img3.png",
        "/images/projects/merendero/img6.png",
        "/images/projects/merendero/img4.png",
        "/images/projects/merendero/img8.png",
      ],
    },
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
                  onClick={() => {
                    setAllImages(project.images);
                    setCurrentIndex(index);
                    setSelectedImage(img);
                  }}
                  className="cursor-pointer rounded-lg object-cover w-full h-52 sm:h-60 w-full hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
            >
              ›
            </button>

            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="text-center text-white mt-4">
              {currentIndex + 1} / {allImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
