import { motion } from 'framer-motion';
import { FaPaperPlane, FaDownload,FaCalendarAlt, FaCheckCircle, FaFileAlt, FaUserTie, FaUsers, FaExclamationTriangle, FaAward, FaUserCheck, FaGlobeAmericas } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } })
};

const proposalRequirements = [
  { num: 1, title: 'Title of the Special Session', desc: 'A concise and informative title defining the theme of the special session.' },
  { num: 2, title: 'Scope & Description', desc: 'Approx. 300 words describing the area of concern, highlighting why it is an interesting and significant topic.' },
  { num: 3, title: 'Chairs & Organizers Info', desc: 'Name, contact info, and background of special session chairs (min 2, max 4) willing to promote and organize the session.' },
];

const restrictions = [
  { code: 'A', text: 'An individual cannot be (co-)author of more than two papers submitted to the same Special Session.' },
  { code: 'B', text: 'From one organization, a maximum of 2 organizers can participate in one special session.' },
  { code: 'C', text: 'The number of organizers per session must be a minimum of 2 and a maximum of 4.' },
  { code: 'D', text: 'Preference will be given to Special Sessions with at least one (1) internationally affiliated organizer and/or industry professional to promote global and industrial outreach.' },
];

export default function SpecialSession() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      {/* Banner */}
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Special Sessions</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm sm:text-base">Call for Proposals — ICPC2T 2027</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-pad">
        <SectionHeading 
          title="Special Session Proposals & Guidelines" 
          subtitle="Propose and organize specialized technical sessions addressing cutting-edge challenges in power, control, and computing technologies." 
        />

        {/* Deadline Highlight Alert */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-[1280px] mx-auto mb-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-100">Important Deadline</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Last Date for Submission of Proposals</h3>
              </div>
            </div>
            <div className="bg-white text-amber-900 font-extrabold text-lg sm:text-xl px-6 py-2.5 rounded-xl shadow-sm whitespace-nowrap">
              📅 30th September 2026
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Proposal Requirements */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card p-7">
              <div className="flex items-center gap-3 mb-2">
                <FaFileAlt className="text-blue-600 text-xl" />
                <h2 className="font-bold text-gray-900 text-xl">Proposal Submission Requirements</h2>
              </div>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-5" />
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                If you intend to propose and organize a special session, please provide a comprehensive proposal containing the following information:
              </p>
              
              <div className="space-y-4">
                {proposalRequirements.map((item) => (
                  <div key={item.num} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Special Session Organization & Rules */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card p-7">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-blue-600 text-xl" />
                <h2 className="font-bold text-gray-900 text-xl">Special Session Organization</h2>
              </div>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Review Process */}
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-700 font-bold mb-2">
                      <FaUserCheck className="text-blue-600" />
                      <h3>Review Process</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Papers submitted to special sessions will undergo the same review process as regular papers. SS chairs are responsible for organizing the review process, assuring at least <strong>three peer reviews per paper</strong>.
                    </p>
                  </div>
                </div>

                {/* Minimum Papers */}
                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                      <FaCheckCircle className="text-amber-600" />
                      <h3>Minimum Papers Requirement</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A minimum of <strong>6 accepted and registered papers</strong> with authors from at least <strong>4 different institutions</strong> is required for each session. Smaller sessions may be merged into regular tracks.
                    </p>
                  </div>
                </div>

                {/* Complimentary Registration */}
                <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                      <FaAward className="text-emerald-600" />
                      <h3>Complimentary Registration</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Organizers of successful Special Sessions will get <strong>one free full registration</strong> per at least 6 accepted and registered papers not authored by any of the organizers.
                    </p>
                  </div>
                </div>

                {/* Session Chairs */}
                <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-purple-800 font-bold mb-2">
                      <FaUserTie className="text-purple-600" />
                      <h3>Session Chairs Role</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      When a session is accepted, SS organizers will serve as Session Chairs during the conference. Organizers are expected to register and attend the conference.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Restrictions */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="card p-7 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-2">
                <FaExclamationTriangle className="text-amber-500 text-xl" />
                <h2 className="font-bold text-gray-900 text-xl">Rules & Restrictions</h2>
              </div>
              <div className="h-0.5 w-10 bg-amber-500 rounded-full mb-5" />

              <div className="space-y-3">
                {restrictions.map((r) => (
                  <div key={r.code} className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-100 text-sm">
                    <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {r.code}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{r.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Submit Proposal CTA */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} variants={fadeUp} className="card p-6 bg-gradient-to-br from-blue-950 to-blue-900 text-white shadow-lg">
              <h3 className="font-bold text-white text-lg mb-2">Submit Your Proposal</h3>
              <p className="text-xs text-blue-200 mb-6 leading-relaxed">
                Send your completed Special Session proposal including all required details directly to the Conference Secretariat.
              </p>
              
              <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/10">
                <div className="text-xs text-blue-200 font-semibold mb-1">Proposal Deadline</div>
                <div className="text-lg font-bold text-amber-400">September 30, 2026</div>
              </div>

            <div className="space-y-3">
  {/* Submit via Email */}
  <a 
    href="mailto:icpc2t_2027@nitrr.ac.in?subject=Special%20Session%20Proposal%20-%20ICPC2T%202027"
    className="btn-primary w-full justify-center text-sm py-3 flex items-center gap-2 shadow-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold border-none"
  >
    <FaPaperPlane className="text-xs" />
    Submit Proposal
  </a>

  {/* Download Application Form */}
  <a
    href="/special-session-application.docx"
    download
    className="w-full justify-center text-sm py-3 px-4 flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-200"
  >
    <FaDownload className="text-xs" />
    Download Application Form
  </a>

  {/* Download Template */}
  <a
    href="/special-session-template.docx"
    download
    className="w-full justify-center text-sm py-3 px-4 flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-200"
  >
    <FaDownload className="text-xs" />
    Download Proposal Template
  </a>
</div>
            </motion.div>

            {/* Global & Industry Preference Badge */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1.2} variants={fadeUp} className="card p-6 border-t-4 border-t-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <FaGlobeAmericas className="text-blue-600 text-xl" />
                <h4 className="font-bold text-gray-900 text-base">Outreach Preference</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Preference will be given to Special Session proposals featuring at least 1 internationally affiliated organizer and/or industry professional to ensure high global engagement.
              </p>
            </motion.div>

            {/* Quick Contact Card */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1.5} variants={fadeUp} className="card p-6">
              <h4 className="font-bold text-gray-900 mb-2 text-base">Need Assistance?</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                For questions regarding special session proposals, scope suitability, or chair appointments:
              </p>
              <a href="mailto:icpc2t_2027@nitrr.ac.in" className="text-xs font-semibold text-blue-600 hover:underline break-all">
                icpc2t_2027@nitrr.ac.in
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}