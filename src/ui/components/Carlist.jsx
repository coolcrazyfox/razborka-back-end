import React from 'react';
import Car from './Car';

const Carlist = ({ carList, searchTerm }) => {
    return (
        <div className="container-lg mx-auto grid-cols-3">
            {carList.map((car, index) => {
                return (
                    <Car
                        key={index}
                        car_model={car.car_model}
                        car_model_title={car.car_model_title}
                        car_OEM={car.car_OEM}
                        date={car.date}
                        shop_price={car.shop_price}
                        warehouse={car.warehouse}
                        link={car.link}
                    />
                )
            })}
        </div>
    );

}

export default Carlist;
