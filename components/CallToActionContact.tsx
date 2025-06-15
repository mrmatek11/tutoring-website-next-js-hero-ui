import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

// Proste ikony za pomocą JSX
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto my-12"
    >
      <Card
        className="bg-gradient-to-br from-primary-50/90 to-primary-100/70 backdrop-blur-sm border border-primary-200/50 
                   shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
        as={motion.div}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 25px 50px -12px rgba(0, 66, 37, 0.25)",
        }}
      >
        <CardBody className="p-0 relative">
          {/* Floating elements */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 bg-primary-300/20 rounded-xl blur-xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 5, 0]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          />
          
          <motion.div
            className="absolute top-40 right-40 w-12 h-12 bg-primary-500/20 rounded-lg blur-lg rotate-12"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.2, 0.4, 0.2],
              rotate: [12, 20, 12]
            }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          />

          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-primary-800 mb-6 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Jesteś gotowy na <span className="text-primary-600">realne zmiany?</span>
              </motion.h2>
              
              <motion.p 
                className="text-primary-700 text-lg mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Umów się na lekcję, a razem stworzymy plan dopasowany do Twoich potrzeb i celów.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <Button 
                  color="primary" 
                  size="lg" 
                  radius="full"
                  className="font-medium"
                  endContent={
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      →
                    </motion.div>
                  }
                >
                  Zaczynamy
                </Button>
              </motion.div>
            </div>
            
            {/* Center divider */}
            <div className="hidden md:flex items-center justify-center">
              <Divider orientation="vertical" className="h-40 bg-primary-300/50" />
            </div>
            
            {/* Right side */}
            <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center bg-primary-50/50">
              <motion.h3 
                className="text-2xl font-semibold text-primary-700 mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Skontaktuj się ze mną
              </motion.h3>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="mailto:lidia@lidiasobisz.pl" 
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-800 transition-colors group"
                  underline="hover"
                >
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-primary-500">Email</p>
                    <p className="font-medium">lidia@lidiasobisz.pl</p>
                  </div>
                </Link>
                
                <Link 
                  href="https://instagram.com/linglowacademy" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-800 transition-colors group"
                  underline="hover"
                >
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                    <InstagramIcon />
                  </div>
                  <div>
                    <p className="text-sm text-primary-500">Instagram</p>
                    <p className="font-medium">@linglowacademy</p>
                  </div>
                </Link>
              </motion.div>
              
              {/* Small glowing elements */}
              <div className="relative mt-8 h-20">
                <motion.div
                  className="absolute bottom-2 left-2 w-3 h-3 bg-primary-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-2 h-2 bg-primary-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-20 w-4 h-4 bg-primary-300 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
