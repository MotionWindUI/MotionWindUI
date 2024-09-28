import libConfig from '@motionwindui/eslint-config/library';
import tailwind from 'eslint-plugin-tailwindcss';

export default [...libConfig, ...tailwind.configs['flat/recommended']];
