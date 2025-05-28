import Heading from '../../../components/Heading'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitSquare, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRubyonrails, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: RiTailwindCssFill },
    { name: 'Redux', icon: TbBrandRedux },
  ]

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Rails', icon: SiRubyonrails },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql }
  ]

  const cloudDevOpsSkills = [
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker },
    { name: 'Git', icon: FaGitSquare },
    { name: 'Figma', icon: FaFigma },
    { name: 'Postman', icon: SiPostman },
  ]

  const SkillCategory = ({ title, skills }: { title: string, skills: any}) => (
    <div className='bg-[#121212] rounded-xl p-3 sm:p-4 lg:p-6 w-full'>
      {/* Mobile: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium whitespace-nowrap min-w-fit">
          {title}
        </h2>
        
        {/* Skills grid - responsive */}
        <div className="grid grid-cols-3 xs:grid-cols-5 sm:flex sm:flex-wrap gap-2 sm:gap-3 lg:gap-4 w-full">
          {skills.map((skill: any, index: number) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center border-[#222222] border rounded-lg 
                         p-2 sm:p-3 lg:p-4 xl:p-5 
                         hover:border-[#333333] hover:bg-[#1a1a1a] transition-colors duration-200
                         group relative"
            >
              <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                <skill.icon />
              </div>
              
              {/* Tooltip for skill name on hover (hidden on mobile) */}
              <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                             bg-[#222222] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                             transition-opacity duration-200 whitespace-nowrap z-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="mb-[150px] sm:mb-[200px] lg:mb-[300px] px-4 sm:px-6 lg:px-8">
      <Heading thin="I'm" thick="Skilled" />
      <p className="text-lg sm:text-xl lg:text-2xl font-thin mb-8 sm:mb-10 lg:mb-12">
        These days, I work with whatever tech comes to me.
      </p>

      <div className='space-y-4 sm:space-y-5 lg:space-y-6 max-w-7xl'>
        <SkillCategory 
          title="Frontend Skills" 
          skills={frontendSkills} 
        />
        
        <SkillCategory 
          title="Backend Skills" 
          skills={backendSkills} 
        />
        
        <SkillCategory 
          title="Cloud & Tools" 
          skills={cloudDevOpsSkills} 
        />
      </div>
    </div>
  ) 
}

export default Skills