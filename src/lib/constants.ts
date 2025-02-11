import {
  Archive,
  FolderArchive,
  Settings,
  ShoppingBag,
  Store,
  Users2,
} from "lucide-react";

export const pageRoutes = [
  { title: "Gestion des produits", route: "/products", icon: Store },
  { title: "Suivi des commandes", route: "/orders", icon: ShoppingBag },
  { title: "Gestion des utilisateurs", route: "/users", icon: Users2 },
  { title: "Produits archivés", route: "/archive", icon: FolderArchive },
  { title: "Paramètres", route: "/settings", icon: Settings },
  
];
