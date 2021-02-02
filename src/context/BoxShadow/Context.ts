import { createContext } from 'react';

export interface BoxOptions {
  horizontal: number
  vertical: number,
  blur: number,
  spread: number,
  shadowColor: string,
  bgColor: string,
  boxColor: string,
  styled: string,
}

const BoxShadowContext = createContext<BoxOptions | any>({});

export default BoxShadowContext;
