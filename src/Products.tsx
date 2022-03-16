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
  items: IProduct[] = [
    {
      id: 1,
      name: 'Holy Panda',
      type: 'Tactile',
      image:
        'https://ih0.redbubble.net/image.618638614.1485/raf,750x1000,075,t,fafafa:ca443f4786.jpg',
      longDescription: '...',
      specs: {
        actuationForce: '44',
        actuationPoint: '2.4',
        bottomOut: '62',
        bottomOutTravel: '3.8',
        price: '1.60',
      },
    },
  ];
  handlerItemClicked(_id: number) {}
}
