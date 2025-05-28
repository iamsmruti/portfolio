import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='flex justify-center h-[90vh] items-start relative'>
      <div className="mt-[15vh]">
        <div className='justify-center flex mb-8'>
          <div className='px-2 py-1 border-green-400 border-dashed border-[1px] w-fit rounded-full flex items-center'>
            <div className='w-2 h-2 bg-green-400 rounded-full' />
            <p className='sm:text-sm ml-3 text-xs text-green-400'>Open for Collaborations</p>
          </div>
        </div>
        <p className='md:text-[64px] sm:text-[52px] text-[36px] text-center font-light'><span className='font-thin'>I'm</span> Smruti Ranjan</p>
        <p className='font-thin md:text-3xl sm:text-2xl text-center'>I Build for the Web</p>

        <div className='mt-[50px] flex justify-center gap-10 flex-wrap px-10'>
          <div className='bg-[#121212] w-fit px-4 py-2 rounded-lg'>
            <div className='flex'>
              <p className='text-4xl'>1+</p>
              <p className='text-sm font-thin ml-3'>Years of <br /> Experience</p>
            </div>
          </div>

          <div className='bg-white text-black rounded-lg flex justify-center items-center'>
            <p className='text-xl px-8 py-2'>Resume</p>
          </div>
        </div>
      </div>

      <div className="bottom-10 absolute flex flex-col items-center">
          <p className="text-sm font-thin mb-3">scroll</p>
          <div className="flex justify-center  flex-col items-center">
            <div className="bg-white w-[2px] h-[100px]" />
            <FaArrowDownLong />
          </div>
        </div>
    </div>
  )
}

export default Hero