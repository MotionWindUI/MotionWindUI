import { DEV_MODE } from './constants';

/**
 * The configured logger for the application.
 * This logger is only active in development mode.
 */
export const DEV_LOGGER = DEV_MODE
  ? console
  : {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {},
      debug: () => {},
    };

/**
 * Logs a message to the console.
 *
 * @param message The message to log to the console
 * @param component The component that is logging the message (optional)
 * @param args Additional arguments to log to the console
 *
 * @example
 * log('Hello, world!', 'MyComponent');
 * "[MotionWindUI][MyComponent] Hello, world!"
 */
export const log = (message: string, component?: string, ...args: any[]) => {
  const componentLog = component ? `[${component}]` : '';
  const logPrefix = `[MotionWindUI]${componentLog}`;

  DEV_LOGGER.log(logPrefix, message, ...args);
};

/**
 * Logs a warning message to the console.
 *
 * @param message The message to log to the console
 * @param component The component that is logging the message (optional)
 * @param args Additional arguments to log to the console
 *
 * @example
 * warn('Hello, world!', 'MyComponent');
 * "[MotionWindUI][MyComponent] Hello, world!"
 */
export const warn = (message: string, component?: string, ...args: any[]) => {
  const componentLog = component ? `[${component}]` : '';
  const logPrefix = `[MotionWindUI]${componentLog}`;

  DEV_LOGGER.warn(logPrefix, message, ...args);
};

/**
 * Logs an error message to the console.
 *
 * @param message The message to log to the console
 * @param component The component that is logging the message (optional)
 * @param args Additional arguments to log to the console
 *
 * @example
 * error('Hello, world!', 'MyComponent');
 * "[MotionWindUI][MyComponent] Hello, world!"
 */
export const error = (message: string, component?: string, ...args: any[]) => {
  const componentLog = component ? `[${component}]` : '';
  const logPrefix = `[MotionWindUI]${componentLog}`;

  DEV_LOGGER.error(logPrefix, message, ...args);
};
