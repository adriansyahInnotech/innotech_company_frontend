import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800 ">
      <motion.section
        className="h-[50vh] px-4 text-center bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/bg-tech-1.jpg')" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src="/logo.png"
          alt="PT Innotech Prima Digital Logo"
          className="mx-auto mb-6 w-32 h-32 object-contain"
        />
        <h1 className="text-6xl font-bold mb-6 text-white">PT Innotech Prima Digital</h1>
        <p className="text-lg max-w-3xl mx-auto text-white">
          A technology startup specializing in software development and system integration solutions for enterprises, governments, and digital transformation projects.
        </p>
      </motion.section>

      <motion.section
        className="h-[50vh] px-4 text-center bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/bg-tech-2.jpg')" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
              <p>Enterprise-grade web, mobile, and desktop applications tailored to your needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">System Integration</h3>
              <p>Connecting disparate platforms and technologies for seamless business operations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
              <p>Strategic technology advisory for digital transformation, automation, and scalability.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        className="h-[50vh] px-4 text-center bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/bg-tech-3.jpg')" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-white">
          PT Innotech Prima Digital is driven by a passion for innovation, technical excellence, and delivering impactful software solutions. Our team of experienced engineers and consultants is dedicated to building systems that empower businesses and institutions to succeed in the digital era.
        </p>
      </motion.section>

      <motion.section
        className="h-[50vh] px-4 text-center bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/bg-tech-4.jpg')" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </motion.section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} PT Innotech Prima Digital. All rights reserved.
      </footer>
    </main>
  );
}
