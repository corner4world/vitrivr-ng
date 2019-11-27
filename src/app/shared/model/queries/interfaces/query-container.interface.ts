import {QueryTermInterface} from './query-term.interface';
import {QueryTermType} from './query-term-type.interface';

/**
 *
 */
export interface QueryContainerInterface {

  terms: QueryTermInterface[];
  containerId: string;

  addTerm(type: QueryTermType): boolean;

  removeTerm(type: QueryTermType): boolean;

  hasTerm(type: QueryTermType): boolean;
}
