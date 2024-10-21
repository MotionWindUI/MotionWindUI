import { danger } from './light/danger';
import { primary } from './light/primary';
import { secondary } from './light/secondary';
import { success } from './light/success';
import { warning } from './light/warning';

/**
 * The light color palette.
 */
export const lightColors = {
  primary: primary,
  secondary: secondary,
  success: success,
  warning: warning,
  danger: danger,
};

/**
 * Re-export the defaults so that the internal structure is not needed.
 */
export { PRIMARY_LIGHT_DEFAULT } from './light/primary';
export { SECONDARY_LIGHT_DEFAULT } from './light/secondary';
export { SUCCESS_LIGHT_DEFAULT } from './light/success';
export { WARNING_LIGHT_DEFAULT } from './light/warning';
export { DANGER_LIGHT_DEFAULT } from './light/danger';
