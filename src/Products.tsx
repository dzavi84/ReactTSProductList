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
    {
      id: 2,
      name: 'Ball',
      type: 'Tactile',
      image:
        'https://www.dhresource.com/0x0s/f2-albu-g10-M01-37-44-rBVaVlwXTHGAcrxyAAG7z5SOYSU760.jpg/9-5-oversize-giant-tennis-ball-for-children.jpg',
      longDescription: '...',
      specs: {
        actuationForce: '44',
        actuationPoint: '2.4',
        bottomOut: '62',
        bottomOutTravel: '3.8',
        price: '5.60',
      },
    },
    {
      id: 3,
      name: 'Ring',
      type: 'Tactile',
      image:
        'https://cbu01.alicdn.com/img/ibank/2018/917/621/10207126719_1492657371.jpg',
      longDescription: '...',
      specs: {
        actuationForce: '44',
        actuationPoint: '2.4',
        bottomOut: '62',
        bottomOutTravel: '3.8',
        price: '11.60',
      },
    },
  ];
  handlerItemClicked = (_id: number) => {};
}
