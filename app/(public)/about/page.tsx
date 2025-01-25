"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";

export default function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="About Us"
          subtitle="Premium Scooters, Thrilling Motorcycles, and Adventure-Ready Quad Bikes"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          recusandae iste animi magni, iusto aliquam adipisci harum rem velit
          eveniet sed incidunt corporis provident tempora inventore! Placeat ea
          veniam ullam.
        </p>
      </motion.div>
    </>
  );
}
