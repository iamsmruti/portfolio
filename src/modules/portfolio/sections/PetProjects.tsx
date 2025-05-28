import Heading from '../../../components/Heading';
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import placeholder from "../../../assets/placeholder-image.png"
import agilecoder from "../../../assets/agilecoder.png"
import seekersSaga from "../../../assets/seekers-saga.png"
import videoTV from "../../../assets/video-tv.png"
import ticTacToe from "../../../assets/tic-tac-toe.png"



const PetProjects = () => {
  const projects = [
    {
      title: 'Agile Coder',
      description: 'A personal landing page and project hub showcasing my ongoing work. Part of a broader effort to build the brand.',
      link: 'https://agilecoder.in',
      image: agilecoder,
      tech: ['NextJS', 'Markdown', 'TailwindCSS'],
      source: ''
    },
    {
      title: 'Seeker\'s Saga',
      description: 'A Full Stack Treasure Hunt Website, featured with interactive maps and puzzles to test your softskills.',
      link: 'https://seekers-saga.vercel.app',
      image: seekersSaga,
      tech: ['ReactJS', 'TailwindCSS', 'NodeJS', 'MongoDB'],
      source: 'https://github.com/iamsmruti/seekers_saga'
    },
    {
      title: 'Video TV',
      description: 'A Full Stack Video Sharing Platform. Easy to upload videos and share the url with friends.',
      link: 'https://video-tv.vercel.app/',
      image: videoTV,
      tech: ['ReactJS', 'MongoDB', 'Cloudinary', 'NodeJS', 'ExpressJS'],
      source: 'https://github.com/iamsmruti/video-tv'
    },
    {
      title: 'Tic Tac Toe',
      description: 'This is a real-time multiplayer tic-tac-toe game. You can invite your friends to play together online.',
      link: 'https://crossedcircle.vercel.app/',
      image: ticTacToe,
      tech: ['ReactJS', 'MUI', 'NodeJS', 'MongoDB', 'Redux TK'],
      source: 'https://github.com/iamsmruti/tic-tac-toe'
    },
    {
      title: 'WebIQ',
      description: 'A browser extension (WIP) that tracks and categorizes tab usage to provide insightful reports on your internet habits.',
      link: '',
      image: placeholder,
      tech: ['Javascript', 'Chrome API', 'React'],
      source: ''
    },
    {
      title: 'Agile Ops',
      description: 'A pet CLI tool to organize .pem files and quickly connect to EC2 instances. Will extend to create a simple deploy tool.',
      link: '',
      image: placeholder,
      tech: ['NodeJS', 'Terraform'],
      source: ''
    },
    {
      title: 'Eris',
      description: 'A lightweight Electron browser with basic proctoring to block tab switching, screen changes, and common cheats during coding assessments.',
      link: '',
      image: placeholder,
      tech: ['ElectronJS', 'Javascript'],
      source: ''
    },
  ];

  return (
    <div className="mb-[200px]">
      <Heading thin="Pet" thick="Projects" />
      <p className="text-2xl font-thin">I keep on exploring. Some are just POCs.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#121212] text-black p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <div className='flex justify-between'>
              {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl text-white mb-2 hover:underline">{project.title}</h3>
              </a>
            ) : (
              <h3 className="text-xl text-white mb-2">{project.title}</h3>
            )}

              <div className='flex gap-5 text-2xl text-white'>
                {project.link && <a href={project.link}><FaEarthAmericas /></a>}
                {project.source && <a href={project.source}><FaGithub /></a>}
              </div>
            </div>

            <p className="text-gray-400 mb-4 font-light">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {!project.source && <span className="text-gray-400 italic">Private / Coming soon</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetProjects;
