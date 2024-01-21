export function useSlogan() {
  const slogans = [
    "且喜且乐且发财"
  ];

  const one_slogan = (): string => useSample(slogans);

  return { one_slogan };
}
