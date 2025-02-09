"use client";

import React from "react";
interface OrderItemsProps {
  items: { id: number; name: string; quantity: number; price: number }[];
}

export const OrderItems: React.FC<OrderItemsProps> = ({ items }) =>  {
  return (
    <table className="mt-6 text-left border-collapse">
      <thead>
        <tr>
          <th className="border p-2 text-gray-500 w-[15]">N°</th>
          <th className="border p-2 text-gray-500 w-full">Article</th>
          <th className="border p-2 text-gray-500 w-full">Quantité</th>
          <th className="border p-2 text-gray-500 w-[50]">Prix</th>
          <th className="border p-2 text-gray-500 w-[50]">Montant total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className="border-b text-gray-800">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{item.name}</td>
            <td className="p-2 border text-center">{item.quantity}x unité(s)</td>     
            <td className="p-2 border">{item.price} DT</td>
            <td className="p-2 border font-semibold">
              {item.price * item.quantity} DT
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
