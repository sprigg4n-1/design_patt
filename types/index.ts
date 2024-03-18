import { MedUser } from '../src/patterns/behavioral/mediator/MedUser';
import { ProcessContext } from '../src/patterns/behavioral/state/ProcessContext';

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

// Interfaces and enums for composite
export interface IFinancialComponent {
  calculateValue(): number;
  getInfo(): string;
}

// Interfaces and enums for proxy
export interface IWebPage {
  getPage(url: string): string;
}

// Interfaces and enums for flyweight
export interface ILaptopComp {
  use(): void;
}

// Interfaces and enums for facade
export interface IProduct {
  id: number;
  name: string;
  price: number;
}

// Interfaces and enums for bridge
export interface IDatabase {
  connect(): void;
  disconnect(): void;
  query(query: string): void;
}

// Interfaces and enums for decorator
export interface IBaseTrink {
  printInfo(): string;
}

// Interfaces and enums for chain
export enum EUserRequest {
  create_task = 'create_task',
  change_task = 'change_task',
  delete_task = 'delete_task',
  show_task = 'show_task',
}

// Interfaces and enums for command p
export interface ICommandCalc {
  execute(): number;
}

// Interfaces and enums for iterator
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

export interface IPageItem {
  title: string;
  subtitle: string;
  rate: number;
}

// Interfaces and enums for mediator
export interface IMediator {
  notify(sender: MedUser, event: string, data: any): void;
}

// Interfaces and enums for observer
export interface IObserver {
  notify(message: string): void;
}

// Interfaces and enums for state
export interface IProcessState {
  start(context: ProcessContext): void;
  pause(context: ProcessContext): void;
  resume(context: ProcessContext): void;
  stop(context: ProcessContext): void;
}

// Interfaces and enums for strategy
export interface IAuthStrategy {
  auth(data: Object): boolean;
}
