import History from "@/app/components/about-us/History";
import Objectives from "@/app/components/about-us/Objectives";
import VisionMission from "@/app/components/about-us/VisionMission";
import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-100">
      <History />
      <Objectives />
      <VisionMission />
    </main>
  );
}
