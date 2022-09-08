import React from 'react';

const Car = ({ carCompany, carModel, carYear,car_model, car_model_title, car_OEM, date, shop_price, warehouse, link }) => {

    return (
        <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
            {/*<div className="italic">Производитель: {carCompany}</div>*/}
            {/*<div className="italic">Модель: {carModel}</div>*/}
            {/*<div className="italic">Год: {carYear}</div>*/}
            <div >{car_model}</div>
            <div >{car_model_title}</div>
            <div >{car_OEM}</div>
            <div >{date}</div>
            <div >{shop_price}</div>
            <div >{warehouse}</div>
            <div >
                <a href={link}>{link}</a>
            </div>
        </div>
    );
}

export default Car;
