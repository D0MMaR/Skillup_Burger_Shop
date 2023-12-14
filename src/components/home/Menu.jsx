import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  
  const addToCartHandler = (item) => {
    
    console.log(`Added ${item.title} to the cart!`);
  };

  return (
    <div>
      {/* Menu Card 1 */}
      <MenuCard
        itemNum={1}
        burgerSrc={burger1}
        price={200}
        title="Cheese Burger"
        handler={() => addToCartHandler({ itemNum: 1, title: "Cheese Burger", price: 200 })}
        delay={0.1}
      />

      {/* Menu Card 2 */}
      <MenuCard
        itemNum={2}
        burgerSrc={burger2}
        price={250}
        title="Double Cheese Burger"
        handler={() => addToCartHandler({ itemNum: 2, title: "Double Cheese Burger", price: 250 })}
        delay={0.2}
      />

      {/* Menu Card 3 */}
      <MenuCard
        itemNum={3}
        burgerSrc={burger3}
        price={180}
        title="Veggie Burger"
        handler={() => addToCartHandler({ itemNum: 3, title: "Veggie Burger", price: 180 })}
        delay={0.3}
      />

      
    </div>
  );
};

export default Menu;
