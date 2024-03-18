import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

export const Modal = ({ children, isOpen, setIsOpen, extraClass }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        modalRef.current &&
        !modalRef?.current?.contains(event?.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);
  return (
    <div
      className={`servc_modal modal fade ${
        isOpen ? "show d-block" : "d-none"
      } `}
    >
      <div ref={modalRef} className={`modal-dialog ${extraClass}`}>
        <div className="modal-content">
          <span className="Close_modal" onClick={() => setIsOpen(false)}>
            <X />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};
