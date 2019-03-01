import { Omit } from 'lodash';

export type PartialKey<P extends object, K extends keyof P> = Omit<P, K>;
