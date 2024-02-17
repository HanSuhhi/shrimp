export function useSlogan() {
  const slogans = [
    "今天发财"
  ];

  const one_slogan = (): string => useSample(slogans);

  return { one_slogan };
}
