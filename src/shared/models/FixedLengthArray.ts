type _FixedArray<
  T,
  N extends number,
  R extends unknown[],
> = R['length'] extends N ? R : _FixedArray<T, N, [T, ...R]>;

export type FixedLengthArray<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _FixedArray<T, N, []>
  : never;
