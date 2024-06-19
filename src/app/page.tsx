"use client";

import { useState } from "react";
import { ContactModal } from "./components";
import { Main, Navigation } from "./ui";
import { SkillsModal } from "./components/modals/SkillsModal";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);

  const handleOpenContactModal = () => setOpenContactModal(!openContactModal);
  const handleOpenSkillsModal = () => setOpenSkillsModal(!openSkillsModal);

  return (
    <div className="flex flex-col w-full xxs:w-[320px] h-screen overflow-auto bg-crumple bg-cover">
      <Navigation
        onOpenContactModal={handleOpenContactModal}
        onOpenSkillsModal={handleOpenSkillsModal}
      />
      <Main
        onOpenContactModal={handleOpenContactModal}
        onOpenSkillsModal={handleOpenSkillsModal}
      />
      <div className="border-l h-full left-[60px] fixed m:hidden"></div>
      <div className="border-r h-full right-[60px] fixed m:hidden"></div>
      <div className="border-b w-full mt-[40px] m:hidden"></div>
      <ContactModal open={openContactModal} onClose={handleOpenContactModal} />
      <SkillsModal open={openSkillsModal} onClose={handleOpenSkillsModal} />
    </div>
  );
}
