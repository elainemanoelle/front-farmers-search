import { Farmer } from '../model/farmer';
import { SearchParams } from '../model/search-params';

export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}
