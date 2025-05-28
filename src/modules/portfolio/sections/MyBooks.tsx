import Heading from "../../../components/Heading"
import Book from "../../../assets/book.png"

const MyBooks = () => {
  return (
    <div className='mt-[10vh] mb-[20vh]'>
      <Heading
        thin="My"
        thick="Books"
      />

      <p className="text-2xl font-thin">I am trying to put my thoughts, Still Learning.</p>

      <div className="flex flex-wrap gap-5 mt-10">
        <div className="w-[300px]">
          <img src={Book} className="rounded-lg" />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold">The AI Toolkit for Modern Developers</h3>
          <p className="text-gray-400 mt-2">A practical field guide for thriving in the age of AI. Learn how to actually build with tools like GPT-4, Claude, and open-source models — not just talk about them. Gather the Mindset required to leverage AI.</p>
          <p className="text-gray-400 text-xs mt-4">Published: May 2025</p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm">
            <a className="bg-white text-black px-5 py-2 rounded-lg">Buy on Amazon</a>
            <a className="bg-white text-black px-5 py-2 rounded-lg">Buy on Gumroad</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBooks