import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1C1C1C',
                    light: '#2A2A2A',
                },
                accent: {
                    DEFAULT: '#FBCB6A',
                    hover: '#F4A940',
                    light: '#FFF8E7',
                    dark: '#DA932C', // Added for Problem icon
                    pale: '#FFFBF0', // Added for Problem icon bg
                },
                text: {
                    main: '#111111',
                    secondary: '#555555',
                    muted: '#666666', // Added for footer copyright
                    light: '#A0A0A0', // Added for footer links
                },
                bg: {
                    light: '#FAFAFA',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0 4px 6px rgba(0, 0, 0, 0.05)',
                'md': '0 10px 30px rgba(0, 0, 0, 0.08)',
                'lg': '0 20px 50px rgba(0, 0, 0, 0.12)',
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                'strong': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
                'glow': '0 0 20px rgba(251, 203, 106, 0.4)',
                'glow-strong': '0 0 40px rgba(251, 203, 106, 0.6)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-dot': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fadeIn': 'fadeIn 0.6s ease-out forwards',
                'slideUp': 'slideUp 0.8s ease-out forwards',
                'slideInRight': 'slideInRight 0.6s ease-out forwards',
                'scaleIn': 'scaleIn 0.5s ease-out forwards',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
