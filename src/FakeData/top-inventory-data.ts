interface Item {
  id: number;
  name: string;
  ticketsSold: number;
  price: string;
  partner: string;
  stockLevel: number;
  status: 'Active' | 'Inactive';
  imgUrl: string;
}

export const TopInventoryListData: Item[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    ticketsSold: 222,
    price: '$220',
    partner: 'Akram',
    stockLevel: 60,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 2,
    name: 'HP Laptop',
    ticketsSold: 222,
    price: '$220',
    partner: 'Akram',
    stockLevel: 100,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 3,
    name: 'iPod',
    ticketsSold: 222,
    price: '$220',
    partner: 'Akram',
    stockLevel: 60,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 4,
    name: 'Yamaha Bike',
    ticketsSold: 222,
    price: '$220',
    partner: 'Akram',
    stockLevel: 60,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 5,
    name: '3 Day Tour',
    ticketsSold: 222,
    price: '$220',
    partner: 'Akram',
    stockLevel: 60,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
];
