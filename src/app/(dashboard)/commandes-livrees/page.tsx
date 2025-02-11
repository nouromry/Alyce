import React from "react";
import OrderInfo from "./components/OrderInfo";
import { OrderItems } from "./components/OrderItemsTable";
import OrderTotal from "./components/OrderSummary";

// Exemple de données (remplace-les par tes données réelles)
const mockOrder = {
  id: "67890",
  client: "Jane Doe",
  address: "456 Avenue des Champs",
  phone: "0987654321",
  paymentMode: "PayPal",
  deliveryDate: "2025-02-08",
  orderDate: "2025-02-03",
  status: "Livrée",
};

const mockItems = [
  { id: 1, name: "Produit X", quantity: 1, price: 100 },
  { id: 2, name: "Produit Y", quantity: 3, price: 40 },
];

export const metadata = {
  title: "Commandes Livrées",
  description: "Détails des commandes livrées.",
};

const Page = () => {
  return (
    <main className="w-full min-h-fit flex flex-col justify-start items-start rounded-3xl border border-primary p-8 gap-6 my-4 mr-4 drop-shadow-xl ">
      {/* Header Section */}
      <div className="space-y-2 mb-6">
        <h1 className="text-4xl font-bold text-secondary">Détails de la commande</h1>
        <p className="text-grey">Consulter et gérer les informations de la commande.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-lg w-full mx-auto">
        {/* Order Info Section */}
        <OrderInfo order={mockOrder} />

        {/* Order Items Table */}
        <div className="mt-8">
          <OrderItems items={mockItems} />
        </div>

        {/* Order Total */}
        <div className="mt-8">
          <OrderTotal subtotal={220} deliveryFee={0} />
        </div>
      </div>
    </main>
  );
};

export default Page;
