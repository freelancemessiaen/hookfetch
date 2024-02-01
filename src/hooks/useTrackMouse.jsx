import { useEffect, useState } from "react";

export function useTrackMouse(){
  const [x, setX] = useState(0)
  const [y, setY] = useState(0);
// Utilisation de useEffect pour effectuer une action après le rendu initial
useEffect(() => {
  // Définition d'une fonction de mise à jour pour gérer les événements de souris
  function update(e) {
    // Affichage des coordonnées de la souris dans la console
    console.log(e);
    // Mise à jour de l'État pour stocker la position X de la souris
    setX(e.pageX);
    // Mise à jour de l'État pour stocker la position Y de la souris
    setY(e.pageY);
  }
  // Ajout d'un écouteur d'événements pour détecter le mouvement de la souris
  window.addEventListener('mousemove', update);
  // Retrait de l'écouteur d'événements lors du démontage du composant
  return () => window.removeEventListener('mousemove', update);
}, []); // Utilisation d'un tableau vide 
       // pour s'assurer que l'effet est exécuté une seule fois après le rendu initial
    
       return [x, y];
}