/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Theme } from '@mui/material';

export type StylePropsType<T> = {
  ownerState?: T;
  theme: Theme | any;
};
