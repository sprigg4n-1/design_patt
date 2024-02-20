// Interfaces and enums for factory
export enum EMenu {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Drinks = 'Drinks',
}

export interface IMenuNames {
  dishes: string[];
}

// Interfaces and enums for abs-factory
export enum ECompany {
  MSI = 'MSI',
  Gigabyte = 'Gigabyte',
}

export enum EMSIMonitors {
  MAG321UPXDE = 'MAG321UPXDE',
  MAG271QPXDE = 'MAG271QPXDE',
}

export enum EMSIMotherboard {
  MEGZ790GODLIKEMAX = 'MEGZ790GODLIKEMAX',
  MEGZ690GODLIKE = 'MEGZ690GODLIKE',
}

export enum EGigabyteMotherboard {
  H610MD3HDDR4 = 'H610MD3HDDR4',
  B650MS2H = 'B650MS2H',
}

export enum EGigabyteMonitors {
  S55U = 'S55U',
  G34WQC = 'G34WQC',
}

export interface IDeviceFactory {
  createMonitor(monitor: EMSIMonitors | EGigabyteMonitors): IMonitor;
  createMotherboard(
    motherboard: EGigabyteMotherboard | EMSIMotherboard
  ): IMotherboard;
}

export interface IMonitorStats {
  brand: string;
  size: number;
  maxRes: string;
  disType: string;
  connections: string[];
}

export interface IMotherboardStats {
  brand: string;
  chipset: string;
  base: string;
  RAM: string;
}

export interface IMonitor {
  stats: IMonitorStats;
  getStats(): void;
}

export interface IMotherboard {
  stats: IMotherboardStats;
  getStats(): void;
}

export interface ICompanyFactory {
  createFactory(type: ECompany): IDeviceFactory;
}

// Interfaces and enums for prototype
export interface IPrototype<T> {
  doCopy(): T;
}
