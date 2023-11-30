export interface QueryResult<T>{
  results: T[]
  page: number
  limit: number
  totalPages: number
  totalResults: number
}

export interface QueryOptions {
  sortBy?: string
  projectBy?: string
  populate?: string
  limit?: number
  page?: number
}
