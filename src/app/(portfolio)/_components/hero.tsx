import { Mail, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 py-20 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
          Full Stack Developer
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-blue-800 mb-8 leading-relaxed"
        >
          Crafting innovative digital experiences through thoughtful design and
          cutting-edge technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center space-x-6"
        >
          {[
            {
              icon: <Github className="w-6 h-6" />,
              href: "https://github.com/caesarKom",
            },
            { icon: <Linkedin className="w-6 h-6" />, href: "#" },
            { icon: <Mail className="w-6 h-6" />, href: "#contact" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg text-blue-600 hover:text-blue-800 hover:bg-white/90 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
