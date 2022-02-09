export enum TAG_THEME {
  BLUE = 'BLUE',
  RED = 'RED',
  YELLOW = 'YELLOW',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
}

export enum TAG_SIZE {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}

export interface ITag {
  theme: TAG_THEME;
  size: TAG_SIZE;
  options: ITagOptionItems[];
  isRemove: boolean;
  // onChange: (value: ITagOptionItems) => void;
}

export interface ITagOptionItems {
  id: string;
  label: string;
  hidden: boolean;
}
