import React from 'react';



//deconstrucure and pass down props of api
const Recipe=({title,calories,image,ingredients})=>{

  let cals=Math.floor(calories);
  return (

  <div className="recipe">
  
    
      <h1 className="title">{title}</h1>
      <p>{cals} Calories</p>
      
      <ol className="list" >
        {ingredients.map(ingredient=>(
          <li >{ingredient.text}</li>
        ))}
      </ol>
      
    <div className="imgwrap">
      <img src={image} alt=""/>
    </div>
         
  </div>
  )
}

export default Recipe;