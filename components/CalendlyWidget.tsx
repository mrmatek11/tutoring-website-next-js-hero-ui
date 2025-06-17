"use client";

import React, { useState } from "react";
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

interface CalendlyWidgetProps {
  url: string;
  type?: "inline" | "popup" | "button";
  buttonText?: string;
  buttonClassName?: string;
}

export default function CalendlyWidget({
  url,
  type = "popup",
  buttonText = "Umów darmową konsultację",
  buttonClassName = "bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold px-8 py-6 text-lg shadow-lg"
}: CalendlyWidgetProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Dla inline widget
  if (type === "inline") {
    return (
      <div className="calendly-inline-widget">
        <InlineWidget url={url} styles={{ height: "650px" }} />
      </div>
    );
  }
  
  // Dla popup button
  if (type === "button") {
    return (
      <PopupButton 
        url={url}
        rootElement={document.getElementById("__next") as HTMLElement}
        text={buttonText}
        className={buttonClassName}
      />
    );
  }
  
  // Dla popup widget w modalu
  return (
    <>
      <Button
        as={motion.button}
        color="success"
        size="lg"
        radius="lg"
        className={buttonClassName}
        endContent={
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </motion.svg>
        }
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
      >
        {buttonText}
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalBody className="p-0">
            <InlineWidget 
              url={url} 
              styles={{ height: "650px", width: "100%" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
