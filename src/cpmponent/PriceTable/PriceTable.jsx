/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//  eslint-disable-next-line react/prop-types
import React from 'react';
import Feature from '../Feature/Feature';

const PriceTable = ({priceData}) => {
    return (
        <div>
            <div className="m-5 ">
                <span className='font-extrabold text-4xl'> {priceData.price} </span>
                <span className='font-mono text-2xl'>/mon</span>
            </div>
            <h1 className='text-6xl font-light'>{priceData.name}</h1>
            <h3 className='text-3xl m-6'>feature</h3>
            {
                priceData.features.map((data , i ) => <Feature key={i} FeatureData={data}></Feature>)
            }
        </div>
    );
};

export default PriceTable;