"use client";

import { Marquee } from "@/components/magicui/marquee";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const testimonials = [
  {
    name: "Alex Kim",
    role: "Club President, Robotics Society",
    text: "Clublinked transformed how we manage our club. Onboarding is a breeze and our events are always packed!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    profile: "#",
  },
  {
    name: "Priya Patel",
    role: "Student, Computer Science",
    text: "I found my dream club in minutes. The platform is beautiful and so easy to use!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    profile: "#",
  },
  {
    name: "Jordan Lee",
    role: "Treasurer, Art Collective",
    text: "Custom forms and analytics helped us grow our membership by 40%. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    profile: "#",
  },
  {
    name: "Sara Chen",
    role: "Student, Engineering",
    text: "The event management tools are next-level. I never miss out on club activities anymore!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    profile: "#",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 bg-background/80">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Community Says</h2>
      <div className="flex justify-center mb-8">
        <AvatarCircles
          avatarUrls={testimonials.map(t => ({ imageUrl: t.avatar, profileUrl: t.profile }))}
          numPeople={120}
        />
      </div>
      <Marquee pauseOnHover className="[--duration:28s]">
        {testimonials.map((t, idx) => (
          <figure key={idx} className="mx-6 w-80 bg-white/80 dark:bg-black/60 rounded-xl border p-6 shadow-md flex flex-col items-center">
            <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-3 border-2 border-primary" />
            <figcaption className="font-semibold text-lg mb-1 text-primary">{t.name}</figcaption>
            <span className="text-xs text-muted-foreground mb-2">{t.role}</span>
            <blockquote className="text-base text-center text-foreground">“{t.text}”</blockquote>
          </figure>
        ))}
      </Marquee>
    </section>
  );
} 