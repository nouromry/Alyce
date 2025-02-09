"use client";

import React from "react";
import { useParams } from "next/navigation";
import OrderInfo from "@/app/(dashboard)/orders/commande-en-cours/order-info";
import { OrderItems } from "@/app/(dashboard)/orders/commande-en-cours/order-items";
import OrderTotal from "@/app/(dashboard)/orders/commande-en-cours/order-summary";

const OrderDetails: React.FC = () => {
  const { id } = useParams(); // Récupère l'ID de la commande depuis l'URL
    // Assurer que id est une chaîne de caractères (string)
    const orderId = Array.isArray(id) ? id[0] : id;

  // Simuler les données de la commande
  const order = {
    id: orderId || "#CMD-6596",
    client: "Chaima Dabbou",
    address: "s3, Et soja, p.borj louzir, ariana 2072",
    phone: "+216 92601203",
    paymentMode: "Main à main",
    deliveryDate: "JJ/MM/AAAA",
    orderDate: "07/01/2025",
    status : "En cours",
    items: [
      { id: 1, name: "Bougie parfumée fleurs de lys", quantity: 1, price: 20 },
      { id: 2, name: "Air freshner", quantity: 1, price: 20 },
      { id: 3, name: "Bougie parfumée lavande", quantity: 1, price: 20 },
    ],
    deliveryFee: 7,
  };

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 w-full">
      {/* Passer l'objet `order` au lieu de `orderId` */}
      <OrderInfo order={order} />
      <OrderItems items={order.items} />
      <OrderTotal subtotal={subtotal} deliveryFee={order.deliveryFee} />
    </div>
  );
};

export default OrderDetails;