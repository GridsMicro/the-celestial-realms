// components/landing/HeroSection.tsx
'use client';

// 🛑 Image ถูกลบออกแล้ว
import { useState } from "react";
import Button from "@/components/ui/button";

// HeroSection ต้องเป็น Client Component เพราะใช้ useState และเหตุการณ์ onClick
export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center p-8 md:p-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 🛑 แก้ไขแล้ว: ลบพร็อพเพอร์ตี้ style ออก และใช้ Class 'hero-bg-image' ใน globals.css แทน */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 hero-bg-image"
            />
            <div className="z-10 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-black text-yellow-400 drop-shadow-lg">
                    THE CELESTIAL REALMS
                </h1>
                <p className="mt-6 text-xl text-gray-200">
                    A Saga of Five Princes, A Core of Unity, and the Shadow of Rahu.
                </p>
                <div className="mt-10 flex gap-4 justify-center">
                    <Button onClick={() => console.log('Saga Started!')}>
                        Start the Saga {isHovered ? '🚀' : '✨'}
                    </Button>
                    <Button variant="secondary">
                        View Trailer
                    </Button>
                </div>
            </div>
        </section>
    );
}