

import {useState } from 'react';
import { Link } from 'react-router-dom';

export default function Meal() {
 
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);



  const fetchData = async () => {
    try {
      
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json()
      console.log(data.meals);
      setMeals(data.meals || [])
      
    } catch (error) {
      console.log(error);
    }
  }

   

  return (
    <div className="meal-sec">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="search your food"
      />

      <button onClick={fetchData}>Search</button>

      {
        meals.length > 0 ?
          <div className="show-meal">
            {
              meals.map((meal) =>  
                <div key={meal.idMeal}>
                  <img src={meal.strMealThumb} />
                  <h2> {meal.strMeal} </h2>
                  <Link to={`/${meal.idMeal}`}>
                  <button>View More</button>
                  </Link>
                </div>
              )
            }
          </div> :
          <h2>No Meal found </h2> 
  }
    </div>
  );
}

