const { useState, useEffect } = React;

const ImageSlider = () => {
  const images = [
    "/static/web/img-grupos/2023.jpg",
    "/static/web/img-grupos/20231.jpg",
    "/static/web/img-grupos/20232.jpg",
    "/static/web/img-grupos/20233.jpg",
    "/static/web/img-grupos/20234.jpg",
    "/static/web/img-grupos/20235.jpg",
    "/static/web/img-grupos/20236.jpg",
    "/static/web/img-grupos/20237.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const startAutoPlay = () => {
    return setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  useEffect(() => {
    const timer = startAutoPlay();
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  return (
    
    <div className="relative w-full max-w-4xl mx-auto h-[400px]">
      {}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
              index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain" 
              loading="lazy" 
            />
            {}
            <div className="absolute inset-0 -z-10 bg-black"></div>
          </div>
        ))}
        
        {}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Anterior"
        >
          ◀
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Siguiente"
        >
          ▶
        </button>

        {}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/60'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

window.ImageSlider = ImageSlider;