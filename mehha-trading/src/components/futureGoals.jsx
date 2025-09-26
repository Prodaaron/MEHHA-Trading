import React from 'react';
import './futureGoals.css';

const futureGoal = [
    {
        id: 1,
        name: 'Expand Our Office Globally',
        image: './global.png',
        description: 'To be a step closer to every client'
    },

    {
        id: 2,
        name: 'Join the Coffee Party',
        image: './coffee-cup-coffee-beans.png',
        description: "Expand into Ethiopia's Speciality Sector."
    },

    {
        id: 3,
        name: 'Agricultural Innovation',
        image: './agriculture.png',
        description: "Work on Improving Ethiopia's Agricultural Sector to Provide Better Products for Export"
    }
]

const futureGoals = () => {
  return (
    <div className='futureGoals'>
      <section className="products-grid">
                {futureGoal.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                ))}
              </section>
    </div>
  )
}

export default futureGoals;
