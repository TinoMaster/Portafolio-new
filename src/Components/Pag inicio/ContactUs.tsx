import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const contactMethods = [
   {
      icon: <FaLinkedin />,
      i18: 'first',
      href: 'https://www.linkedin.com/in/oscarmarcosmallon/',
   },
   {
      icon: <FaGithub />,
      i18: 'second',
      href: 'https://github.com/TinoMaster',
   },
]

export const ContactUs = () => {
   const [t] = useTranslation('global')
   return (
      <section className="section relative">
         <div className="container">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="section-heading"
            >
               <h2>{t('contactsHome.title')}</h2>
               <p>{t('contactsHome.subtitle')}</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-12">
               {contactMethods.map((item, i) => (
                  <motion.a
                     key={item.i18}
                     href={item.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="glass glass-hover p-6 rounded-2xl flex flex-col items-center text-center gap-3 group"
                  >
                     <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl">
                        {item.icon}
                     </div>
                     <h4 className="font-semibold text-slate-200">
                        {t(`contactsHome.${item.i18}.title`)}
                     </h4>
                     <p className="text-sm text-slate-400">
                        {t(`contactsHome.${item.i18}.description`)}
                     </p>
                     <span className="text-secondary text-sm group-hover:underline">
                        {t(`contactsHome.${item.i18}.button`)} →
                     </span>
                  </motion.a>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="flex flex-col items-center gap-4"
            >
               <span className="text-sm text-slate-500">
                  {t('contactsHome.or')}
               </span>
               <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:ommallono@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/10 border border-secondary/30 rounded-full text-secondary font-medium hover:bg-secondary/20 transition-all duration-300"
               >
                  <FaEnvelope />
                  {t('contactsHome.email')}
               </motion.a>
               <div className="flex items-center gap-2 text-slate-500 text-sm mt-4">
                  <MdLocationOn className="text-secondary" />
                  <span>
                     {t('contactsHome.country')} — Francavilla al Mare
                  </span>
               </div>
            </motion.div>
         </div>
      </section>
   )
}
