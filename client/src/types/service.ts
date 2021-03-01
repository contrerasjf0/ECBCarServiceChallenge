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
    data: serviceType
}

export interface infoSectionProps {
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
  handleInfoSectionClick: () => void
}
