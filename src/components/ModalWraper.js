"use client"

import Modal from "react-modal";
import useKiosk from "@/hooks/useKiosk";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");


const ModalWrapper = ({ children }) => {

    const { modal } = useKiosk()

  return (
    <Modal isOpen={modal} style={customStyles}>
      {children}
    </Modal>
  );
};

export default ModalWrapper
