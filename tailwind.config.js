/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colores del brand Hero Budget
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#e91e63',
          600: '#c2185b',
          700: '#ad1457',
          900: '#880e4f'
        },
        secondary: {
          100: '#f8bbd9',
          200: '#f48fb1',
          300: '#f06292'
        },
        accent: {
          500: '#4caf50',
          600: '#43a047'
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          primary: 'rgba(233, 30, 99, 0.1)',
          secondary: 'rgba(248, 187, 217, 0.15)'
        }
      },
      
      // Tipografía optimizada
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      
      // Espaciado personalizado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem'
      },
      
      // Animaciones personalizadas
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-element': 'floatElement 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      
      // Keyframes para animaciones
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            opacity: '0.3', 
            transform: 'translate(-50%, -50%) scale(1)' 
          },
          '50%': { 
            opacity: '0.6', 
            transform: 'translate(-50%, -50%) scale(1.05)' 
          }
        },
        floatElement: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-8px) translateX(3px) scale(1.1)' },
          '50%': { transform: 'translateY(-12px) translateX(-2px) scale(0.9)' },
          '75%': { transform: 'translateY(-5px) translateX(4px) scale(1.05)' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.8)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
      
      // Efectos de backdrop
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px'
      },
      
      // Box shadows personalizadas
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 45px rgba(31, 38, 135, 0.15)',
        'primary': '0 10px 20px rgba(233, 30, 99, 0.3)',
        'primary-lg': '0 20px 40px rgba(233, 30, 99, 0.2)'
      },
      
      // Gradientes personalizados
      backgroundImage: {
        'liquid-gradient-1': 'linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
        'liquid-gradient-2': 'linear-gradient(45deg, rgba(248, 187, 217, 0.2) 0%, rgba(233, 30, 99, 0.1) 50%, rgba(76, 175, 80, 0.1) 100%)',
        'liquid-gradient-3': 'radial-gradient(circle at top right, rgba(233, 30, 99, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%)',
        'hero-gradient': 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)',
        'cta-gradient': 'linear-gradient(135deg, #e91e63, #ad1457)'
      },
      
      // Border radius personalizado
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  plugins: [
    // Plugin para efectos glass
    function({ addUtilities }) {
      addUtilities({
        '.glass-effect': {
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'background': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.18)'
        },
        '.glass-strong': {
          'backdrop-filter': 'blur(40px)',
          '-webkit-backdrop-filter': 'blur(40px)',
          'background': 'rgba(255, 255, 255, 0.3)',
          'border': '2px solid rgba(255, 255, 255, 0.25)'
        }
      });
    }
  ]
};