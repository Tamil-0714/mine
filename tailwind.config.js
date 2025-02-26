/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  prefix: "",
  //   theme: {
  //     extend: {
  //       borderRadius: {
  //         lg: "var(--radius)",
  //         md: "calc(var(--radius) - 2px)",
  //         sm: "calc(var(--radius) - 4px)",
  //       },
  //       colors: {
  //         background: "hsl(var(--background))",
  //         foreground: "hsl(var(--foreground))",
  //         card: {
  //           DEFAULT: "hsl(var(--card))",
  //           foreground: "hsl(var(--card-foreground))",
  //         },
  //         popover: {
  //           DEFAULT: "hsl(var(--popover))",
  //           foreground: "hsl(var(--popover-foreground))",
  //         },
  //         primary: {
  //           DEFAULT: "hsl(var(--primary))",
  //           foreground: "hsl(var(--primary-foreground))",
  //         },
  //         secondary: {
  //           DEFAULT: "hsl(var(--secondary))",
  //           foreground: "hsl(var(--secondary-foreground))",
  //         },
  //         muted: {
  //           DEFAULT: "hsl(var(--muted))",
  //           foreground: "hsl(var(--muted-foreground))",
  //         },
  //         accent: {
  //           DEFAULT: "hsl(var(--accent))",
  //           foreground: "hsl(var(--accent-foreground))",
  //         },
  //         destructive: {
  //           DEFAULT: "hsl(var(--destructive))",
  //           foreground: "hsl(var(--destructive-foreground))",
  //         },
  //         border: "hsl(var(--border))",
  //         input: "hsl(var(--input))",
  //         ring: "hsl(var(--ring))",
  //         chart: {
  //           1: "hsl(var(--chart-1))",
  //           2: "hsl(var(--chart-2))",
  //           3: "hsl(var(--chart-3))",
  //           4: "hsl(var(--chart-4))",
  //           5: "hsl(var(--chart-5))",
  //         },
  //         sidebar: {
  //           DEFAULT: "hsl(var(--sidebar-background))",
  //           foreground: "hsl(var(--sidebar-foreground))",
  //           primary: "hsl(var(--sidebar-primary))",
  //           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
  //           accent: "hsl(var(--sidebar-accent))",
  //           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
  //           border: "hsl(var(--sidebar-border))",
  //           ring: "hsl(var(--sidebar-ring))",
  //         },
  //       },
  //       lineClamp: {
  //         20: "20",
  //         10: "10",
  //       },
  //       animation: {
  //         "accordion-down": "accordion-down 0.2s ease-out",
  //         "accordion-up": "accordion-up 0.2s ease-out",
  //         spotlight: "spotlight 2s ease .75s 1 forwards",
  //         "shimmer-slide":
  //           "shimmer-slide var(--speed) ease-in-out infinite alternate",
  //         "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
  //         "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
  //         shine: "shine var(--duration) infinite linear",
  //         meteor: "meteor 5s linear infinite",
  //         rainbow: "rainbow var(--speed, 2s) infinite linear",
  //         rippling: "rippling var(--duration) ease-out",
  //         marquee: "marquee var(--duration) infinite linear",
  //         "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
  //         orbit: "orbit calc(var(--duration)*1s) linear infinite",
  //       },
  //     },
  //   },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        rainbow: {
          "0%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "200%",
          },
        },
        rippling: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shine: "shine var(--duration) infinite linear",
        meteor: "meteor 5s linear infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        rippling: "rippling var(--duration) ease-out",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
