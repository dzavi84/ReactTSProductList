import { InputBaseClassKey } from '@material-ui/core';

export interface IProduct {
  id: number;
  name: string;
  type: string;
  image: string;
  longDescription: string;
  specs?: ISpecs;
}
export interface ISpecs {
  actuationForce: string;
  actuationPoint: string;
  bottomOut: string;
  bottomOutTravel: string;
  price: string;
}
export class Collection {
  items: IProduct[] = [];
  handlerItemClicked = (_id: number) => {};
}
