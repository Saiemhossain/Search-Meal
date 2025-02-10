/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function MealDetails() {

  const { idMeal } = useParams();
  console.log(idMeal);

  const [details, setDetails] = useState();


  const getDetails = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data =await  res.json()
      console.log(data.meals[0]);
      setDetails(data.meals[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetails()
  }, [])


  return (
    <div>
      {details ? (
        <div className='meal-details'>
          <img src={details.strMealThumb} />
          <h2> {details.strMeal} </h2>
        </div> 
      ) : (
        <h2>no details found</h2>
      )}
    </div>
  );
}

