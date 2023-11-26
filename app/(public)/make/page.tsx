"use client";
import { useState } from "react";
import MakeBurger from "./components/burger";
import { MakeCart } from "./components/cart";
import MakeIngredients from "./components/ingredients";
import MakeTitle from "./components/title";
import { Ingredient } from "./interfaces/ingredient.type";

import { ingredients as initialState } from "./db/ingredientsDB";
import { BurgerItem } from "./interfaces/burgerItem.type";

const MakePage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialState);
  const [customBurger, setCustomBurger] = useState<BurgerItem[]>([]);
  const randomPlacement: Record<string, string> = {
    1: 'translate-x-5 -rotate-6',
    2: 'translate-x-10 -rotate-12',
    3: 'translate-x-16 -rotate-12',
    4: 'translate-x-30 -rotate-12',
    5: 'translate-x-48 -rotate-6',
  }

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
    addToBurger(id);

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

  const addToBurger = (id: string) => {
    setCustomBurger((prev) => {
      const item = ingredients.find((ingredient) => ingredient.id === id)
      if (item) {
        return [...prev, {
          uniqueId: Date.now(),
          id: item.id,
          image: item.image,
          alt: item.alt,
          small: item.small,
          placement: item.rotate ? randomPlacement[Math.floor(Math.random() * 5) + 1] : 'transform-none'
        }];
      }
      return prev;
    });
  };

  const removeBurger = (id: string) => {
    setCustomBurger((prev) => {
      let finded = false
      prev.sort((a, b) => {
        return b.uniqueId - a.uniqueId;
      })
      prev.map((item, index) => {
        if (finded) {
          return true
        }
        if (item.id === id) {
          finded = true
          prev.splice(index, 1)
        }
      })
      return prev.sort((a, b) => {
        return a.uniqueId - b.uniqueId;
      })

    })


  };

  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <MakeTitle />
        <MakeBurger burger={customBurger} />
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
