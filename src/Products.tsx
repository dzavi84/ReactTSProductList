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
      longDescription:
        'The giant panda (Ailuropoda melanoleuca; Chinese: 大熊猫; pinyin: dàxióngmāo),[4] also known as the panda bear (or simply the panda), is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.[5] Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.',
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
      name: 'Engagement Rings',
      type: 'Tactile',
      image:
        'https://jewelryjealousy.com/wp-content/uploads/2018/10/best-square-engagement-ring.jpg',
      longDescription:
        'Instead of having pre-made rings with price tags on them, our goal is to create one amazing ring that fits your budget - something made just for the love of your life, for the price of something off the shelf.',
      specs: {
        actuationForce: '74',
        actuationPoint: '2.8',
        bottomOut: '72',
        bottomOutTravel: '6.8',
        price: '100.60',
      },
    },
    {
      id: 1,
      name: 'Football',
      type: 'Tactile',
      image: 'https://pngimg.com/uploads/football/football_PNG52759.png',
      longDescription:
        'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America and Oceania); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extent common origins and are known as football codes.',
      specs: {
        actuationForce: '74',
        actuationPoint: '6.5',
        bottomOut: '32',
        bottomOutTravel: '3.8',
        price: '10.60',
      },
    },
  ];
  handlerItemClicked = (_id: number) => {};
}
