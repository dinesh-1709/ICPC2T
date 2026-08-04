import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.05 } })
};

export default function SpecialSessions() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Special Sessions Upload</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm sm:text-base">Special Sessions at ICPC2T 2027</p>
        </div>
      </div>

      <div className="section-pad">
        <SectionHeading title="Special Sessions" subtitle="Information regarding all special sessions will be uploaded here soon." />
        
        <div className="max-w-4xl mx-auto text-center mt-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card p-8">
            <p className="text-gray-600">
              Details about the accepted special sessions will be uploaded here shortly. Please check back later.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
