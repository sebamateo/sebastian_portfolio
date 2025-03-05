'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import {
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineCluster,
    AiOutlineThunderbolt,
    AiOutlineBook,
    AiOutlineExperiment,
    AiOutlineGlobal,
    AiOutlineMail,
} from 'react-icons/ai';

export default function Home() {
    // Reusable animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };
    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    // Smooth scrolling function
    const handleSmoothScroll = useCallback((e: { preventDefault: () => void; }, targetId: string) => {
        e.preventDefault();
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-h-screen bg-black text-white flex flex-col items-center p-10 font-sans relative scroll-smooth"
        >
            <nav className="fixed top-0 w-full bg-gray-900 p-4 flex justify-center space-x-6 text-blue-400 shadow-xl z-50">
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-blue-300 transition">About</a>
                <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-blue-300 transition">Skills</a>
                <a href="#strengths" onClick={(e) => handleSmoothScroll(e, 'strengths')} className="hover:text-blue-300 transition">Strengths</a>
                <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="hover:text-blue-300 transition">Experience</a>
                <a href="#achievements" onClick={(e) => handleSmoothScroll(e, 'achievements')} className="hover:text-blue-300 transition">AI Achievements</a>
                <a href="#education" onClick={(e) => handleSmoothScroll(e, 'education')} className="hover:text-blue-300 transition">Education</a>
                <a href="#languages" onClick={(e) => handleSmoothScroll(e, 'languages')} className="hover:text-blue-300 transition">Languages</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-blue-300 transition">Contact</a>
            </nav>
            <header className="text-center mt-32">
                <motion.h1
                    className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Sebastian Mateo
                </motion.h1>
                <motion.div className="mt-6" initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                         duration: 1,
                         scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
                     }}>
                    <motion.img className="w-32 h-32 rounded-full bg-gray-700 mx-auto" src="/profile_photo.jpg" alt="profile_photo"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}/>
                    {/* Replace the above div with your actual <img src="/profile.jpg" /> once you have a real picture */}
                </motion.div>
                <motion.p className="text-xl mt-4 text-gray-300 font-light" variants={fadeInUp}>Full-Stack Developer | AI & SaaS Expert</motion.p>
            </header>
            <div className="flex justify-start flex-col">
            <motion.section id="about" className="scroll-mt-32 mt-24 text-center max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center justify-center gap-3"><AiOutlineUser className="text-5xl"/> About Me</h2>
                <p className="mt-6 text-gray-400 text-lg leading-relaxed">I am an experienced Software Engineer with 18 years in full-stack development, specializing in TypeScript, React, Next.js, Node.js, GraphQL, Java, and AWS. Passionate about AI-driven solutions using OpenAI.</p>
            </motion.section>
            <motion.section id="skills" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineSetting className="text-5xl"/> Skills</h2>
                <ul className="list-disc text-gray-400 mt-6 text-lg leading-relaxed pl-6 space-y-2">
                    <li><strong>Artificial Intelligence:</strong> OpenAI, GPT-based text summarization, AI-driven recommendations, LangChain</li>
                    <li><strong>Frontend:</strong> React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Material UI (MUI), Tailwind</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, GraphQL, Java Spring Boot, Java 8, JSP, Hibernate, Kotlin, Groovy</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL, Redis, Microsoft SQL Server</li>
                    <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS, Lambda), Heroku, Docker, Jenkins</li>
                    <li><strong>Mobile Development:</strong> Android (Kotlin), Apache Cordova</li>
                </ul>
            </motion.section>
            <motion.section id="strengths" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineThunderbolt className="text-5xl"/> Strengths</h2>
                <ul className="list-disc text-gray-400 mt-6 text-lg leading-relaxed pl-6 space-y-2">
                    <li>AI Expertise: Skilled in OpenAI APIs and AI-driven solutions for automation and personalization.</li>
                    <li>Adaptability: Quick learner, proficient in new tools and frameworks.</li>
                    <li>Multitasking: Effectively manages multiple projects and systems simultaneously.</li>
                    <li>Software Architecture: Strong ability to design scalable and maintainable systems.</li>
                </ul>
            </motion.section>
            <motion.section id="experience" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineCluster className="text-5xl"/> Experience</h2>
                <div className="mt-6 space-y-6">
                    <motion.div className="bg-gray-800 p-6 rounded-lg" whileHover={{ scale: 1.02 }} variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold">EternallyStream</h3>
                        <p className="text-gray-400">Senior Full Stack Developer (2024 - Present)</p>
                        <ul className="list-disc ml-6 mt-2 text-gray-400 space-y-1">
                            <li>Designed and developed an API to connect ProtoHologram avatars with OpenAI, enabling unique AI-driven personalities.</li>
                            <li>Integrated LLM-based responses into dynamic avatar interactions, improving engagement.</li>
                            <li>Deployed and managed the service on Heroku, ensuring high availability and scalability.</li>
                        </ul>
                        <a href="https://protohologram.com/" target="_blank" className="text-blue-400 hover:text-blue-300 block mt-2">https://protohologram.com</a>
                    </motion.div>
                    <motion.div className="bg-gray-800 p-6 rounded-lg" whileHover={{ scale: 1.02 }} variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold">BabyCenter</h3>
                        <p className="text-gray-400">Senior Full Stack Developer (2018 - Present)</p>
                        <ul className="list-disc ml-6 mt-2 text-gray-400 space-y-1">
                            <li>Led the development and enhancement of React.js and Next.js applications, improving performance and scalability.</li>
                            <li>Developed GraphQL APIs and optimized Node.js services for efficient data retrieval.</li>
                            <li>Architected cloud-based solutions on AWS, utilizing services like EC2, RDS, and Lambda.</li>
                            <li>Created AI-powered text summarization features using OpenAI for article/community content.</li>
                            <li>Maintained and modernized six legacy systems built in Java Spring Boot.</li>
                            <li>Led migration efforts for BabyCenter’s US and international sites, transitioning to React, GraphQL, and Next.js.</li>
                            <li>Optimized SEO and SSR performance, improving user experience and site rankings.</li>
                            <li>Resolved critical bugs and performance issues on a high-traffic, consumer-facing website.</li>
                        </ul>
                        <a href="https://www.babycenter.com" target="_blank" className="text-blue-400 hover:text-blue-300 block mt-2">https://www.babycenter.com</a>
                    </motion.div>
                    <motion.div className="bg-gray-800 p-6 rounded-lg" whileHover={{ scale: 1.02 }} variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold">The Rounds</h3>
                        <p className="text-gray-400">Senior Full Stack Developer (2022 - 2023)</p>
                        <ul className="list-disc ml-6 mt-2 text-gray-400 space-y-1">
                            <li>Enhanced client experience by integrating personalized product recommendations using AI.</li>
                            <li>Improved front-end code maintainability and performance by implementing best practices.</li>
                            <li>Led key feature development for their zero-waste delivery service platform.</li>
                        </ul>
                        <a href="https://therounds.co" target="_blank" className="text-blue-400 hover:text-blue-300 block mt-2">https://therounds.co</a>
                    </motion.div>
                    <motion.div className="bg-gray-800 p-6 rounded-lg" whileHover={{ scale: 1.02 }} variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold">Other Experience</h3>
                        <ul className="list-disc ml-6 mt-2 text-gray-400 space-y-1">
                            <li><strong>Hollywood Spill, LLC (2018):</strong> Developed a native Android Kotlin app for a live game/quiz show.</li>
                            <li><strong>Inpoint (2017 – 2018):</strong> Led backend development using Java Spring Boot.</li>
                            <li><strong>Pyxis (2013 – 2017):</strong> Built modern React.js & Spring Boot applications for various industries.</li>
                            <li><strong>Inmind (2009 – 2014):</strong> Developed mobile banking web apps and multimedia recognition systems.</li>
                            <li><strong>Tata Consultancy Services (2006 – 2009):</strong> Worked on Java EE enterprise systems.</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section id="achievements" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineExperiment className="text-5xl"/> AI Achievements</h2>
                <ul className="list-disc text-gray-400 mt-6 text-lg leading-relaxed pl-6 space-y-2">
                    <li>Developed AI-driven live sound recognition system capable of real-time TV channel detection with an FFT-based algorithm.</li>
                    <li>Built AI-powered summarization tools for BabyCenter using LangChain and OpenAI-based models, improving engagement and readability.</li>
                    <li>Designed an AI-driven recommendation engine using ML algorithms and user behavior analysis to enhance personalization.</li>
                    <li>Developed OpenAI-powered Persona API for EternallyStream, enabling real-time AI-driven conversations.</li>
                </ul>
            </motion.section>
            <motion.section id="education" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineBook className="text-5xl"/> Education</h2>
                <p className="text-gray-400 mt-6 text-lg leading-relaxed">ORT University, Uruguay — Software Engineer (2005 - 2012)</p>
            </motion.section>
            <motion.section id="languages" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineGlobal className="text-5xl"/> Languages</h2>
                <ul className="list-disc text-gray-400 mt-6 text-lg leading-relaxed pl-6 space-y-2">
                    <li>English (Fluent)</li>
                    <li>Spanish (Native)</li>
                </ul>
            </motion.section>
            <motion.section id="contact" className="scroll-mt-32 mt-24 max-w-4xl" variants={fadeInUp}>
                <h2 className="text-5xl font-bold text-blue-400 flex items-center gap-3"><AiOutlineMail className="text-5xl"/> Contact</h2>
                <p className="text-gray-400 mt-6 text-lg leading-relaxed">Montevideo, Uruguay <br/> (+598) 99257188 <br/> sebastian.mateo85@gmail.com</p>
                <div className="flex space-x-8 mt-6">
                    <a href="mailto:sebastian.mateo85@gmail.com" className="text-3xl text-blue-400 hover:text-blue-300"><FaEnvelope/></a>
                    <a href="https://www.linkedin.com/in/sebastian-mateo-horta" className="text-3xl text-blue-400 hover:text-blue-300"><FaLinkedin/></a>
                    <a href="https://github.com/sebamateo" className="text-3xl text-blue-400 hover:text-blue-300"><FaGithub/></a>
                </div>
            </motion.section>
            </div>
            <motion.footer className="mt-24 text-gray-500 text-lg" variants={fadeInUp}>
                <p className="mb-4">&copy; 2025 Sebastian Mateo. All Rights Reserved.</p>
                <a href="#top" className="text-blue-400 hover:text-blue-300 inline-flex items-center"><FaArrowUp className="mr-1"/> Back to top</a>
            </motion.footer>
        </motion.div>
    );
}
