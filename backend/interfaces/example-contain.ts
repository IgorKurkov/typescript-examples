export interface ListData<T> {
  count: number;
  next?: number | null;
  previous?: number | null;
  pageSize?: number;
  results: T;
}
