
export default function Card({ card, addToCook }) {
      const { name, image, calories, description, preparing_time, ingredients } = card;
      return (
            <div className='border rounded-lg p-4 font-fira'>
                  <img src={image} alt="" className='h-72 object-cover w-full rounded-lg' />
                  <div className='border-b pb-5 pt-2'>
                        <h2 className='font-bold text-xl my-3 font-lexend'>{name}</h2>
                        <p className='font-semibold text-gray-700'>{description}</p>
                  </div>
                  <div className='border-b pb-5'>
                        <h4 className='font-bold text-xl my-4 font-lexend'>Ingredients: <span>{ingredients.length}</span></h4>
                        <ul className='list-disc list-inside pl-2 text-gray-500 font-semibold'>
                              {
                                    ingredients.map((item, i) => <li key={i}>{item}</li>)
                              }
                        </ul>
                  </div>
                  <div className='flex items-center gap-4 py-4 font-semibold text-gray-500'>
                        <div className='flex items-center gap-2'>
                              <i className="fa-regular fa-clock"></i>
                              <span>{preparing_time} minutes</span>
                        </div>
                        <div className='flex items-center gap-2'>
                              <i className="fa-solid fa-fire-flame-curved"></i>
                              <span>{calories} calories</span>
                        </div>
                  </div>
                  <div className=''>
                        <button onClick={() => addToCook(card)} className='bg-green-500 text-slate-50 font-lexend font-bold rounded-2xl py-2 px-4'>Want to Cook</button>
                  </div>
            </div>
      )
}
