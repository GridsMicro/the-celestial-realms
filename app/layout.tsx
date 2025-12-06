// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Celestial Realms: A Next.js Saga",
    description: "Landing Page for the Celestial Realms project, built with Next.js and Typescript.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
            <body className={inter.className}>
                {/*
          โครงสร้างหลักของหน้าเว็บ
          เราสามารถวาง Header และ Footer ที่ไม่ต้องการการโต้ตอบที่นี่ได้
        */}
                <main className="min-h-screen bg-gray-900 text-white">
                    {children}
                </main>
            </body>
        </html>
    );
}