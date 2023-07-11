/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PriceTable from "../PriceTable/PriceTable";

const Price = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("text.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1 className="bg-gray-900 text-red-600 text-center text-7xl p-9 mt-5 font-bold capitalize">
        this is my Gym price list
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {data.map((data) => (
          <PriceTable key={data.id} priceData={data}></PriceTable>
        ))}
      </div>
    </div>
  );
};

export default Price;
