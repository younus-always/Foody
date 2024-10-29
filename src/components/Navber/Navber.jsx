
export default function Navber() {
      return (
            <div className='w-11/12 md:w-10/12 mx-auto flex items-center justify-between font-lexend py-5'>
                  <h3 className='font-bold text-3xl'>Foody Calory</h3>
                  <ul className='flex items-center gap-4 font-semibold'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipe</a></li>
                        <li><a href="#">About</a></li>
                  </ul>
                  <div className='rounded-lg bg-gray-200 py-2 px-4 flex items-center gap-3'>
                        <span>
                              <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="text" name="search" placeholder='Search' className='bg-transparent focus:outline-none' />
                  </div>
                  <button className='w-8 h-8 rounded-full bg-green-500'>
                        <i className="fa-regular fa-circle-user text-xl"></i>
                  </button>
            </div>
      )
}
