import plugin from "tailwindcss/plugin";
import deepmerge from "deepmerge";
import { BaseColors, ModeValue, MotionWindUIPluginConfig } from "./types";
import { themeColors } from "./colors/colors";
import { ColorShadeKeys, ColorShades, CSSColorVarScale } from "./colors/types";
import { colorScaleToCssVars } from "./utils/colors";
import { ThemeMode } from "../../provider/src/MotionWindUIProvider";
import {
  BACKGROUND_CONSTANT,
  backgroundColors,
  backgroundColorsPlugin,
} from "./styles/colorStyles/background";
import { SURFACE_CONSTANT, surfaceColors, surfaceColorsPlugin } from "./styles/colorStyles/surface";
import {
  ACCENT_CONSTANT,
  accentColors,
  accentColorsPlugin,
  baseAccentColors,
  generateAccentColors,
} from "./styles/colorStyles/accent";
import {
  baseBorderColors,
  BORDER_CONSTANT,
  borderColors,
  borderColorsPlugin,
  generateBorderColors,
} from "./styles/colorStyles/border";
import {
  generateTextColors,
  TEXT_CONSTANT,
  textColors,
  textColorsPlugin,
} from "./styles/colorStyles/text";
import { Styles } from "./styles/types";
import { baseTextColors } from "./styles/colorStyles/text";
import { opacity, OPACITY_CONSTANT, opacityPlugin } from "./styles/colorStyles/opacity";
import {
  FONT_SIZE_CONSTANT,
  fontSize,
  fontSizePlugin,
  LINE_HEIGHT_CONSTANT,
  lineHeight,
} from "./styles/spacingStyles/fontSize";
import {
  BORDER_RADIUS_CONSTANT,
  borderRadius,
  borderRadiusPlugin,
} from "./styles/spacingStyles/borderRadius";
import {
  BORDER_WIDTH_CONSTANT,
  borderWidth,
  borderWidthPlugin,
} from "./styles/spacingStyles/borderWidth";
import theme from "tailwindcss/defaultTheme";

const DEFAULT_THEME = "default";

/**
 * Given the default color styles (if present), go through each style (if present) and generate the appropiate CSS variable.
 *
 * @param colorStyles The default color styles.
 * @param mode The theme mode (light or dark) to work in.
 * @returns The map of color variables to their values
 */
const generateVars = (colorStyles?: Styles, mode: ThemeMode = "light") => {
  // Skip if there are no themes present
  if (!colorStyles) return {};

  // Set up the return variable map
  const vars: { [key: string]: string } = {};

  // A function that prefixes any given string using the given mode key
  const addVars = (prefix: string, colors: { [key: string]: ModeValue }) => {
    Object.entries(colors).forEach(([key, value]) => {
      vars[`--${prefix}-${key}`] = value[mode];
    });
  };

  // Go through each style, and if it is there, generate the variables
  if (colorStyles.background) addVars(BACKGROUND_CONSTANT, colorStyles.background);
  if (colorStyles.surface) addVars(SURFACE_CONSTANT, colorStyles.surface);
  if (colorStyles.accent) addVars(ACCENT_CONSTANT, colorStyles.accent);
  if (colorStyles.border) addVars(BORDER_CONSTANT, colorStyles.border);
  if (colorStyles.text) addVars(TEXT_CONSTANT, colorStyles.text);

  return vars;
};

/**
 * Given the default color styles (if present), go through each style (if present) and generate the appropi
 *
 * @param styles The default styles.
 * @returns The map of color variables to their values
 */
const generateVarsWithoutMode = (styles: Styles) => {
  const vars: { [key: string]: string } = {};

  const addVars = (prefix: string, colors: { [key: string]: string }) => {
    Object.entries(colors).forEach(([key, value]) => {
      vars[`--${prefix}-${key}`] = value;
    });
  };

  if (styles.borderRadius) addVars(BORDER_RADIUS_CONSTANT, styles.borderRadius);
  if (styles.borderWidth) addVars(BORDER_WIDTH_CONSTANT, styles.borderWidth);
  if (styles.opacity) addVars(OPACITY_CONSTANT, styles.opacity);
  if (styles.fontSize) addVars(FONT_SIZE_CONSTANT, styles.fontSize);
  if (styles.lineHeight) addVars(LINE_HEIGHT_CONSTANT, styles.lineHeight);

  return vars;
};

const corePlugin = (config: MotionWindUIPluginConfig) => {
  // Get the user theme (this is the theme that overrides the defaults and sets it as the base for all other themes)
  const userTheme = config.theme || {};

  // Get the user themes (these are the themes that the user has defined)
  const userThemes = config.themes || {};

  // Set up the default base colors (neutral, primary, secondary, success, warning, danger)
  const defaultBaseColors: BaseColors = {
    neutral: themeColors.neutral,
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    warning: themeColors.warning,
    danger: themeColors.danger,
  };

  // Set the base style colors for the plugin (the colors that are used as the base for hover and active states)
  const themeBaseAccentColors = deepmerge(baseAccentColors, userTheme.style?.accent ?? {});
  const themeBaseBorderColors = deepmerge(baseBorderColors, userTheme.style?.border ?? {});
  const themeBaseTextColors = deepmerge(baseTextColors, userTheme.style?.text ?? {});

  // Generate all of the style colors for the main theme (based off of the base style colors and the user's overriden values)
  const themeAccentColors = generateAccentColors(
    accentColors,
    themeBaseAccentColors,
    userTheme.darkenOnHover ?? true,
  );
  const themeBorderColors = generateBorderColors(
    borderColors,
    themeBaseBorderColors,
    userTheme.darkenOnHover ?? true,
  );
  const themeTextColors = generateTextColors(
    textColors,
    themeBaseTextColors,
    userTheme.darkenOnHover ?? true,
  );

  // Set up the default styles
  // This is done by merging the default style that MotionWindUI provides with the user's style (if present)
  // This is done for each style (background, surface, accent, border, text)
  // If the user has not provided a style, the default style is used
  // This is used as the base for all other user defined themes
  // For example, if the primary color was overridden in the default theme, that primary color will be used in all other themes (unless overridden)
  const defaultStyles: Styles = {
    background: backgroundColors,
    surface: surfaceColors,
    accent: themeAccentColors,
    border: themeBorderColors,
    text: themeTextColors,
    borderRadius: deepmerge(borderRadius, userTheme.style?.borderRadius ?? {}),
    borderWidth: deepmerge(borderWidth, userTheme.style?.borderWidth ?? {}),
    opacity: deepmerge(opacity, userTheme.style?.opacity ?? {}),
    fontSize: deepmerge(fontSize, userTheme.style?.fontSize ?? {}),
    lineHeight: deepmerge(lineHeight, userTheme.style?.lineHeight ?? {}),
  };

  // Merge the default base colors with the user's base
  const mergedBaseColors: BaseColors = deepmerge(defaultBaseColors, userTheme.colors ?? {});

  // Generate the CSS variables for the color scales
  const colorStyles: CSSColorVarScale = {
    ...colorScaleToCssVars("neutral", mergedBaseColors.neutral, false),
    ...colorScaleToCssVars("primary", mergedBaseColors.primary, false),
    ...colorScaleToCssVars("secondary", mergedBaseColors.secondary, false),
    ...colorScaleToCssVars("success", mergedBaseColors.success, false),
    ...colorScaleToCssVars("warning", mergedBaseColors.warning, false),
    ...colorScaleToCssVars("danger", mergedBaseColors.danger, false),
  };

  // List of base colors
  const colorKeys = ["neutral", "primary", "secondary", "success", "warning", "danger"];

  // List of color shades
  const colorShadeKeys: ColorShadeKeys[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // Generate the TailwindCSS colors to use in the theme
  const tailwindColors = colorKeys.reduce(
    (acc, key) => {
      acc[key] = colorShadeKeys.reduce((scale, shade) => {
        scale[shade] = `var(--${key}-${shade})`;

        return scale;
      }, {} as Partial<ColorShades>);

      return acc;
    },
    {} as { [key: string]: Partial<ColorShades> },
  );

  // Group the CSS variables for the plugin (the default theme and any user themes)
  const baseCssVars = {};

  baseCssVars[":root"] = {
    ...colorStyles,
  };

  baseCssVars[`:root[data-theme="${DEFAULT_THEME}-light"]`] = {
    ...generateVars(defaultStyles, "light"),
    ...generateVarsWithoutMode(defaultStyles),
  };

  baseCssVars[`:root[data-theme="${DEFAULT_THEME}-dark"]`] = {
    ...generateVars(defaultStyles, "dark"),
    ...generateVarsWithoutMode(defaultStyles),
  };

  // Go through each user defined theme and generate the CSS variables for the theme
  Object.keys(userThemes).forEach((themeName) => {
    const themeConfig = userThemes[themeName];

    const themeBaseColors = deepmerge(mergedBaseColors, themeConfig.colors ?? {});

    const themeStyles = deepmerge(defaultStyles, themeConfig.style ?? {});

    themeStyles.accent = generateAccentColors(
      themeAccentColors,
      deepmerge(themeBaseAccentColors, themeStyles.accent ?? {}),
      themeConfig.darkenOnHover,
    );
    themeStyles.border = generateBorderColors(
      themeBorderColors,
      deepmerge(themeBaseBorderColors, themeStyles.border ?? {}),
      themeConfig.darkenOnHover,
    );
    themeStyles.text = generateTextColors(
      themeTextColors,
      deepmerge(themeBaseTextColors, themeStyles.text ?? {}),
      themeConfig.darkenOnHover,
    );

    const themeColorStyles: CSSColorVarScale = {
      ...colorScaleToCssVars("neutral", themeBaseColors.neutral, false),
      ...colorScaleToCssVars("primary", themeBaseColors.primary, false),
      ...colorScaleToCssVars("secondary", themeBaseColors.secondary, false),
      ...colorScaleToCssVars("success", themeBaseColors.success, false),
      ...colorScaleToCssVars("warning", themeBaseColors.warning, false),
      ...colorScaleToCssVars("danger", themeBaseColors.danger, false),
    };

    baseCssVars[`:root[data-theme="${themeName}-light"]`] = {
      ...generateVars(themeStyles, "light"),
      ...themeColorStyles,
      ...generateVarsWithoutMode(themeStyles),
    };

    baseCssVars[`:root[data-theme="${themeName}-dark"]`] = {
      ...generateVars(themeStyles, "dark"),
      ...themeColorStyles,
      ...generateVarsWithoutMode(themeStyles),
    };
  });

  return plugin(
    ({ addBase }) => {
      // Add the base colors
      addBase({
        ...baseCssVars,
      });
    },
    {
      theme: {
        extend: {
          /* Colors for the plugin */
          colors: {
            ...tailwindColors,
          },
          borderColor: {
            ...borderColorsPlugin,
          },
          textColor: {
            ...textColorsPlugin,
          },
          backgroundColor: {
            ...backgroundColorsPlugin,
            ...accentColorsPlugin,
            ...surfaceColorsPlugin,
          },
          /* Spacing for the plugin */
          borderRadius: {
            ...borderRadiusPlugin,
          },
          borderWidth: {
            ...borderWidthPlugin,
          },
          /* Other styles for the plugin */
          fontSize: {
            ...fontSizePlugin,
          },
          opacity: {
            ...opacityPlugin,
          },
          /* Ensure that we are using Tailwind's theme spacing */
          spacing: {
            ...theme.spacing,
          },
        },
      },
    },
  );
};

export const motionWindUIPlugin = (config: MotionWindUIPluginConfig): ReturnType<typeof plugin> => {
  return corePlugin(config);
};
