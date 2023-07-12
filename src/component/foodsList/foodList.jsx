import React from 'react';
import JsonData from '../../Json-file/food.json';
import FootCard from '../foodcard/foodcard';

const FoodList = () => {
  const data = JsonData.section;

  return (
    <div>
    <p className="text-4xl font-large ml-6 pt-4">Best Food in Kolkata</p>
    <div className="flex flex-wrap justify-between mt-10"> 
      {data.map((item, index) => (
        <div key={index} className="w-1/3 p-4"> 
          <FootCard
            name={item.info.name}
            src={item.info.image.url}
            text={item.info.cuisine}
            rating={item.info.rating.aggregate_rating}
            quantity={item.info.costText.text}
            time={item.order.deliveryTime}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default FoodList;
