import appointment_img from './appointmentimg.png'
import header_img from './headerimg.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './imlogo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import filter_icon from './filter_icon.png'
import mentor1 from './mentor1.jpg'
import mentor2 from './mentor2.jpg'
import mentor3 from './mentor3.jpg'
import mentor4 from './mentor4.jpg'
import mentor5 from './mentor5.jpg'
import mentor6 from './mentor6.jpg'
import mentor7 from './mentor7.jpg'
import mentor8 from './mentor8.jpg'
import mentor9 from './mentor9.jpg'
import mentor10 from './mentor10.jpg'
import mentor11 from './mentor11.jpg'
import mentor12 from './mentor12.jpg'
import mentor13 from './mentor13.jpg'
import mentor14 from './mentor14.jpg'
import mentor15 from './mentor15.jpg'
import DataScientist from './DataScientist.svg'
import DataEngineer from './DataEngineer.svg'
import FrontendDeveloper from './FrontendDeveloper.svg'
import BackendDeveloper from './BackendDeveloper.svg'
import QAEngineer from './QAEngineer.svg'
import FullStackDeveloper from './FullStackDeveloper.svg'
import UIXUXDesigner from './UIUXDesigner.svg'
import Error_img from "./error.jpg"

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    Error_img,
    filter_icon
}

export const specialityData = [
    {
        speciality: 'Frontend Developer',
        image: FrontendDeveloper
    },
    {
        speciality: 'Backend Developer',
        image: BackendDeveloper
    },
    {
        speciality: 'Data Scientist',
        image: DataScientist
    },
    {
        speciality: 'Full Stack Developer',
        image: FullStackDeveloper
    },
    {
        speciality: 'QA Engineer',
        image: QAEngineer
    },
    {
        speciality: 'Data Engineer',
        image: DataEngineer
    },
    {
        speciality: 'UI-UX Engineer',
        image: UIXUXDesigner
    }
]

export const mentors = [
    {
        _id: 'mentor1',
        name: 'Kamal J.',
        image: mentor1,
        speciality: 'Frontend Developer',
        degree: 'B.Tech - CSE',
        experience: '3 Years',
        about: "A passionate & experienced developer with 3+ years of industry experience (jobs + projects) creating dynamic and intuitive UI and have created several projects using both frontend and backend technologies. Proficient in leveraging React.JS to build robust and scalable web applications.",
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor2',
        name: 'Sumit Dey',
        image: mentor2,
        speciality: 'Frontend Developer',
        degree: 'B.Tech - CSE',
        experience: '4.5 Years',
        about: "Skilled UI Developer with 4+ years of experience, delivering captivating and responsive web interfaces. Proficient in HTML, CSS, JavaScript, and modern front-end technologies. Adept at translating complex design concepts into the real world.",
        fees: 500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor3',
        name: 'Vaishnavi Soppari',
        image: mentor3,
        speciality: 'Frontend Developer',
        degree: 'B.Tech - CSE',
        experience: '3 Years',
        about: "Experienced Developer with a demonstrated history of working in the computer software industry. Skilled in Object-Oriented Programming (OOP), Research, Customer Service, Management, and Engineering. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science from Aurora's Scientific & Technological Research Institute.",
        fees: 500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor4',
        name: 'S Prasanna Kumar ',
        image: mentor4,
        speciality: 'Backend Developer',
        degree: 'B.Tech',
        experience: '6.5 Years',
        about: "With 6+ years of comprehensive experience in Java backend development, I'm proud of the projects and accomplishments I've achieved at Virtusa Consultant Services. From collaborating with Uline, a major player in the shipping and packing supplies industry, to contributing to the Eshakti Nabard Portal, I've honed my skills in building scalable, high-performance applications.",
        fees: 500,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor5',
        name: 'Sejal Goyal',
        image: mentor5,
        speciality: 'Backend Developer',
        degree: 'B.Tech',
        experience: '6 Years',
        about: "Experienced Python backend developer with 6 years of hands-on expertise, Proficient in designing efficient data structures and implementing algorithms, Well-versed in REST APIs and microservices for seamless application interactions. Familiar with a diverse tech stack including Python, C, C++, MongoDB, and SQL. Enthusiastic about optimizing cloud functions with OpenFaaS, Kafka for peak performance. Passionate about pushing the boundaries of technology to create impactful solutions.",
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor6',
        name: 'Sharoon S Poojary',
        image: mentor6,
        speciality: 'Full Stack Developer',
        degree: 'B.Tech',
        experience: '6 Years',
        about: "Experienced Programming Analyst with a demonstrated history of working in IT industry. Skilled in Angular, Java, Typescript, Javascript, Spring. Strong engineering professional with a Bachelor of Engineering (B.E.) focused in Mechanical Engineering from PES University.",
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor7',
        name: 'Ajay Kumar',
        image: mentor7,
        speciality: 'Full Stack Developer',
        degree: 'M.Tech',
        experience: '10 Years',
        about: "Experienced Application Developer with a demonstrated history of working in software industry. Skilled in Core Java, Spring, React js, Angular, TypeScript, JavaScript, CSS, HTML and SQL.",
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor8',
        name: 'Raghu Kuppireddy',
        image: mentor8,
        speciality: 'Full Stack Developer',
        degree: 'M.Tech',
        experience: '11 Years',
        about: "Having 11+ years of experience in analysis, design and development of web based application. Expert in develop web application and service oriented application and windows form application in visual studio using React js, Angular, TypeScript, JavaScript, CSS, HTML and MongoDB.",
        fees: 500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor9',
        name: 'Hariprasad Bobbala',
        image: mentor9,
        speciality: 'Data Scientist',
        degree: 'MS - AI & ML',
        experience: '13 Years',
        about: "I am passionate towards solving businesss problems by leveraging Data Science and AI skills and create a commercial impact. As a data scientist and AI engineer, I am passionate towards delivering descriptive, predictive and prescriptive analytics to the growth of an organization and helping them in achieving more. As an experienced Senior Data Engineer with a demonstrated history of working in the information technology and services industry, Skilled in Azure Data Services (such as Azure Data Factory, Azure Data bricks ),Informatica, Python, BMC Control-M,Greenplum, Teradata, Shell Scripting, and Oracle SQL Developer.",
        fees: 500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor10',
        name: 'Abhiram Kuruva',
        image: mentor10,
        speciality: 'Data Scientist',
        degree: 'B.Tech',
        experience: '2 Years',
        about: "Experienced data scientist with expertise in AI, ML, and DL. Skilled in building and fine-tuning models, including leveraging LLMs and transformer-based architectures. Proficient in SQL and Hive for data manipulation. Capable of creating and publishing detailed Tableau reports. Known for solving complex problems, enhancing model performance, and delivering data-driven solutions. Adept at collaborating with cross-functional teams to drive strategic decision-making and continuously staying updated with advancements in the field.",
        fees: 500,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor11',
        name: 'AMRUTHA KURADA',
        image: mentor11,
        speciality: 'QA Engineer',
        degree: 'B.Tech',
        experience: '4 Years',
        about: "Proficient in Python Selenium and Robot frameworks, as well as Tricentis Tosca, I excel in both functional and automated testing. My approach is defined by a dedication to driving efficiency and reducing manual efforts in SDLC phases through behavior-driven development frameworks. Leveraging strong communication skills, I adeptly handle customer cases, ensuring satisfaction and resolution.",
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor12',
        name: 'Vipul Sirotia',
        image: mentor12,
        speciality: 'QA Engineer',
        degree: 'B.Tech',
        experience: '11 Years',
        about: "I have done my Bachelor's in Engineering in Electronics & Telecommunication and since then I have been working primarily on programming, and testing for more than 11 and a half years at Cognizant Technology Solutions, a leading IT service company as an Project Associate.",
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor13',
        name: 'Gaurav Boob',
        image: mentor13,
        speciality: 'Data Engineer',
        degree: 'B.Tech',
        experience: '4 Years',
        about: "As an Associate Software Engineer with a strong foundation in computer science and data science, I specialize in developing scalable and secure software solutions. Currently at Dragonfly Financial Technologies, I focus on enhancing transaction security and optimizing backend solutions, consistently improving transaction efficiency and data compliance.",
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor14',
        name: 'Mohammed Amir',
        image: mentor14,
        speciality: 'Data Engineer',
        degree: 'M.Tech',
        experience: '3 Years',
        about: "Software Engineer with a passion for developing innovative and user-friendly software solutions. Proven ability to work independently and as part of a team. Strong problem-solving and analytical skills. Recent graduate with a Master of Science in Computer Science from Mumbai university.",
        fees: 500,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mentor15',
        name: 'Himanshi Sharma',
        image: mentor15,
        speciality: 'UI-UX Engineer',
        degree: 'B.Tech',
        experience: '1 Years',
        about: "I am a passionate UI/UX designer dedicated to creating seamless and engaging user experiences. I have developed strong skills in Figma, which I use to craft wireframes, build interactive prototypes, and conduct user research to inform my designs.",
        fees: 500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
]