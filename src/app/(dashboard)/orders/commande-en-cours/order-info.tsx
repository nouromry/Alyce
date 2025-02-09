"use client";
import { Download } from "lucide-react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Using react-icons for the edit icon
import { CheckCircle, Clock, Info } from "lucide-react";
interface OrderInfoProps {
  order: {
    id: string;
    client: string;
    address: string;
    phone: string;
    paymentMode: string;
    deliveryDate: string;
    orderDate: string;
    status: string;
  };
}

const OrderInfo: React.FC<OrderInfoProps> = ({ order }) => {
  // State for managing the form input and visibility
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAddress, setUpdatedAddress] = useState(order.address);
  const [updatedPhone, setUpdatedPhone] = useState(order.phone);

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would usually send the updated info to the backend
    console.log("Updated Address:", updatedAddress);
    console.log("Updated Phone:", updatedPhone);
    setIsEditing(false); // Close the form after submission
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="p-6 bg-white rounded-lg w-full">
      {/* Header */}
      <div className="bg-quaternary p-4 rounded-t-lg flex justify-between items-center border border-primary">
        <h2 className="text-xl font-semibold text-pink-700">
          Commande N°: <span className="text-pink-900 font-bold">{order.id}</span>
        </h2>
        <button className="text-gray-600 text-2xl font-bold">&times;</button>
      </div>

      <div className="flex gap-6 mt-2 ">
        <p className="text-gray-500">Status:</p>
        <span className="inline-flex font-bold gap-2 items-center justify-center p-2 w-40 text-center rounded-full bg-orange-200 text-orange-800">
          {order.status} <Clock className="h-5 w-5 text-orange-600 " />
        </span>
      </div>

      {/* Order Dates & Payment */}
      <div className="flex justify-between items-start mt-4">
        {/* Order Details (Left Side) */}
        <div className="grid grid-cols-2 gap-1 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-4 text-sm ">
            <div className="p-4 bg-gray-50 rounded-lg ">
              <p className="font-semibold text-gray-400">Date de livraison</p>
              <p className="text-lg text-black">{order.deliveryDate}</p>
              <p className="font-semibold text-gray-400">Date de la commande</p>
              <p className="text-lg text-black">{order.orderDate}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold">{order.client}</p>
              <p className=" text-gray-500">{order.address}</p>
              <p className=" text-gray-500">{order.phone}</p>
              <p className="font-semibold text-gray-500">Mode de paiement :</p>
              <p className=" text-gray-400">{order.paymentMode}</p>

              {/* Modify Icon for Address and Phone */}
              <div className="flex justify-between items-center mt-2">
                <FaEdit
                  className="cursor-pointer text-pink-600 text-2xl" // Adjust the size to text-3xl or any size you prefer
                   onClick={handleEditClick}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons (Right Side) */}
        <div className="flex flex-col space-y-4 w-1/3 mr-6">
  <button className="bg-pink-900 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-950">
    <Download className="h-5 w-5" /> {/* Download icon */}
    Télécharger la facture
  </button>
</div>
      </div>

      {/* Modal for editing address and phone */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              Modifier les informations
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Adresse:</label>
                <input
                  type="text"
                  value={updatedAddress}
                  onChange={(e) => setUpdatedAddress(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Téléphone:</label>
                <input
                  type="text"
                  value={updatedPhone}
                  onChange={(e) => setUpdatedPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-pink-700 text-white py-2 px-4 rounded-lg"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfo;
