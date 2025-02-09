"use client"; 
import React from "react";
import { Bell, User, Search, Filter } from "lucide-react";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch, filterStatus, setFilterStatus }) => {
  return (
    <div className="flex justify-between items-center w-full mb-4">
      {/* Filters & Search */}
      <div className="flex items-center gap-4 w-full max-w-[800px]">
        {/* Filter Select with Icon */}
        <div className="relative w-60">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <select
            className="pl-10 p-3 rounded-md bg-white w-full"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Filtrer par statut</option>
            <option value="Livrée">Livrée</option>
            <option value="En cours">En cours</option>
            <option value="Annulée">Annulée</option>
          </select>
        </div>

        {/* Search Input with Icon */}
        <div className="relative w-[430px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher le Client..."
            className="pl-10 p-3 border rounded-md w-full bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Notifications & Profile */}
      <div className="flex items-center gap-6 min-w-[220px]">
  <Bell className="h-6 w-6 text-gray-700 cursor-pointer" />
  <div className="flex items-center gap-3 cursor-pointer min-w-[160px]">
    <User className="h-6 w-6 text-gray-700" />
    <span className="text-gray-700 whitespace-nowrap">Sarra Chtioui</span>
  </div>
      </div>
    </div>
  );
};

export default Header;
