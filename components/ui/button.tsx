// components/ui/button.tsx
'use client';

import * as React from 'react';

// กำหนด Type สำหรับ Prop
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-colors duration-200";

    const variantStyles = variant === 'primary'
        ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
        : "bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600";

    return (
        <button
            className={`${baseStyle} ${variantStyles} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;