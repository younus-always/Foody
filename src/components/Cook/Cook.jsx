
export default function Cook({ addCook, addToCurrentCooking, calculateTotal }) {
      return (
            <div>
                  <h2 className='text-xl font-bold border-b w-11/12 mx-auto pb-3 font-lexend'>Want to cook: <span>{addCook.length}</span></h2>
                  <div className='grid grid-cols-5 font-semibold text-gray-600 py-4'>
                        <div className='col-span-2'>Name</div>
                        <div className='col-span-1 text-left'>Time</div>
                        <div className='col-span-2 text-left'>Calories</div>
                  </div>
                  <div className='space-y-2'>
                        {addCook.map((cook, i) => {
                              return <div key={cook.id} className='grid grid-cols-8 gap-1 bg-gray-200 py-3'>
                                    <p className='col-span-1'>{i + 1}</p>
                                    <h4 className='col-span-2'>{cook.name}</h4>
                                    <p className='col-span-1'>{cook.preparing_time} </p>
                                    <p className='col-span-2'>{cook.calories} </p>
                                    <button onClick={() => {
                                          addToCurrentCooking(cook.id)
                                          calculateTotal(cook.preparing_time, cook.calories)
                                    }} className='col-span-2 rounded-xl bg-green-400 font-bold text-sm w-24 h-10'>Preparing</button>
                              </div>
                        })}
                  </div>
            </div >
      )
}
