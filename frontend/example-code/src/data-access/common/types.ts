import { Model } from 'mongoose'
import { IOptions } from './paginate'
import { QueryResult } from '@/common/types'


export interface ExtendedModel<T> extends Model<T> {
  paginate(
    filter: Record<string, unknown>,
    options:IOptions
  ): Promise<QueryResult<T>>
}
