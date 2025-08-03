import React, { useEffect, useRef, useState } from 'react';
import { Camera, Heart, Users, Award } from 'lucide-react';

// ImageViewer Component for displaying a single full image
interface ImageViewerProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-gray-700 transition-colors z-10"
          aria-label="Close image viewer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img
          src={imageSrc}
          alt="Full Glimpse"
          className="w-full h-auto object-contain max-h-[85vh] rounded-lg"
        />
      </div>
    </div>
  );
};

// FullGalleryViewer Component for displaying all glimpse images in a grid
interface FullGalleryViewerProps {
  images: { image: string }[];
  onClose: () => void;
}

const FullGalleryViewer: React.FC<FullGalleryViewerProps> = ({ images, onClose }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setCurrentImage(imageSrc);
  };

  const handleCloseSingleImageViewer = () => {
    setCurrentImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-5xl w-full relative shadow-xl max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close gallery"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-6 text-center">Full Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((glimpse, index) => (
            <div
              key={index}
              className="relative group bg-slate-800/30 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(glimpse.image)}
            >
              <img
                src={glimpse.image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImage && (
        <ImageViewer imageSrc={currentImage} onClose={handleCloseSingleImageViewer} />
      )}
    </div>
  );
};


const GlimpsesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showImageViewer, setShowImageViewer] = useState(false); // State for individual image viewer
  const [selectedImage, setSelectedImage] = useState(''); // State for the image to display in individual viewer
  const [showFullGallery, setShowFullGallery] = useState(false); // State for full gallery viewer

  const glimpses = [
    {
      image: "/1.jpeg",
    },
    {
      image: "/2.jpeg",
    },
    {
      image: "/3.jpeg",
    },
    {
      image: "/4.jpeg",
    },
    {
      image: "/5.jpeg",
    },
    {
      image: "/6.jpeg",
    },
    {
      image: "/7.jpeg",
    },
    {
      image: "/8.webp",
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      // Increase scroll speed from 0.5 to 2
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 2; // Made sliding faster
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Function to open the individual image viewer
  const handleViewClick = (image: string) => {
    setSelectedImage(image);
    setShowImageViewer(true);
  };

  // Function to close the individual image viewer
  const handleCloseImageViewer = () => {
    setShowImageViewer(false);
    setSelectedImage('');
  };

  // Function to open the full gallery viewer
  const handleViewFullGalleryClick = () => {
    setShowFullGallery(true);
  };

  // Function to close the full gallery viewer
  const handleCloseFullGallery = () => {
    setShowFullGallery(false);
  };

  return (
    <section id="glimpses" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Glimpses of 2K24
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Relive the magical moments from last year's spectacular celebration
          </p>
        </div>

        <div className="relative mb-12">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate glimpses for seamless loop */}
            {[...glimpses, ...glimpses].map((glimpse, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-72 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={glimpse.image}
                    alt={`Glimpse ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-slate-400">2K24 Collection</span>
                    </div>
                    <button
                      onClick={() => handleViewClick(glimpse.image)}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-3 py-1 bg-gradient-to-r from-orange-500 to-blue-500 text-white text-xs font-semibold rounded-full"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
            <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2K+</div>
            <div className="text-slate-400">Participants</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">30+</div>
            <div className="text-slate-400">Events</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
            <Camera className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-slate-400">Photos</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
            <Heart className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-slate-400">Memories</div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleViewFullGalleryClick} // Added onClick handler for full gallery
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <Camera className="inline-block w-5 h-5 mr-2" />
            <span>View Full Gallery</span>
          </button>
        </div>
      </div>

      {/* Conditional rendering of the individual ImageViewer */}
      {showImageViewer && (
        <ImageViewer imageSrc={selectedImage} onClose={handleCloseImageViewer} />
      )}

      {/* Conditional rendering of the FullGalleryViewer */}
      {showFullGallery && (
        <FullGalleryViewer images={glimpses} onClose={handleCloseFullGallery} />
      )}
    </section>
  );
};

export default GlimpsesSection;
