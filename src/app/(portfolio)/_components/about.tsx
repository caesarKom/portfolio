import { motion, Variants } from "framer-motion"
import Image from "next/image"

export const About = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: Variants
  itemVariants: Variants
}) => {
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-white/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="text-left space-y-6">
              <p className="text-lg text-blue-700 leading-relaxed">
                With five years of experience in full-stack development,
                I&apos;ve witnessed and contributed to the evolution of web
                technologies. My journey began in the early 2000s, and I&apos;ve
                continuously adapted to new frameworks, languages, and
                methodologies.
              </p>
              <p className="text-lg text-blue-700 leading-relaxed">
                I specialize in building scalable, maintainable applications
                that deliver exceptional user experiences. From concept to
                deployment, I handle every aspect of development with meticulous
                attention to detail.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl shadow-xl"
            >
              <div className="space-y-4 justify-center flex">
                <Image
                  src="/me.jpg"
                  alt="Me"
                  height={180}
                  width={180}
                  className="rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
