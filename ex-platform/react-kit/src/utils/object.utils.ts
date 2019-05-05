import { Omit } from 'lodash';

export type PartialKeys<P extends object, K extends keyof P> = Omit<P, K>;
