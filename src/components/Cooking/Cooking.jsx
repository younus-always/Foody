
export default function Cooking({ addPrepare, totalTime, totalCalories }) {

      return (
            <div className='mt-3'>
                  <h2 className='font-bold text-xl border-b w-11/12 mx-auto pb-3 font-lexend'>Currently cooking: {addPrepare.length}</h2>
                  <div className='grid grid-cols-5 font-semibold text-gray-600 py-4'>
                        <div className='col-span-2 ml-16'>Name</div>
                        <div className='col-span-1 ml-16'>Time</div>
                        <div className='col-span-2 ml-16'>Calories</div>
                  </div>




                  <div className='space-y-2'>
                        {addPrepare.map((prepare, i) => {
                              return <div key={i} className='bg-gray-200 py-3 grid grid-cols-5'>
                                    <p className='col-span-1'>{i + 1}</p>
                                    <h3 className='col-span-2'>{prepare.name}</h3>
                                    <p>{prepare.preparing_time}</p>
                                    <p>{prepare.calories}</p>
                              </div>
                        })}
                  </div>

                  <div className='flex items-center gap-2 w-full px-3 mt-3'>
                        <div className='w-full flex items-center'>
                              <p>Total Time = {totalTime} Minutes</p>
                        </div>
                        <div className='w-full flex items-center'>
                              <p>Total Calories = {totalCalories} Calories</p>
                        </div>
                  </div>

            </div>
      )
}
