import type { IRepository } from "./Repository.types"

export interface IRepositoryItemProps {
  item: IRepository
  changeId: (id: string) => void
}
