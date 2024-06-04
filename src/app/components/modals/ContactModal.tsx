import { BsSendFill } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { Modal, ModalProps } from "./Modal";
import { links } from "@/app/data/links";
import { useState } from "react";

export function ContactModal(props: ModalProps) {
  const [copied, setCopied] = useState(false);

  const handleSendEmail = () => {
    // TODO: Implement email sending
    console.log("Send email");
    props.onClose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.Email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Modal {...props}>
      <div className="flex flex-col justify-between">
        <div>
          <div>Hello there, send me an email</div>
          <div className="text-2xl flex items-center my-2">
            <span className="mr-2">{links.Email}</span>
            {copied ? (
              <FaCheck size={20} />
            ) : (
              <button onClick={handleCopyEmail}>
                <IoCopyOutline size={20} />
              </button>
            )}
          </div>
          <textarea
            className="w-full h-40 border text-2xl my-8 w-3/5 p-4 h-[250px]"
            placeholder="Write me a message ..."
          ></textarea>
        </div>
        <button
          className="flex bg-lemon border px-3 py-2 rounded items-center justify-center w-[150px]"
          onClick={handleSendEmail}
        >
          <BsSendFill size={30} />
        </button>
      </div>
    </Modal>
  );
}
