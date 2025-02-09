import React from "react";

export const metadata = {
  title: "Alyce Dashboard | Archive",
  description: "View and manage archived Products. ",
};

export default function ArchivePage() {
  return (
    <main className=" w-full min-h-fit flex flex-col justify-start rounded-3xl items-start border border-primary p-8 gap-6 my-4 mr-4 drop-shadow-xl ">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-secondary">
          Liste des produits archivés
        </h1>
        <p className="text-grey">Consulter et gérer les produits archivés. </p>
      </div>
    </main>
  );
}
