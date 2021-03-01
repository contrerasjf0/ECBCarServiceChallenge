import { ChangeEvent } from 'react';
import { userType } from './user';

export type serviceType = {
  description: string,
  make: string,
  model: string,
  id: number,
  image: string,
  maintenance?: boolean,
  km?: number,
  user?: userType;
};

export interface itemListProps {
  items:  serviceType[]
}

export interface itemProps {
    data: serviceType,

}

export interface infoSectionProps {
  id: number,
  description: string,
  image: string,
  maintenance?: boolean,
  user: userType,
  km?: number,
  open: boolean
}

export interface itemSectionProps {
  make: string,
  model: string,
  userFullName?: string,
  handleInfoSectionClick: () => void,
  activeMaintenance: boolean | undefined,
  handleActiveChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export interface editInputProps {
  edit: boolean,
  labText: string,
  labelValue: string | undefined,
  name: string,
  onChange: (name: string, value: string | undefined) => void
}
