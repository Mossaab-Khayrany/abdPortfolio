"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-section-context";

const testimonials = [
  {
    name: "Jamel EK.",
    position: "CEO @ MAO AGENCY",
    text: "Abdessamad a joué un rôle essentiel dans la transformation de nos données en analyses puissantes. Son sens du détail et sa capacité à comprendre notre identité ont été remarquables. Nous sommes ravis des résultats!",
    avatar: memojiAvatar1,
  },
  {
    name: "Zahra Baidi",
    position: "CEO @ EGE",
    text: "Travailler avec Abdessamad a été un plaisir. Son expertise en analyse financière et en automatisation comptable a apporté une vraie valeur à notre gestion interne.",
    avatar: memojiAvatar2,
  },
  {
    name: "Khalid Errami",
    position: "Manager @ DropStore",
    text: "Abdessamad a contribué à l'optimisation de notre entreprise. Grâce à son expertise en analyse des données et en gestion financière, il a permis d'augmenter nos ventes grace aux outils qu'il a créés pour suivre et analyser nos performances.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.35,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Testimonials");
    }
  }, [inView, setActiveSection]);
  return (
    <div className="py-16 lg:py-24" id="testimonials" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Encadrants satisfaits"
          title="Témoignages de mes encadrants"
          description="Ne vous contentez pas de mon avis. Découvrez ce que mes encadrants pensent de mon travail."
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div className="">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
