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

export const InventoryListData: Item[] = [
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
  {
    id: 6,
    name: 'MacBook Pro',
    ticketsSold: 300,
    price: '$1500',
    partner: 'Ali',
    stockLevel: 75,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 7,
    name: 'Samsung Galaxy S21',
    ticketsSold: 180,
    price: '$999',
    partner: 'Akram',
    stockLevel: 80,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 8,
    name: 'Nintendo Switch',
    ticketsSold: 350,
    price: '$299',
    partner: 'Ali',
    stockLevel: 20,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 9,
    name: 'Sony Headphones',
    ticketsSold: 250,
    price: '$120',
    partner: 'Akram',
    stockLevel: 50,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 10,
    name: 'AirPods Pro',
    ticketsSold: 200,
    price: '$250',
    partner: 'Ali',
    stockLevel: 50,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 11,
    name: 'iPad Air',
    ticketsSold: 120,
    price: '$500',
    partner: 'Akram',
    stockLevel: 70,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 12,
    name: 'Apple Watch Series 6',
    ticketsSold: 90,
    price: '$399',
    partner: 'Akram',
    stockLevel: 10,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 13,
    name: 'GoPro Hero 9',
    ticketsSold: 270,
    price: '$399',
    partner: 'Ali',
    stockLevel: 80,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 14,
    name: 'Fitbit Charge 4',
    ticketsSold: 200,
    price: '$150',
    partner: 'Akram',
    stockLevel: 60,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 15,
    name: 'Bose SoundLink',
    ticketsSold: 280,
    price: '$179',
    partner: 'Ali',
    stockLevel: 100,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 16,
    name: 'Dell XPS 13',
    ticketsSold: 190,
    price: '$1200',
    partner: 'Akram',
    stockLevel: 95,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 17,
    name: 'Oculus Quest 2',
    ticketsSold: 320,
    price: '$299',
    partner: 'Ali',
    stockLevel: 85,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 18,
    name: 'Logitech MX Master 3',
    ticketsSold: 400,
    price: '$99',
    partner: 'Akram',
    stockLevel: 75,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 19,
    name: 'Microsoft Surface Pro 7',
    ticketsSold: 150,
    price: '$899',
    partner: 'Ali',
    stockLevel: 60,
    status: 'Inactive',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
  {
    id: 20,
    name: 'Razer Blade 15',
    ticketsSold: 270,
    price: '$2000',
    partner: 'Akram',
    stockLevel: 10,
    status: 'Active',
    imgUrl: '/images/laptop.webp',  // Fixed syntax here
  },
];
