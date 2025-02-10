// src/app/(dashboard)/orders/page.tsx

export const metadata = {
  title: "Alyce Dashboard | Orders",
  description: "View and manage orders.",
};

import OrdersPageClient from "@/app/(dashboard)/orders/components/OrdersPageClient";

export default function OrdersPage() {
  return (
    <div>
      {/* Only the interactive part (client-side) will be in this component */}
      <OrdersPageClient />
    </div>
  );
}
