import { ReactElement } from 'react';

type PageItem = {
  title: string;
  path: string;
  icon: ReactElement;
};

export type PageCategory = {
  title: string;
  list: PageItem[];
};
