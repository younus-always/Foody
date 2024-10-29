import React from 'react'
import Card from '../Card/Card'

export default function Cards({ cards, addToCook }) {
      return (
            <div className='w-8/12 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {cards.map((card) =>
                        <Card key={card.id} card={card}
                              addToCook={addToCook}></Card>)}
            </div>
      )
}
