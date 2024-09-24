type VariantValues = string[]; // Arrays of Tailwind classes

// Define a type for slots if applicable
export type ComponentVariantsWithSlots<S extends string> = {
  slots: Record<S, VariantValues>;
  variants: Record<string, Record<S | string, VariantValues>>;
  defaultVariants?: Record<string, string>;
};

// Define a type for components without slots
export type ComponentVariants = {
  base: VariantValues;
  variants: Record<string, Record<string, VariantValues>>;
  defaultVariants?: Record<string, string>;
};

// Helper type for extending the component variants
export type ExtendComponentVariants<T> =
  T extends ComponentVariantsWithSlots<infer S>
    ? ComponentVariantsWithSlots<S>
    : ComponentVariants;
