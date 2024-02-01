import React, { useEffect, useState } from 'react';
function App() {
  const [recipes, SetRecipes] = useState([]);
  const [isloading, SetIsLoading] = useState(true);
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
  })


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}>
        {isloading ? (
          <p>Chagement ...</p>
        ): (
          <ul>
            {recipes.map((r) => (
              <li key={r._id}>{r.title}</li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default App;
