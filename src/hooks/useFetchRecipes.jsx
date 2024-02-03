import { useEffect, useState } from 'react';
export function useFetchRecipes(){
  const [recipes, SetRecipes] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    async function fetRecipes(){
      try {
        const response = await fetch('https://restapi.fr/api/recipes')
        if (response.ok) {
        const newRecipes = await response.json();
        SetRecipes(Array.isArray(newRecipes) ? newRecipes : [newRecipes]);
      }else {
        SetError('Erreur');
      }
      } catch (error) {
        SetError('Erreur');
      }finally{
        SetIsLoading(false);
      }
    }
    fetRecipes();
  },[])
  return {
    recipes,
    isLoading,
    error
  }
}