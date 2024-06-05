import { BsSendFill } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { Modal, ModalProps } from "./Modal";
import { links } from "@/app/data/links";
import { useState } from "react";

export function ContactModal(props: ModalProps) {
  const [copied, setCopied] = useState(false);

  const handleSendEmail = () => {
    // TODO: Implement email sending, remove delay
    console.log("Send email");
    setTimeout(() => props.onClose(), 100);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.Email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Modal {...props}>
      <div className="flex flex-col justify-between font-jura">
        <div>
          <div className="font-bold">Hello there, send me an email</div>
          <div className="text-2xl flex items-center my-2">
            <span className="mr-2">{links.Email}</span>
            {copied ? (
              <FaCheck size={20} />
            ) : (
              <button onClick={handleCopyEmail} className="hover:text-black/60">
                <IoCopyOutline size={20} />
              </button>
            )}
          </div>
          <textarea
            autoFocus
            className="w-full h-40 border text-2xl my-8 w-3/5 p-4 h-[250px] text-black/75 outline-black"
            placeholder="Write me a message ..."
          ></textarea>
        </div>
        <div>
          <button
            className="absolute flex bg-white border-2 items-center justify-center w-[150px] h-[50px] hover:bg-cream transition-all duration-300 active:ml-2 active:mt-2"
            onClick={handleSendEmail}
          >
            <BsSendFill size={30} />
          </button>
          <div className="border-2 border-black ml-2 mt-2 bg-lemon w-[150px] h-[50px]"></div>
        </div>
      </div>
    </Modal>
  );
}
