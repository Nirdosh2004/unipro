import logo from './listening.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.svg'
import default_user from './user_default_img.png'
import right_arrow from './right-arrow.png'
import banner from './banner_1.png'
import hero_img from './hero_img1.png'
import github_icon from './github.png'
import linkedin from './linkedin.png'

export const assets = {
  logo,
  menu_icon,
  cross_icon,
  default_user,
  right_arrow,
  banner,
  hero_img,
  github_icon,
  linkedin
}

export const students = [
  {
    name: "Aarav Sharma",
    enrollmentNo: "COE2021011",
    email: "aarav.sharma@iiitd.ac.in",
    image: banner,
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "MongoDB", "TensorFlow", "Kubernetes", "GraphQL", "TypeScript"],
    projects: [
      {
        title: "MediCare AI",
        description: "AI-powered symptom checker with 92% accuracy using NLP and patient history analysis."
      },
      {
        title: "FarmConnect",
        description: "IoT-based crop monitoring system for farmers with real-time soil health alerts."
      },
      {
        title: "CodeCollab",
        description: "Real-time collaborative code editor with video calling (like Google Docs for devs)."
      },
      {
        title: "BudgetBuddy",
        description: "Personal finance tracker with ML-based spending predictions and savings tips."
      }
    ],
    social: {
      github: "https://github.com/aarav-dev",
      linkedin: "https://linkedin.com/in/aarav-sharma",
      portfolio: "https://aaravsharma.dev"
    }
  },
  {
    name: "Priya Patel",
    enrollmentNo: "COE2021022",
    email: "priya.patel@vit.ac.in",
    image: banner,
    skills: ["Flutter", "Firebase", "Java", "Kotlin", "UI/UX", "Figma", "Swift", "Dart", "CI/CD", "REST APIs"],
    projects: [
      {
        title: "EduTrack",
        description: "Mobile app for college students to manage assignments, deadlines, and GPA tracking."
      },
      {
        title: "PetAdopt",
        description: "Tinder-like app for pet adoption with shelter connectivity and vet chat."
      },
      {
        title: "ShopLocal",
        description: "E-commerce platform for small businesses with zero commission fees."
      },
      {
        title: "FitJourney",
        description: "Workout planner with posture correction using phone's motion sensors."
      }
    ],
    social: {
      github: "https://github.com/priya-codes",
      linkedin: "https://linkedin.com/in/priya-patel",
      twitter: "https://twitter.com/priya_flutter"
    }
  },
  {
    name: "Rahul Verma",
    enrollmentNo: "COE2021033",
    email: "rahul.verma@bits-pilani.ac.in",
    image: banner,
    skills: ["ROS", "Python", "Computer Vision", "Arduino", "C++", "Raspberry Pi", "OpenCV", "SLAM", "IoT", "3D Printing"],
    projects: [
      {
        title: "AgriBot",
        description: "Autonomous weed-killing robot for farms using computer vision and precision spraying."
      },
      {
        title: "SmartCane",
        description: "IoT-enabled cane for visually impaired with obstacle detection and GPS navigation."
      },
      {
        title: "DroneDelivery",
        description: "Medical supply delivery drone with collision avoidance for rural areas."
      },
      {
        title: "GestureControl",
        description: "Wristband that controls home appliances with hand gestures (no voice needed)."
      }
    ],
    social: {
      github: "https://github.com/rahul-robotics",
      linkedin: "https://linkedin.com/in/rahul-verma",
      twitter: "https://twitter.com/rahul_tinkers"
    }
  },
  {
    name: "Neha Gupta",
    enrollmentNo: "COE2021044",
    email: "neha.gupta@nitk.edu.in",
    image: banner,
    skills: ["Ethical Hacking", "Python", "Cryptography", "Kali Linux", "Pen Testing", "Blockchain", "Solidity", "Rust", "Cyber Forensics", "OWASP"],
    projects: [
      {
        title: "SecureVote",
        description: "Blockchain-based voting system with biometric authentication and tamper-proof records."
      },
      {
        title: "PhishShield",
        description: "Browser extension that detects phishing sites using ML and community reports."
      },
      {
        title: "CryptoGuard",
        description: "Hardware wallet for cryptocurrencies with self-destruct mechanism on tampering."
      },
      {
        title: "DarkWebScan",
        description: "Tool to check if your credentials are leaked on dark web markets."
      }
    ],
    social: {
      github: "https://github.com/neha-cyber",
      linkedin: "https://linkedin.com/in/neha-gupta",
      twitter: "https://twitter.com/neha_secures"
    }
  },
  {
    name: "Vikram Joshi",
    enrollmentNo: "COE2021055",
    email: "vikram.joshi@iitb.ac.in",
    image: banner,
    skills: ["AWS", "Terraform", "Kubernetes", "DevOps", "Python", "Jenkins", "Ansible", "GCP", "Microservices", "Docker"],
    projects: [
      {
        title: "AutoScale",
        description: "Cost-optimized auto-scaling system for cloud workloads using predictive algorithms."
      },
      {
        title: "ServerlessAI",
        description: "ML model deployment framework that scales to zero when inactive."
      },
      {
        title: "KubeGuard",
        description: "Security auditing tool for Kubernetes clusters with real-time vulnerability scanning."
      },
      {
        title: "CloudCost",
        description: "Dashboard to track and optimize AWS/GCP spending across teams."
      }
    ],
    social: {
      github: "https://github.com/vikram-cloud",
      linkedin: "https://linkedin.com/in/vikram-joshi",
      twitter: "https://twitter.com/vikram_devops"
    }
  },
  {
    name: "Ananya Reddy",
    enrollmentNo: "COE2021066",
    email: "ananya.reddy@iiit-h.ac.in",
    image: banner,
    skills: ["Figma", "UI/UX", "React", "Motion Design", "Adobe XD", "User Research", "Prototyping", "Illustration", "CSS", "Accessibility"],
    projects: [
      {
        title: "Accessify",
        description: "Chrome extension that auto-fixes accessibility issues on websites in real-time."
      },
      {
        title: "MoodBoard",
        description: "AI-assisted design tool that suggests color palettes based on emotions."
      },
      {
        title: "EduPlay",
        description: "Gamified learning app for kids with ADHD-friendly interactive elements."
      },
      {
        title: "TypeCraft",
        description: "Variable font generator that adjusts based on reader's reading speed."
      }
    ],
    social: {
      github: "https://github.com/ananya-ui",
      linkedin: "https://linkedin.com/in/ananya-reddy",
      behance: "https://behance.net/ananya_designs"
    }
  },
  {
    name: "Arjun Kumar",
    enrollmentNo: "COE2021077",
    email: "arjun.kumar@dtu.ac.in",
    image: banner,
    skills: ["PyTorch", "TensorFlow", "Python", "OpenCV", "NLP", "LLMs", "GANs", "Data Pipelines", "MLOps", "R"],
    projects: [
      {
        title: "FakeNewsDetect",
        description: "Chrome extension that flags potentially fake news using NLP analysis."
      },
      {
        title: "SignTranslator",
        description: "Real-time sign language to speech conversion using pose estimation."
      },
      {
        title: "RecipeGen",
        description: "AI that generates recipes based on fridge ingredients and dietary needs."
      },
      {
        title: "JobMatch",
        description: "Resume optimizer that A/B tests versions for higher interview rates."
      }
    ],
    social: {
      github: "https://github.com/arjun-ml",
      linkedin: "https://linkedin.com/in/arjun-kumar",
      twitter: "https://twitter.com/arjun_ai"
    }
  },
  {
    name: "Isha Singh",
    enrollmentNo: "COE2021088",
    email: "isha.singh@manipal.edu",
    image: banner,
    skills: ["Swift", "ARKit", "Unity", "C#", "Blender", "3D Modeling", "Game Design", "Unreal Engine", "UI/UX", "Animation"],
    projects: [
      {
        title: "ARHistory",
        description: "Museum AR app that brings historical artifacts to life with animations."
      },
      {
        title: "PuzzleCraft",
        description: "Procedurally generated 3D puzzle game with infinite difficulty levels."
      },
      {
        title: "VirtualDance",
        description: "Motion-capture app that teaches dance via real-time avatar feedback."
      },
      {
        title: "EcoSim",
        description: "Educational game about climate change with realistic ecosystem modeling."
      }
    ],
    social: {
      github: "https://github.com/isha-games",
      linkedin: "https://linkedin.com/in/isha-singh",
      artstation: "https://artstation.com/isha3d"
    }
  },
  {
    name: "Rohan Mehta",
    enrollmentNo: "COE2021099",
    email: "rohan.mehta@thapar.edu",
    image: banner,
    skills: ["Go", "Rust", "Distributed Systems", "Blockchain", "WebAssembly", "Kafka", "gRPC", "Microservices", "SQL", "NoSQL"],
    projects: [
      {
        title: "FastAPI",
        description: "High-performance API gateway for microservices with 10ms latency."
      },
      {
        title: "ChainSafe",
        description: "Cross-blockchain bridge for transferring NFTs between Ethereum and Solana."
      },
      {
        title: "DataPipe",
        description: "Real-time data pipeline processing 1M events/sec with Go and Kafka."
      },
      {
        title: "WasmEdge",
        description: "WebAssembly runtime for edge devices with Rust-based security."
      }
    ],
    social: {
      github: "https://github.com/rohan-systems",
      linkedin: "https://linkedin.com/in/rohan-mehta",
      twitter: "https://twitter.com/rohan_lowlatency"
    }
  },
  {
    name: "Divya Nair",
    enrollmentNo: "COE2021100",
    email: "divya.nair@amrita.edu",
    image: banner,
    skills: ["Quantum Computing", "Qiskit", "Python", "Linear Algebra", "Machine Learning", "Algorithms", "Cryptography", "C++", "Julia", "Research"],
    projects: [
      {
        title: "QEncrypt",
        description: "Post-quantum encryption protocol resistant to Shor's algorithm attacks."
      },
      {
        title: "ChemSim",
        description: "Quantum chemistry simulator for molecular modeling on IBM QPUs."
      },
      {
        title: "OptiRoute",
        description: "Quantum-inspired algorithm for logistics route optimization."
      },
      {
        title: "QMLib",
        description: "Open-source library for quantum machine learning implementations."
      }
    ],
    social: {
      github: "https://github.com/divya-quantum",
      linkedin: "https://linkedin.com/in/divya-nair",
      researchgate: "https://researchgate.net/divya_qc"
    }
  }
]