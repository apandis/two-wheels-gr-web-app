"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="p-8">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 text-center">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/experiences" aria-label="Discover the Island">
              <Badge variant="outline" className="flex items-center">
                Discover the Island
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
            </Link>
            <motion.h1
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to Two Wheels
            </motion.h1>
            <motion.p
              className="mb-8 max-w-xl text-muted-foreground lg:text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted vehicle rental shop in Corfu. Explore the beauty of
              the island on two wheels with ease and comfort.
            </motion.p>
            <motion.div
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link
                href="/vehicles"
                aria-label="View all available vehicles for rent"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto">View Vehicles</Button>
              </Link>
              <Link
                href="/about"
                aria-label="Learn more about our services and rentals"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn More
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center max-h-96 w-full rounded-md bg-gradient-to-br from-gray-100 to-gray-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="w-[320px] h-[320px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/TRANSPARENT.png"
                alt="ZFORCE 950 Trail"
                width={320}
                height={320}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
