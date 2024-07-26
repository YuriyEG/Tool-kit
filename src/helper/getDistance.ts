import { formatDistanceToNow } from "date-fns/formatDistanceToNow"

export default function getDistance(date: string | number | Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
