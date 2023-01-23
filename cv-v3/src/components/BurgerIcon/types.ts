import { Dispatch, SetStateAction } from 'react';

export type BurgerIconProps = {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};
