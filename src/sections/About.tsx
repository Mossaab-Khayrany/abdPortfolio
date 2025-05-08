"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import GithubIcon from "@/assets/icons/github.svg";
import Sage100 from "@/assets/icons/sage100.svg";
import SapBusiness from "@/assets/icons/sap-business.svg";
import Python from "@/assets/icons/python.svg";
import SQL from "@/assets/icons/sql.svg";
import Docs from "@/assets/icons/googleDocs.svg";

import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-section-context";

const toolboxItems = [
  {
    title: "Sage100",
    iconType: Sage100,
  },
  {
    title: "SAP Business",
    iconType: SapBusiness,
  },
  {
    title: "Python",
    iconType: Python,
  },
  {
    title: "SQL",
    iconType: SQL,
  },
  {
    title: "Google Docs",
    iconType: Docs,
  },
];

const hobbies = [
  {
    title: "Freelancing",
    emoji: "💻",
    left: "50%",
    top: "15%",
  },
  {
    title: "Bodybuilding",
    emoji: "💪",
    left: "5%",
    top: "5%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "5%",
    top: "35%",
  },
  {
    title: "Fashion",
    emoji: "👓",
    left: "35%",
    top: "40%",
  },
  {
    title: "Entrepreneurship",
    emoji: "🕴",
    left: "45%",
    top: "70%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.35,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  const constrainRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="À propos de moi"
          title="Aperçu de mon univers"
          description="Découvrez qui je suis, ce que je fais et ce qui m'inspire."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Mes lectures"
                description="Livres qui influencent ma vision du monde."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="Mes outils"
                description="Technologies et outils utilisés pour créer des analyses financières."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Au-delà des chiffres"
                description="Découvrez mes centres d’intérêt et passions en dehors du monde des données."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="mapImage"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 translate-x-5 translate-y-2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
                <p className="text-center text-lg text-gray-100 font-semibold">
                  Toulon
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
