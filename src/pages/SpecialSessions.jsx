import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

// Import PDFs
import ss1Pdf from '../assets/SpecialSession/SS pdf/SS1.pdf';
import ss2Pdf from '../assets/SpecialSession/SS pdf/SS2.pdf';
import ss3Pdf from '../assets/SpecialSession/SS pdf/SS3.pdf';
import SS4Pdf from "../assets/SpecialSession/SS pdf/SS4.pdf";

// Import Chairs Images
import yogeshImg from '../assets/SpecialSession/Organizing chairs images/Dr. Yogesh Kumar K, Alliance University, Bengaluru.png';
import jayaramanImg from '../assets/SpecialSession/Organizing chairs images/Dr. Jayaraman Theerthagiri, Gyeongsang National University, Bengaluru.png';
import arunImg from '../assets/SpecialSession/Organizing chairs images/Dr. Arun Varghese, Alliance University, Bengaluru.png';
import artiImg from '../assets/SpecialSession/Organizing chairs images/Arti Ranjan, Niels Brock Copenhagen Business College (NBCBC), Copenhagen, Denmark.png';
import rajivImg from '../assets/SpecialSession/Organizing chairs images/Dr. Rajiv Kumar Nath, SSCSE, Sharda University, Greater Noida.png';
import preetiImg from '../assets/SpecialSession/Organizing chairs images/Dr. Preeti Yadav, MJP Rohilkhand University, Bareilly.png';
import kanikaImg from '../assets/SpecialSession/Organizing chairs images/Dr. Kanika Singhal, Noida Institute of Engineering and Technology, Greater Noida.png';
import junyanImg from '../assets/SpecialSession/Organizing chairs images/Dr. Junyan Shao, Peking University.png';
import wentingImg from '../assets/SpecialSession/Organizing chairs images/Dr. Wenting Wang, Peking University.png';
import yipingImg from '../assets/SpecialSession/Organizing chairs images/Dr. Yiping Yuan MJP, University of Electronic Science and Technology of China.png';
import yujiaImg from '../assets/SpecialSession/Organizing chairs images/Dr. Yujia Huang, Shenyang University of Technology.png';
import sheilaImg from "../assets/SpecialSession/Organizing chairs images/Dr. Sheila Mahapatra, Alliance University, Bangalore.png";
import hemaniImg from "../assets/SpecialSession/Organizing chairs images/Dr. Hemani Kaushal, University of North Florida, USA.png";
import PankajImg from "../assets/SpecialSession/Organizing chairs images/Dr. Pankaj Kumar, Manipal Academy of Higher Education, Manipal , India.png";
import BrajeshImg from "../assets/SpecialSession/Organizing chairs images/Dr. Brajesh Kumar, Government Engineering College Jamui, Bihar, India.png";
import AkshayImg from "../assets/SpecialSession/Organizing chairs images/Dr. Akshay Kumar, PSCAD Engineer, Manav Energy, Begaluru, India.png";
import MukeshImg from "../assets/SpecialSession/Organizing chairs images/Dr. Mukesh Kumar, Government Engineering College Jamui, Bihar, India.png";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.05 } })
};

// Placeholder data for Special Sessions
const specialSessionsData = [

  // SS1  -->
  {
    id: 1,
    title: "Special Session 1: Intelligent Materials and Electrochemical Technologies for Power, Hydrogen, Energy Storage and Sensing Applications",
    pdfUrl: ss1Pdf,
    instructions: "After login, select Special Session (SS1): “Intelligent Materials and Electrochemical Technologies for Power, Hydrogen, Energy Storage and Sensing Applications”",
    chairs: [
      {
        name: "Dr. Yogesh Kumar K",
        designation: "Alliance University, Bengaluru",
        photoUrl: yogeshImg
      },
      {
        name: "Dr. Jayaraman Theerthagiri",
        designation: "Gyeongsang National University, Jinju, Republic of Korea",
        photoUrl: jayaramanImg
      },
      {
        name: "Dr. Arun Varghese",
        designation: "Alliance University, Bengaluru",
        photoUrl: arunImg
      }
    ]
  },

  // SS2  -->
  {
    id: 2,
    title: "Special Session 2: Energy-Efficient AI, Intelligent Control, and Edge Computing for Sustainable Power and Smart Energy Systems",
    pdfUrl: ss2Pdf,
    instructions: "After login, select Special Session (SS2): “Energy-Efficient AI, Intelligent Control, and Edge Computing for Sustainable Power and Smart Energy Systems”",
    chairs: [
      {
        name: "Arti Ranjan",
        designation: "Niels Brock Copenhagen Business College (NBCBC), Copenhagen, Denmark",
        photoUrl: artiImg
      },
      {
        name: "Dr. Rajiv Kumar Nath",
        designation: "SSCSE, Sharda University, Greater Noida",
        photoUrl: rajivImg
      },
      {
        name: "Dr. Preeti Yadav",
        designation: "MJP Rohilkhand University, Bareilly",
        photoUrl: preetiImg
      },
      {
        name: "Dr. Kanika Singhal",
        designation: "Noida Institute of Engineering and Technology, Greater Noida",
        photoUrl: kanikaImg
      }
    ]
  },

  // SS3 -->
  {
    id: 3,
    title: "Special Session 3: AI Data Centers: Power, Computing and Intelligent Energy Management",
    pdfUrl: ss3Pdf,
    instructions: "After login, select Special Session (SS3): “AI Data Centers: Power, Computing and Intelligent Energy Management”",
    chairs: [
      {
        name: "Dr. Junyan Shao",
        designation: "Peking University",
        photoUrl: junyanImg
      },
      {
        name: "Dr. Wenting Wang",
        designation: "Peking University",
        photoUrl: wentingImg
      },
      {
        name: "Dr. Yiping Yuan MJP",
        designation: "University of Electronic Science and Technology of China",
        photoUrl: yipingImg
      },
      {
        name: "Dr. Yujia Huang",
        designation: "Shenyang University of Technology",
        photoUrl: yujiaImg
      }
    ]
  },

  // SS4 -->
  {
  id: 4,
  title: "Special Session 4: Intelligent Energy Optimization for Power, Control and Computing Systems",
  pdfUrl: SS4Pdf,
  instructions:
    'After login, select Special Session (SS4): "Intelligent Energy Optimization for Power, Control and Computing Systems"',
  chairs: [
    {
      name: "Dr. Sheila Mahapatra",
      designation: "Alliance University, Bangalore",
      photoUrl: sheilaImg,
    },
    {
      name: "Dr. Yogesh Kumar K",
      designation: "Alliance University, Bangalore",
      photoUrl: yogeshImg,
    },
    {
      name: "Dr. Hemani Kaushal",
      designation: "University of North Florida, USA",
      photoUrl: hemaniImg,
    }
  ],
},

  // SS6 -->
  {
  id: 6,
  title: "Special Session 6: Advancing Efficient Electrical Drives, Electric Vehicles, and Sustainable Power Systems",
  pdfUrl: SS4Pdf,
  instructions:
    'After login, select Special Session (SS6): “Advancing Efficient Electrical Drives, Electric Vehicles, and Sustainable Power Systems”',
  chairs: [
    {
      name: "Dr. Mukesh Kumar",
      designation: "Government Engineering College Jamui, Bihar, India",
      photoUrl: MukeshImg,
    },
    {
      name: "Dr. Akshay Kumar",
      designation: "PSCAD Engineer, Manav Energy, Begaluru, India",
      photoUrl: AkshayImg,
    },
    {
      name: "Dr. Brajesh Kumar",
      designation: "Government Engineering College Jamui, Bihar, India",
      photoUrl: BrajeshImg,
    },
    {
      name: "Dr. Pankaj Kumar",
      designation: "Manipal Academy of Higher Education, Manipal , India",
      photoUrl: PankajImg,
    }
  ],
}
];

export default function SpecialSessions() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Special Sessions</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm sm:text-base">Explore the special sessions at ICPC2T 2027</p>
        </div>
      </div>

      <div className="section-pad">
        <SectionHeading title="Accepted Special Sessions" subtitle="Explore our special sessions, download their details, and learn about the organizing chairs." />
        
        <div className="max-w-5xl mx-auto mt-12 grid gap-10">
          {specialSessionsData.map((session, index) => (
            <motion.div 
              key={session.id}
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-100px" }} 
              custom={index}
              variants={fadeUp} 
              className="card p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow bg-white rounded-2xl"
            >
              {/* Clickable Title */}
              <a 
                href={session.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg sm:text-2xl font-bold text-blue-700 hover:text-blue-500 transition-colors group"
              >
                <FaFilePdf className="text-red-500 text-2xl sm:text-3xl group-hover:scale-110 transition-transform shrink-0" />
                <span className="group-hover:underline decoration-2 underline-offset-4 leading-tight">{session.title}</span>
              </a>
              
              {/* Organizing Chairs Section */}
              <div className="mt-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-5 border-b border-gray-100 pb-2">Organizing Chairs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {session.chairs.map((chair, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors">
                      <img 
                        src={chair.photoUrl} 
                        alt={chair.name} 
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-sm ring-2 ring-white shrink-0" 
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{chair.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 font-medium">{chair.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions Section */}
              <div className="mt-8 p-4 sm:p-5 bg-amber-50/50 border border-amber-100/60 rounded-xl">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-amber-800">Instructions: </span>
                  {session.instructions}
                  {' '}
                  <a 
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICPCCT2027" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2"
                  >
                    Submit here
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
