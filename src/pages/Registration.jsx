import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaInfoCircle, FaArrowDown } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const feeData = [
  { category: 'Student / Research Scholar', ieeeINR: '₹8,000', ieeeUSD: '$250', nonIeeeINR: '₹9,000', nonIeeeUSD: '$300' },
  { category: 'Academician',                 ieeeINR: '₹9,000', ieeeUSD: '$250', nonIeeeINR: '₹10,000', nonIeeeUSD: '$300' },
  { category: 'Industry Professional',       ieeeINR: '₹10,000', ieeeUSD: '$350', nonIeeeINR: '₹11,000', nonIeeeUSD: '$400' },
];


const prevProceedings = [
  { year: 2020, url: 'https://ieeexplore.ieee.org/xpl/conhome/9051868/proceeding' },
  { year: 2022, url: 'https://ieeexplore.ieee.org/xpl/conhome/9776593/proceeding' },
  { year: 2024, url: 'https://ieeexplore.ieee.org/xpl/conhome/10474598/proceeding' },
  { year: 2025, url: 'https://ieeexplore.ieee.org/xpl/conhome/10958571/proceeding' },
];

export default function Registration() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Registration</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">ICPC2T 2027 — NIT Raipur</p>
        </div>
      </div>

      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Process Note */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="card p-6 border-l-4 border-l-blue-600 bg-blue-50 flex items-start gap-4"
            >
              <FaInfoCircle className="text-blue-600 text-xl mt-0.5 shrink-0" />
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900 mb-2">Registration Process</p>
                <p>Registration details will be updated soon. Please check back later.</p>
              </div>
            </motion.div>

            {/* Fee Table */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900 text-lg">Registration Fees</h2>
                <p className="text-gray-500 text-sm mt-0.5">All fees include 18% GST</p>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Category</th>
                      <th className="text-center" colSpan={2}>IEEE Members</th>
                      <th className="text-center" colSpan={2}>Non-IEEE Members</th>
                    </tr>
                    <tr>
                      <th className="text-center bg-blue-800">INR</th>
                      <th className="text-center bg-blue-800">USD</th>
                      <th className="text-center bg-blue-800">INR</th>
                      <th className="text-center bg-blue-800">USD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeData.map((row, i) => (
                      <tr key={i}>
                        <td className="font-medium text-gray-900">{row.category}</td>
                        <td className="text-center font-semibold text-blue-700">{row.ieeeINR}</td>
                        <td className="text-center font-semibold text-blue-700">{row.ieeeUSD}</td>
                        <td className="text-center font-semibold text-gray-800">{row.nonIeeeINR}</td>
                        <td className="text-center font-semibold text-gray-800">{row.nonIeeeUSD}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-amber-50 border-t border-amber-100 text-xs text-amber-800 space-y-1">
                <p className="font-semibold">** Foreign participants (outside India) should pay in USD.</p>
                <p>Mode of Payment: Online transaction to the account of Director, NIT Raipur.</p>
              </div>
            </motion.div>

            {/* IEEE Note */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fadeUp}
              className="card p-6 border-l-4 border-l-amber-500 bg-amber-50"
            >
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>📌 Note:</strong> All registered and presented papers will be submitted to IEEE for inclusion into <strong>IEEE Xplore</strong> (Scopus indexed), provided they meet IEEE criteria and guidelines.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Registration Deadline</h3>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <p className="text-xs text-red-500 font-semibold uppercase tracking-widest mb-1">Deadline</p>
                <p className="text-xl font-bold text-red-700">15 Jan 2027</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Previous Proceedings</h3>
              <div className="space-y-2">
                {prevProceedings.map((p) => (
                  <a key={p.year} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-sm group">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">ICPC2T {p.year}</span>
                    <FaExternalLinkAlt className="text-blue-400 text-xs" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
