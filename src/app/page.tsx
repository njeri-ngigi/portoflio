"use client";

import { useState } from "react";
import { ContactModal } from "./components";
import { Main, Sidebar, Skills } from "./ui";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className="flex h-screen bg-cream justify-between">
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

// TODO: plan around responsiveness
// Remain the same until 1250px
// 1250-1150px:
//   - use hamburger menu with: download resume and links to skills
//   - hide Sidebar
// 1150-700px:
//   - center Main
//   - move Skills into hamburger menu and use modal to show skills
// Below 700px:
//   - use Mobile design
