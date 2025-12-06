// app/page.tsx

import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import { Suspense } from 'react';

// Page.tsx นี้เป็น Server Component 
// เราจะเรียกใช้ Client Component (HeroSection) ภายใน
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* ใช้ Suspense เพื่อจัดการ Loading State ของ Client Component
        เป็นการใช้ประโยชน์จาก RSC
      */}
      <Suspense fallback={<div className="text-center py-20">Loading Celestial Data...</div>}>
        <HeroSection />
      </Suspense>

      {/* เพิ่ม Section อื่นๆ ในรูปแบบ Server Component ที่นี่ */}
      <section id="features" className="py-20 text-center">
          <h2 className="text-4xl font-bold text-yellow-300">The Five Pillars of Astra Core</h2>
          <p className="mt-4 text-gray-400">
            Showcasing the characters and their unique powers.
          </p>
          {/* สามารถดึงข้อมูลตัวละคร (Prisma/Drizzle) มาแสดงที่นี่ได้ */}
      </section>
    </div>
  );
}