"use client";

import { useState } from "react";
import MakeBurger from "./components/burger";
import { MakeCart } from "./components/cart";
import MakeIngredients from "./components/ingredients";
import MakeTitle from "./components/title";
import { Ingredient } from "./interfaces/ingredient.type";

import { ingredients as initialState } from "./db/ingredientsDB";

const MakePage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialState);
  const [burger, setBurger] = useState<Ingredient[]>([]);

  const addIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );

    addBurger(id);
  };

  const removeIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
    removeBurger(id);
  };

  const addBurger = (id: string) => {
    setBurger((prev) => {
      const item = ingredients.find((ingredient) => ingredient.id === id);
      if (item) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeBurger = (id: string) => {
    setBurger((prev) => {
      return prev.filter((item, index) => item.id !== id);
    });
  };

  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <MakeTitle />
        <MakeBurger burger={ingredients} />
        <MakeCart ingredients={ingredients} />
      </div>
      <MakeIngredients
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </>
  );
};
export default MakePage;
