const main_month = 2;
const main_day = 18;

const dayjs = useDayjs();
const now = dayjs();
const month = now.month() + 1;
const day = now.date();

export function useDay() {
  const is_current_day = useState<boolean>("day", () => month === main_month && day === main_day);

  return { is_current_day };
}
