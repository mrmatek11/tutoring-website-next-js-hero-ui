"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";

interface SuccessCardProps {
  name: string;
  achievement: string;
  testimonial: string;
  avatarSrc: string;
  category: string;
}

const SuccessCard = ({ name, achievement, testimonial, avatarSrc, category }: SuccessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardBody className="p-6 relative">
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-500/30 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5, 
              ease: "easeInOut" 
            }}
          />
          
          <div className="flex items-center gap-4 mb-4">
            <Avatar src={avatarSrc} size="lg" className="border-2 border-emerald-200" />
            <div>
              <h3 className="font-semibold text-primary-800">{name}</h3>
              <p className="text-sm text-primary-600">{achievement}</p>
            </div>
          </div>
          
          <p className="text-primary-700 mb-4 italic">"{testimonial}"</p>
          
          <div className="mt-auto">
            <Chip color="success" variant="flat" size="sm">{category}</Chip>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default function StudentSuccessCards() {
  const successStories = [
    {
      name: "Anna K.",
      achievement: "Awans w międzynarodowej firmie",
      testimonial: "Dzięki lekcjom z Lidią przełamałam barierę językową i zaczęłam swobodnie komunikować się z zagranicznymi klientami. Po 6 miesiącach nauki dostałam awans!",
      avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      category: "Business English"
    },
    {
      name: "Marek W.",
      achievement: "Zdany egzamin FCE (B2)",
      testimonial: "Podchodziłem do egzaminu dwa razy bez powodzenia. Z Lidią przygotowałem się w 4 miesiące i zdałem z wynikiem 180/190 punktów!",
      avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      category: "Egzaminy"
    },
    {
      name: "Kasia M.",
      achievement: "Przeprowadzka do Londynu",
      testimonial: "Zawsze bałam się mówić po angielsku. Lidia pomogła mi zbudować pewność siebie i teraz mieszkam w UK i pracuję w wymarzonym zawodzie.",
      avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
      category: "Konwersacje"
    },
    {
      name: "Tomasz B.",
      achievement: "Rozmowy kwalifikacyjne po angielsku",
      testimonial: "Przygotowywaliśmy się do rozmów w IT. Ćwiczyliśmy słownictwo techniczne i typowe pytania. Dostałem pracę w międzynarodowej korporacji!",
      avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
      category: "Angielski specjalistyczny"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Chip color="success" variant="flat" className="mb-4">
            Historie sukcesu
          </Chip>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">Uczniowie, którzy</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              osiągnęli swoje cele
            </span>
          </h2>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            Poznaj historie osób, które dzięki systematycznej pracy i indywidualnemu podejściu 
            przełamały barierę językową i osiągnęły swoje cele.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <SuccessCard 
              key={index}
              name={story.name}
              achievement={story.achievement}
              testimonial={story.testimonial}
              avatarSrc={story.avatarSrc}
              category={story.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
