import React from "react";

export const metadata = {
  title: "Alyce Dashboard | My Products",
  description: "View and manage your products.",
};

export default function ProductsPage() {
  return (
    <main className=" w-full min-h-fit flex flex-col justify-start rounded-3xl items-start border border-primary p-8 gap-6 my-4 mr-4 drop-shadow-xl ">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-secondary">Mon Profil</h1>
        <p className="text-grey">
          Bienvenue sur votre profil, vous pouvez mettre à jour vos informations
          personnelles ici.
        </p>
      </div>
    </main>
  );
}
