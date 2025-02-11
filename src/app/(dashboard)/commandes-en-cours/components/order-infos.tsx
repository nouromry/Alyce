'use client';

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Using react-icons for the edit icon
import { Clock } from 'lucide-react';
import { jsPDF } from 'jspdf'; // Import jsPDF for generating PDFs
import { Download, CheckCircle } from 'lucide-react';

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

const OrderInfos: React.FC<OrderInfoProps> = ({ order }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAddress, setUpdatedAddress] = useState(order.address);
  const [updatedPhone, setUpdatedPhone] = useState(order.phone);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Address:', updatedAddress);
    console.log('Updated Phone:', updatedPhone);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();
    doc.text(`Commande N°: ${order.id}`, 20, 10);
    doc.text(`Client: ${order.client}`, 20, 20);
    doc.text(`Adresse: ${order.address}`, 20, 30);
    doc.text(`Téléphone: ${order.phone}`, 20, 40);
    doc.text(`Mode de paiement: ${order.paymentMode}`, 20, 50);
    doc.text(`Date de livraison: ${order.deliveryDate}`, 20, 60);
    doc.text(`Date de la commande: ${order.orderDate}`, 20, 70);
    doc.text(`Status: ${order.status}`, 20, 80);
    doc.save(`facture_${order.id}.pdf`);
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

      {/* Status */}
      <div className="flex gap-2 mt-2">
        <p className="text-gray-500">Status:</p>
        <span
          className={`inline-flex gap-2 items-center justify-center p-2 w-40 text-center rounded-full ${
            order.status === 'Livrée'
              ? 'bg-green-200 text-green-800'
              : order.status === 'En cours'
              ? 'bg-orange-200 text-orange-800'
              : 'bg-red-200 text-red-800'
          }`}
        >
          {order.status}
          {order.status === 'Livrée' ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : order.status === 'En cours' ? (
            <Clock className="h-5 w-5 text-orange-600" />
          ) : (
            <Clock className="h-5 w-5 text-red-600" />
          )}
        </span>
      </div>

      {/* Order Dates & Payment */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-4 gap-6">
        {/* Order Details (Left Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-400">Date de livraison</p>
            <input
              type="text"
              value={order.deliveryDate}
              readOnly
              className="text-lg font-semibold text-[#8B827F] bg-gray-50 border-none w-full sm:w-[253px] h-[44px]"
            />
            <p className="font-semibold text-gray-400 mt-4">Date de la commande</p>
            <input
              type="text"
              value={order.orderDate}
              readOnly
              className="text-lg font-semibold text-[#333843] bg-gray-50 border-none w-full sm:w-[253px] h-[44px]"
            />
          </div>

          {/* Client Information */}
          <div className="p-4 bg-gray-50 rounded-lg w-full">
            <p className="text-lg font-semibold">{order.client}</p>
            <p className="text-gray-500">{updatedAddress}</p>
            <p className="text-gray-500">{updatedPhone}</p>
            <p className="font-semibold text-gray-500">Mode de paiement :</p>
            <p className="text-lg text-black">{order.paymentMode}</p>

            {/* Edit Icon */}
            <div className="flex justify-between items-center mt-2 w-full">
              <FaEdit
                className="cursor-pointer text-pink-600 text-2xl"
                onClick={handleEditClick}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-4 w-full sm:w-1/3">
          <button
            className="bg-pink-900 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-950 w-full sm:w-[253px] h-[44px]"
            onClick={handleDownloadInvoice}
          >
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
                  className="w-full sm:w-[253px] h-[44px] p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Téléphone:</label>
                <input
                  type="text"
                  value={updatedPhone}
                  onChange={(e) => setUpdatedPhone(e.target.value)}
                  className="w-full sm:w-[253px] h-[44px] p-2 border rounded-md"
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

export default OrderInfos;
