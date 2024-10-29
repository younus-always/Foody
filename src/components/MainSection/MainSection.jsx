import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import Sidebar from '../Sidebar/Sidebar'
import { Flip, toast, Zoom } from 'react-toastify';


export default function MainSection() {
      const [cards, setCards] = useState([]);
      const [addCook, setAddCook] = useState([]);
      const [addPrepare, setAddPrepare] = useState([]);

      useEffect(() => {
            fetch('./Foody.json')
                  .then((res) => res.json())
                  .then((data) => setCards(data))
      }, []);

      // Add Want to Cook...
      const addToCook = (card) => {
            const validatedAdd = addCook.find((add) => add.id == card.id);
            if (validatedAdd) {
                  toast.warn("This item is already preparing...");
                  return
            }
            setAddCook([...addCook, card])
            toast.success(`${card.name} add to preparing`, {
                  transition: Flip,
                  position: 'top-center'
            })
      }

      // Add to Curren Cooking...
      const addToCurrentCooking = (id) => {
            const removeCook = addCook.find(cook => cook.id === id);
            const updateCook = addCook.filter(cook => cook.id !== id);
            setAddCook(updateCook)
            setAddPrepare([...addPrepare, removeCook])
            toast.info(`Now your food (${removeCook.name}) is ready to cooking`,{
                  position: 'top-left',
                  transition: Zoom
            })
      }

      // Sum of Time and Calories...
      const [totalTime, setTotalTime] = useState(0);
      const [totalCalories, setTotalCalories] = useState(0);

      const calculateTotal = (time, calorie) => {
            setTotalTime(totalTime + time);
            setTotalCalories(totalCalories + calorie);
      }


      return (
            <div className='w-11/12 md:w-10/12 mx-auto py-10'>
                  <div className='text-center max-w-3xl mx-auto'>
                        <h2 className='font-semibold text-5xl my-5 font-lexend'>Our Recipes</h2>
                        <p className='font-semibold font-fira'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                  </div>
                  <div className='flex justify-between gap-4 pt-7'>
                        <Cards cards={cards} addToCook={addToCook}></Cards>
                        <Sidebar addCook={addCook}
                              addToCurrentCooking={addToCurrentCooking}
                              addPrepare={addPrepare}
                              calculateTotal={calculateTotal}
                              totalTime={totalTime}
                              totalCalories={totalCalories} >
                        </Sidebar>
                  </div>
            </div>
      )
}
