import { formatDistanceToNow } from "date-fns/formatDistanceToNow"

export default function getDistance(
  date: string | number | Date | undefined,
): string {
  if (date === undefined) return ""
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
