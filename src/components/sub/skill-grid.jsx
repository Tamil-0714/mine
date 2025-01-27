import React from "react"
import SkillCard from "./skill-card"

const skills = [
  {
    name: "Supabase",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Express",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Git/Github",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Typescript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Webflow",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Next.js",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Tailwind",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Node.js",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "React",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "Javascript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "CSS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
  {
    name: "HTML",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spXZIij8FniOsAacAwxSwBBJyB0Q1U.png",
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skillName={skill.name} skillIcon={skill.icon} />
      ))}
    </div>
  )
}

