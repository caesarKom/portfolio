import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 bg-blue-900 text-center"
    >
      <p className="text-blue-200">
        © 2025 Cezary. Crafted with passion and precision.
      </p>
    </motion.footer>
  )
}
