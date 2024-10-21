import { danger } from './dark/danger';
import { primary } from './dark/primary';
import { secondary } from './dark/secondary';
import { success } from './dark/success';
import { warning } from './dark/warning';

/**
 * The dark color palette.
 */
export const darkColors = {
  primary: primary,
  secondary: secondary,
  success: success,
  warning: warning,
  danger: danger,
};

/**
 * Re-export the defaults so that the internal structure is not needed.
 */
export { PRIMARY_DARK_DEFAULT } from './dark/primary';
export { SECONDARY_DARK_DEFAULT } from './dark/secondary';
export { SUCCESS_DARK_DEFAULT } from './dark/success';
export { WARNING_DARK_DEFAULT } from './dark/warning';
export { DANGER_DARK_DEFAULT } from './dark/danger';
