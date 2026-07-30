import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

/*
  Add your images inside:

  public/gallery/

  Example:
  public/gallery/icpc2t-2024-1.jpg

  Then add the image path below.
*/

const photos = [
  {
    id: 1,
    src: '/gallery/icpc2t-2024-1.jpg',
    title: 'Inauguration Ceremony',
    category: 'ICPC2T 2024',
  },
  {
    id: 2,
    src: '/gallery/icpc2t-2024-2.jpg',
    title: 'Keynote Session',
    category: 'ICPC2T 2024',
  },
  {
    id: 3,
    src: '/gallery/icpc2t-2024-3.jpg',
    title: 'Technical Session',
    category: 'ICPC2T 2024',
  },
  {
    id: 4,
    src: '/gallery/icpc2t-2024-4.jpg',
    title: 'Paper Presentation',
    category: 'ICPC2T 2024',
  },
  {
    id: 5,
    src: '/gallery/campus-1.jpg',
    title: 'NIT Raipur Campus',
    category: 'Campus',
  },
  {
    id: 6,
    src: '/gallery/campus-2.jpg',
    title: 'Conference Venue',
    category: 'Campus',
  },
];

const categories = [
  'All',
  'ICPC2T 2024',
  'Campus',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const openPhoto = (index) => {
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = () => {
    setSelectedIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const previousPhoto = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-[88px] bg-[#050B14] min-h-screen relative">

      {/* Background */}
      <div className="absolute inset-0 bg-mesh z-0 opacity-40" />

      {/* ================= HERO ================= */}

      <div className="bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white"
          >
            Gallery
          </motion.h1>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00F0FF] to-[#0066FF] rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

          <p className="text-gray-400 mt-5 text-lg">
            Glimpses of ICPC2T and NIT Raipur
          </p>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionHeading
            title="Photo Gallery"
            subtitle="Relive the memorable moments from ICPC2T conferences, technical sessions and NIT Raipur."
            light={true}
          />
        </motion.div>

        {/* ================= FILTERS ================= */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
        >

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={`
                px-5 py-2.5
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                border

                ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00C8FF] text-white border-transparent shadow-[0_0_20px_rgba(0,200,255,0.25)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#00F0FF]/40 hover:text-white'
                }
              `}
            >
              {category}
            </button>

          ))}

        </motion.div>

        {/* ================= IMAGE GRID ================= */}

        <motion.div
          initial="hidden"
          animate="show"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >

          {filteredPhotos.map((photo, index) => (

            <motion.div
              key={photo.id}
              custom={index}
              variants={fadeUp}
              onClick={() => openPhoto(index)}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                cursor-pointer
                bg-white/5
                border
                border-white/10
                hover:border-[#00F0FF]/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_40px_rgba(0,240,255,0.12)]
              "
            >

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/10
                  to-transparent
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              {/* Text */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  translate-y-2
                  group-hover:translate-y-0
                  transition-transform
                  duration-300
                "
              >

                <p className="text-[#00F0FF] text-xs font-semibold uppercase tracking-wider mb-1">
                  {photo.category}
                </p>

                <h3 className="text-white font-semibold text-lg">
                  {photo.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </motion.div>

        {/* Empty state */}

        {filteredPhotos.length === 0 && (

          <div className="text-center py-20 text-gray-400">
            No photos available in this category.
          </div>

        )}

      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              backdrop-blur-lg
              flex
              items-center
              justify-center
              p-4
            "
          >

            {/* Close */}

            <button
              onClick={closePhoto}
              className="
                absolute
                top-6
                right-6
                text-white
                bg-white/10
                hover:bg-white/20
                rounded-full
                p-3
                transition
                z-20
              "
            >
              <X size={24} />
            </button>

            {/* Previous */}

            {filteredPhotos.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousPhoto();
                }}
                className="
                  absolute
                  left-4
                  sm:left-8
                  text-white
                  bg-white/10
                  hover:bg-white/20
                  rounded-full
                  p-3
                  transition
                  z-20
                "
              >
                <ChevronLeft size={30} />
              </button>

            )}

            {/* Image */}

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full"
            >

              <img
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].title}
                className="
                  max-h-[80vh]
                  w-full
                  object-contain
                  rounded-xl
                "
              />

              <div className="text-center mt-5">

                <p className="text-[#00F0FF] text-sm mb-1">
                  {filteredPhotos[selectedIndex].category}
                </p>

                <h3 className="text-white text-xl font-semibold">
                  {filteredPhotos[selectedIndex].title}
                </h3>

              </div>

            </motion.div>

            {/* Next */}

            {filteredPhotos.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="
                  absolute
                  right-4
                  sm:right-8
                  text-white
                  bg-white/10
                  hover:bg-white/20
                  rounded-full
                  p-3
                  transition
                  z-20
                "
              >
                <ChevronRight size={30} />
              </button>

            )}

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}