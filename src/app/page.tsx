"use client";

import { useState } from "react";
import { ContactModal } from "./components";
import { Main, Sidebar, Skills } from "./ui";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className="flex h-screen bg-cream">
      <Sidebar />
      <Main onOpenContactModal={() => setOpenContactModal(true)} />
      <Skills />
      <ContactModal
        open={openContactModal}
        onClose={() => setOpenContactModal(false)}
      />
    </div>
  );
}
