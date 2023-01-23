import { Dispatch, SetStateAction } from 'react';

export type NavigationProps = {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};
