type Primitive = string | number;
/**
 * Switch over a primitive as an expression
 */
export const matchPrimitive = <T extends Primitive, B>(
  item: T,
  matchers: Record<T, () => B>
): B => {
  const matcher = matchers[item];
  return matcher();
};
