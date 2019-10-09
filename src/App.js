import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe'

const App=()=>{
  
  const APP_ID='9d1aefac';
  const APP_KEY='92929861a17dd69feaaccb4ae8a54981';

  //initialize our hooks
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chicken') //use to store search to avoid unnessesary calls everytime search is updated

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    setRecipes(data.hits);// set the recipes in this state as array

  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)  //set the query to finsihed updated input value
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search!
        </button>
      </form>
      <div className="recipes">
      
      
      {recipes.map(recipe=>( // map through the recipes stored initially from the api
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
