import React from "react";
import OrderInfo from "./components/order-infos";
import { OrderItems } from "./components/order-items";
import OrderTotal from "./components/order-summary";

export const metadata = {
  title: "Commande en cours",
  description: "Détails des commandes en cours.",
};

// Exemple de données (remplace-les par tes données réelles)
const mockOrder = {
  id: "12345",
  client: "John Doe",
  address: "123 Rue de Paris",
  phone: "0123456789",
  paymentMode: "Carte bancaire",
  deliveryDate: "2025-02-15",
  orderDate: "2025-02-10",
  status: "En cours",
};

const mockItems = [
  { id: 1, name: "Produit A", quantity: 2, price: 50 },
  { id: 2, name: "Produit B", quantity: 1, price: 30 },
];

const Page = () => {
  return (
    <main className="w-full min-h-fit flex flex-col justify-start items-start rounded-3xl border border-primary p-8 gap-6 my-4 mr-4 drop-shadow-xl">
      {/* Header Section */}
      <div className="space-y-2 mb-6">
        <h1 className="text-4xl font-bold text-secondary">Détails de la commande</h1>
        <p className="text-grey">Consulter et gérer les informations de la commande.</p>
      </div>
      
      {/* Order Info Section */}
      <OrderInfo order={mockOrder} />
      
      {/* Order Items Section */}
      <OrderItems items={mockItems} />
      
      {/* Order Total Section */}
      <OrderTotal subtotal={80} deliveryFee={5} />
    </main>
  );
};

export default Page;
