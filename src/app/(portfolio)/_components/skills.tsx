import { Variants, motion } from "framer-motion"
import { Code, Server, Database, Globe } from "lucide-react"

export const Skills = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: Variants
  itemVariants: Variants
}) => {
  return (
    <motion.section
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-800"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-800 text-center mb-4">
                {skill.name}
              </h3>
              <div className="space-y-2">
                {skill.techs.map((tech) => (
                  <div
                    key={tech}
                    className="text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const skills = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    techs: ["Node.js", "Python", "Nest.js", "Express", "AI"],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "DevOps",
    icon: <Code className="w-6 h-6" />,
    techs: ["Docker", "Nginx", "Linux", "CI/CD"],
  },
]
