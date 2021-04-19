import { ListData } from './example-contain';

interface Book {
  id: number;
  pages: number;
  weight?: string;
  visited: boolean;
}


const list: ListData<Book[]> = {
  count: 1,
  next: null,
  results: [{ id: 1, pages: 3, visited: true }],
};

Object.keys(list);
