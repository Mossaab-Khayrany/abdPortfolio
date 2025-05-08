"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5"; // Importing a copy icon from react-icons
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [copied, setCopied] = useState(""); // Manage copied state (Email/Phone)

  // Function to handle copying text
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied("Copied!");
      setTimeout(() => setCopied(""), 2000); // Clear 'Copied' after 2 seconds
    });
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Créons quelque chose d'incroyable ensemble
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Prêt à donner vie à votre prochain projet financier ?
                Connectons-nous et discutons de la façon dont je peux vous aider
                à atteindre vos objectifs.
              </p>
            </div>
            <div className="">
              <button
                onClick={() => setShowModal(true)} // Open the modal on click
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contactez-moi</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-20 sm:pb-60">
          <div className="bg-black/90 px-5 py-4 pt-3 rounded-xl w-[420px] max-w-full relative transform transition-all duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-white hover:text-green-400"
            >
              ✖
            </button>

            {/* EMAIL */}
            <div className="flex items-center gap-3 mt-4">
              <IoCopyOutline
                className="text-white cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("abdessamadkhayrany@gmail.com");
                  setCopied("email");
                  setTimeout(() => setCopied(""), 2000);
                }}
                size={20}
              />
              <p className="text-sm font-bold text-white hover:drop-shadow-glow transition duration-300 cursor-pointer">
                Email: abdessamadkhayrany@gmail.com
              </p>
              {copied === "email" && (
                <span className="text-green-400 text-xs ml-2">Copied!</span>
              )}
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 mt-4">
              <IoCopyOutline
                className="text-white cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("+33 6 46 60 97 15");
                  setCopied("phone");
                  setTimeout(() => setCopied(""), 2000);
                }}
                size={20}
              />
              <p className="text-sm font-bold text-white hover:drop-shadow-glow transition duration-300 cursor-pointer">
                Phone: +33 6 46 60 97 15
              </p>
              {copied === "phone" && (
                <span className="text-green-400 text-xs ml-2">Copied!</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
