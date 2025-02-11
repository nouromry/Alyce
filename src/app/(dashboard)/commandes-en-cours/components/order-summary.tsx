'use client';

import React from "react";

interface OrderTotalProps {
  subtotal: number;
  deliveryFee: number;
}

const OrderTotals: React.FC<OrderTotalProps> = ({ subtotal, deliveryFee }) => {
  const totalAmount = subtotal + deliveryFee;

  return (
    <div className="mt-6 flex flex-col justify-between items-end text-lg text-gray-700 ml-auto">
      <div>
        <p>
          Sous-total: <span className="font-semibold">{subtotal} DT</span>
        </p>
        <p>
          Frais de livraison: <span className="font-semibold">{deliveryFee} DT</span>
        </p>
      </div>
      <hr className="w-full border-t-2 border-gray-700 my-2" /> {/* Modifié ici */}
      <div>
        <p className="font-bold text-xl">Total: {totalAmount} DT</p>
      </div>
    </div>
  );
};

export default OrderTotals;
