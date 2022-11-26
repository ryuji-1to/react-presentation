export type FactoryOrInstance<T> = T | (() => T);

export const useOptionalFactory = <T,>(option?: FactoryOrInstance<T>): T => {
  return typeof option === 'function' ? (option as () => T)() : (option as T);
};
