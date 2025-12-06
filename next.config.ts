// next.config.js - UPDATED

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. **การแก้ไขที่จำเป็น:** ย้ายการตั้งค่าจาก experimental.serverComponentsExternalPackages
    serverExternalPackages: ["pg", "drizzle-orm"],

    // 2. การตั้งค่า experimental เดิม (ถ้ามี) ถูกลบออก

    // 3. การตั้งค่ารูปภาพภายนอก (ยังคงเดิม)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com', // เปลี่ยนเป็น Hostname ของ CDN ที่คุณจะใช้
            },
        ],
    },
};

module.exports = nextConfig;