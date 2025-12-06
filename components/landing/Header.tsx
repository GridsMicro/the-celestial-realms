// components/landing/Header.tsx

import Link from "next/link";
// Header เป็น Server Component เพราะไม่มีการโต้ตอบผู้ใช้ (no 'onClick' or 'useState')
// ทำให้โหลดเร็วและมีประสิทธิภาพ

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-extrabold text-yellow-500 hover:text-yellow-400 transition-colors">
                    🌌 Celestial Realms
                </Link>
                <nav className="space-x-6 hidden md:flex">
                    <Link href="#story" className="text-gray-300 hover:text-yellow-300 transition-colors">Story</Link>
                    <Link href="#characters" className="text-gray-300 hover:text-yellow-300 transition-colors">Characters</Link>
                    <Link href="#tech" className="text-gray-300 hover:text-yellow-300 transition-colors">Tech</Link>
                    <Link href="#contact" className="text-gray-300 hover:text-yellow-300 transition-colors">Join the Saga</Link>
                </nav>
            </div>
        </header>
    );
}