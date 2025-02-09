// src/app/(dashboard)/orders/components/OrdersPageClient.tsx
"use client";
import React, { useState } from "react";
import Header from "@/app/(dashboard)/orders/components/Header";
import OrdersTable from "@/app/(dashboard)/orders/components/OrdersTable";
import { orders } from "@/app/(dashboard)/orders/components/ordersData";

export default function OrdersPageClient() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.client.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus === "" || order.status === filterStatus)
  );

  return (
<main className="w-full mx-auto max-w-5xl flex flex-col justify-start  border border-primary p-8 gap-6 my-4 mf-8">
<Header search={search} setSearch={setSearch} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <h3 className="text-xl font-bold text-quinary">Suivi des commandes</h3>
      <OrdersTable filteredOrders={filteredOrders} />
    </main>
  );
}
