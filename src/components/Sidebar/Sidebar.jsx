import Cook from '../Cook/Cook'
import Cooking from '../Cooking/Cooking'

export default function Sidebar({ addCook, addToCurrentCooking,
      addPrepare, calculateTotal, totalTime, totalCalories }) {
console.log(calculateTotal)
      return (
            <div className='w-4/12 max-h-fit border rounded-lg pt-5 pb-14 text-center font-fira'>
                  <Cook addCook={addCook}
                        addToCurrentCooking={addToCurrentCooking}
                        calculateTotal={calculateTotal}>
                  </Cook>
                  <Cooking addPrepare={addPrepare}
                        totalCalories={totalCalories}
                        totalTime={totalTime}>
                  </Cooking>
            </div>
      )
}
