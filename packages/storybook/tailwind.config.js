import { motionWindUIPlugin } from "@motionwindui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../core/theme/src/components/**/*.{js,jsx,ts,tsx}",
    "../components/*/src/**/*.{js,jsx,ts,tsx}",
    "../components/*/stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  variants: {},
  plugins: [
    motionWindUIPlugin({
      theme: {
        style: {
          accent: {
            primary: {
              light: "var(--primary-600)",
            },
          },
        },
      },
      themes: {
        custom: {
          darkenOnHover: false,
          colors: {
            primary: {
              50: "#fbf5ef",
              100: "#f3e1d2",
              200: "#e6c2a1",
              300: "#d99e70",
              400: "#d0824e",
              500: "#c6653a",
              600: "#af4b30",
              700: "#92372b",
              800: "#782c28",
              900: "#632724",
              950: "#381110",
            },
          },
        },
        tailwindColors: {
          darkenOnHover: true,
          colors: {
            neutral: {
              50: "theme(colors.slate.50)",
              100: "theme(colors.slate.100)",
              200: "theme(colors.slate.200)",
              300: "theme(colors.slate.300)",
              400: "theme(colors.slate.400)",
              500: "theme(colors.slate.500)",
              600: "theme(colors.slate.600)",
              700: "theme(colors.slate.700)",
              800: "theme(colors.slate.800)",
              900: "theme(colors.slate.900)",
              950: "theme(colors.slate.950)",
            },
            primary: {
              50: "theme(colors.sky.50)",
              100: "theme(colors.sky.100)",
              200: "theme(colors.sky.200)",
              300: "theme(colors.sky.300)",
              400: "theme(colors.sky.400)",
              500: "theme(colors.sky.500)",
              600: "theme(colors.sky.600)",
              700: "theme(colors.sky.700)",
              800: "theme(colors.sky.800)",
              900: "theme(colors.sky.900)",
              950: "theme(colors.sky.950)",
            },
            secondary: {
              50: "theme(colors.pink.50)",
              100: "theme(colors.pink.100)",
              200: "theme(colors.pink.200)",
              300: "theme(colors.pink.300)",
              400: "theme(colors.pink.400)",
              500: "theme(colors.pink.500)",
              600: "theme(colors.pink.600)",
              700: "theme(colors.pink.700)",
              800: "theme(colors.pink.800)",
              900: "theme(colors.pink.900)",
              950: "theme(colors.pink.950)",
            },
            success: {
              50: "theme(colors.emerald.50)",
              100: "theme(colors.emerald.100)",
              200: "theme(colors.emerald.200)",
              300: "theme(colors.emerald.300)",
              400: "theme(colors.emerald.400)",
              500: "theme(colors.emerald.500)",
              600: "theme(colors.emerald.600)",
              700: "theme(colors.emerald.700)",
              800: "theme(colors.emerald.800)",
              900: "theme(colors.emerald.900)",
              950: "theme(colors.emerald.950)",
            },
            warning: {
              50: "theme(colors.orange.50)",
              100: "theme(colors.orange.100)",
              200: "theme(colors.orange.200)",
              300: "theme(colors.orange.300)",
              400: "theme(colors.orange.400)",
              500: "theme(colors.orange.500)",
              600: "theme(colors.orange.600)",
              700: "theme(colors.orange.700)",
              800: "theme(colors.orange.800)",
              900: "theme(colors.orange.900)",
              950: "theme(colors.orange.950)",
            },
            danger: {
              50: "theme(colors.red.50)",
              100: "theme(colors.red.100)",
              200: "theme(colors.red.200)",
              300: "theme(colors.red.300)",
              400: "theme(colors.red.400)",
              500: "theme(colors.red.500)",
              600: "theme(colors.red.600)",
              700: "theme(colors.red.700)",
              800: "theme(colors.red.800)",
              900: "theme(colors.red.900)",
              950: "theme(colors.red.950)",
            },
          },
          style: {
            accent: {
              secondary: {
                light: "var(--secondary-700)",
              },
            },
          },
        },
      },
    }),
  ],
  darkMode: ["class", '[data-mode="dark"]'],
};
