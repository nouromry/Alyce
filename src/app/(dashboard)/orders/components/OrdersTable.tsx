"use client";
import React from "react";
import { CheckCircle, Clock, Info, Eye } from "lucide-react";
import { useRouter } from "next/navigation"; // Importer useRouter de Next.js pour la navigation

interface Order {
  id: string;
  client: string;
  date: string;
  status: string;
  total: string;
}

interface OrdersTableProps {
  filteredOrders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ filteredOrders }) => {
  const router = useRouter();

  // Fonction qui gère la navigation en fonction de l'état de la commande
  const handleViewOrder = (order: Order) => {
    if (order.status === "Livrée") {
      router.push(`/commandes-livrees/${order.id}`); // Navigation vers la page "commandes-livrees"
    } else if (order.status === "En cours") {
      router.push(`/commandes-en-cours/${order.id}`); // Navigation vers la page "commandes-en-cours"
    }
  };

  return (
    <div className="w-full mt-4 rounded-lg overflow-hidden border border-quinary">
      <div className="overflow-x-auto"> {/* Ajouté pour la responsivité */}
        <table className="min-w-full mx-auto rounded-lg overflow-hidden border border-quinary">
          <thead>
            <tr className="bg-quaternary text-quinary overflow-hidden border border-quinary">
              <th className="p-4">Numéro de commande</th>
              <th className="p-4">Client (nom ou email)</th>
              <th className="p-4">Date</th>
              <th className="p-4">Statut</th>
              <th className="p-4">Montant total</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 text-center">
                <td className="p-2 text-[#DC87AA]">{order.id}</td>
                <td className="p-2 text-quinary">{order.client}</td>
                <td className="p-2 text-[#DC87AA]">{order.date}</td>
                <td className="p-2">
                  <span
                    className={`inline-flex items-center justify-center p-2 w-40 text-center rounded-full ${
                      order.status === "Livrée"
                        ? "bg-green-200 text-green-800"
                        : order.status === "En cours"
                        ? "bg-orange-200 text-orange-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {order.status}
                    <span className="ml-2 flex items-center">
                      {order.status === "Livrée" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : order.status === "En cours" ? (
                        <Clock className="h-5 w-5 text-orange-600" />
                      ) : (
                        <Info className="h-5 w-5 text-red-600" />
                      )}
                    </span>
                  </span>
                </td>
                <td className="p-2 text-[#DC87AA]">{order.total}</td>
                <td className="p-2 text-[#DC87AA]">
                  <button
                    className={`text-pink-500 ${
                      order.status === "Livrée" || order.status === "En cours"
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    }`}
                    onClick={() => handleViewOrder(order)} // Utiliser la fonction de navigation ici
                    disabled={order.status !== "Livrée" && order.status !== "En cours"}
                  >
                    <Eye className="h-6 w-6" /> {/* Pink eye icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
