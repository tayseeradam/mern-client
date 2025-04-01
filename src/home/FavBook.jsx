import FavBookImg from "../assets/favoritebook.jpg"
import {Link} from "react-router-dom"

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
            Find Your Favorite <span className='text-sky-700 font-serif'>Book Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6 font-serif' >
            A book seller is someone who buys and sells books, 
            either through physical stores or 
            online platforms. They play a key 
            role in connecting readers with a v
            ast array of literature, offering everything
              passion for books and reading, </p>
                 {/* states */}
                 <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold font-serif'>800+</h3>
                        <p className='text-base font-serif'>Book listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold font-serif'>550+</h3>
                        <p className='text-base font-serif'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold font-serif'>1200+</h3>
                        <p className='text-base font-serif'>PDF Downloads</p>
                    </div>
                 </div>

                <Link to="/shop" className='mt-12 block'><button className='bg-sky-700 text-white font-semibold
                px-5 py-2 rounded hover:bg-black transition-all duration-300 font-serif'>
                    Explore More</button></Link>
        </div>

    </div>
  )
}

export default FavBook