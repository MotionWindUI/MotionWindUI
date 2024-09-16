import React, { createContext, useContext, useEffect, useState } from 'react';
import { I18nProvider, I18nProviderProps } from 'react-aria';

export type ThemeMode = 'light' | 'dark';
export type ValidationBehavior = 'native' | 'aria';

export interface MotionWindUIContextProps {
  currentTheme: string;
  currentMode: string;
  setCurrentTheme: (theme: string) => void;
  setCurrentMode: (mode: ThemeMode) => void;
  disableAnimations: boolean;
  setDisableAnimations: (value: boolean) => void;
  validationBehavior: ValidationBehavior;
  setValidationBehavior: (value: ValidationBehavior) => void;
}

export const MotionWindUIContext =
  createContext<MotionWindUIContextProps | null>(null);

export const useMotionWindUI = () => {
  const context = useContext(MotionWindUIContext);

  if (!context) {
    throw new Error(
      'useMotionWindUI must be used within a MotionWindUIProvider'
    );
  }

  return context;
};

interface MotionWindUIProviderProps {
  children: React.ReactNode;

  /**
   * The theme to set the UI to
   */
  theme?: string;

  /**
   * The light or dark mode of the theme
   */
  mode?: ThemeMode;

  /**
   * Disables animations globally in the library
   */
  disableAnimations?: boolean;

  /**
   * The validation behavior to use. Defaults to "aria"
   */
  validationBehavior?: ValidationBehavior;

  /**
   * The locale to use for i18n
   */
  locale?: I18nProviderProps['locale'];
}

export const MotionWindUIProvider = ({
  children,
  theme = 'default',
  validationBehavior: validationBehaviorProp = 'aria',
  disableAnimations: disableAnimationsProp = false,
  locale = 'en-us',
}: MotionWindUIProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem('theme');

    return storedTheme ?? theme;
  });

  const [currentMode, setCurrentMode] = useState<ThemeMode>(() => {
    const storedMode = localStorage.getItem('mode') as ThemeMode;

    if (storedMode) return storedMode;

    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDarkMode ? 'dark' : 'light';
  });

  const [disableAnimations, setDisableAnimations] = useState(
    disableAnimationsProp
  );

  const [validationBehavior, setValidationBehavior] =
    useState<ValidationBehavior>(validationBehaviorProp);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      `${currentTheme}-${currentMode}`
    );
  }, [currentTheme, currentMode]);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem('mode', currentMode);
  }, [currentMode]);

  return (
    <MotionWindUIContext.Provider
      value={{
        currentTheme,
        currentMode,
        setCurrentTheme,
        setCurrentMode,
        disableAnimations,
        setDisableAnimations,
        validationBehavior,
        setValidationBehavior,
      }}
    >
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </MotionWindUIContext.Provider>
  );
};
