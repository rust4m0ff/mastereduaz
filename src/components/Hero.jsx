"use client";
import Image from 'next/image';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Hero = () => {
    return (

        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <section id="ana-sehife" className="relative container mx-auto py-[25vh]">
                    <div className="absolute top-0 right-0 z-0 animate-float1 size-[150px]">
                        <Image src="/hero_1.png" alt="Hero" width={500} height={500} />
                    </div>

                    {/* Floating image 2 (simple circle) */}
                    <div className="absolute bottom-0 left-0 z-0 animate-float2 size-[200px]">
                        <Image src="/hero_2.png" alt="Hero" width={500} height={500} />
                    </div>


                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl md:text-6xl text-[#0168a7] mb-4 font-bold">
                            Uğura gedən yolda səninləyik!
                        </h1>
                        <p className="text-lg md:text-2xl text-[#0168a7] mb-8">
                            Elə indi qeydiyyatdan keç və uğura bizimlə birlikdə addımla!
                        </p>
                        <button onClick={() => { window.open("https://wa.me/994708751147", "_blank") }} className="px-8 py-3 bg-[#0168a7] text-white transition-transform transform hover:scale-105 cursor-pointer font-bold">
                            BİZİMLƏ ƏLAQƏ
                        </button>
                    </div>
                </section>
            </motion.div>

        </AuroraBackground>
    );
};

export default Hero;
