// src/app/(dashboard)/orders/page.tsx
import React from "react";
import OrdersPageClient from "@/app/(dashboard)/orders/components/OrdersPageClient"; // Importation du composant qui contient Header, OrdersTable, et la logique de filtrage

export const metadata = {
  title: "Alyce Dashboard | Orders",
  description: "View and manage orders.",
};

export default function OrdersPage() {
  return (
    <main className="w-full min-h-fit flex flex-col justify-start rounded-3xl items-start border border-primary p-8 gap-6 my-4 mr-4 drop-shadow-xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-secondary">Liste des commandes</h1>
        <p className="text-grey">Consulter et gérer les commandes.</p>
      </div>
      
      {/* Appel du composant OrdersPageClient */}
      <OrdersPageClient />
    </main>
  );
}
