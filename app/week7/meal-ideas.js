"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try{
        const response = await fetch(url);
        const data = await response.json();

        return data.meals.map((meal) => meal.strMeal);
    } catch (error) {
        return [];
    }
}

export default function MealIdeas( {ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (meals) {
        return (
            <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Meal Ideas for {ingredient}</h1>
            {meals && meals.length > 0 ? (
              <ul className="flex flex-col items-center">
                {meals.map((meal) => (
                  <li key={meal.idMeal}>{meal}</li>
                ))}
              </ul>
            ) : (
                <p>No meals found</p>
            )}
          </div>
        );
    }

    return(
        <div>
            <div className="flex justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        </div>
    );

}