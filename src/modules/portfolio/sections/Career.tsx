import Heading from '../../../components/Heading'

const Career = () => {
  return (
    <div className='mt-[10vh] mb-[20vh]'>
      <Heading
        thin="I'm"
        thick="Currently"
      />

      <div className='grid text-xl gap-5 font-light'>
        <p className='bg-[#121212] p-5 rounded-lg'><span className='mr-4 text-2xl'>🚀</span> Working full-time with eLitmus Evaluation as a Full Stack Developer in Bengaluru.</p>
        <p className='bg-[#121212] p-5 rounded-lg'><span className='mr-4 text-2xl'>🚀</span> Exploring how AI is transforming assessments, exams, and skill evaluations</p>
      </div>
    </div>
  )
}

export default Career