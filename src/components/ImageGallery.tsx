import React from 'react';

const ImageGallery: React.FC = () => {
  const images = [
    { src: '/images/me-playing-with-dogs.jpg', alt: 'Me playing fetch with a pack of dogs on a sunny Iowa day' },
    { src: '/images/happy-dogs.jpg', alt: 'Happy dogs smiling for the camera' },
    { src: '/images/green-lawn.jpg', alt: 'Lush green lawn after our eco-friendly treatment' },
    { src: '/images/iowa-landscape.jpg', alt: 'Rolling Iowa fields at golden hour' },
    { src: '/images/iowa-state-memories.jpg', alt: 'Throwback photo from Iowa State University campus' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Favorite Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A few snapshots from over the years
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
