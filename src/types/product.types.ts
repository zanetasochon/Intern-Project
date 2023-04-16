export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    }
    title: string
  }

  export interface ICartProduct {
    productId: number;
    quantity: number;
  }

  export interface ISumCarts {
    id: number;
    sum: number;
  }

  export interface ICart {
    date: string;
    id: number;
    userId: number;
    products: ICartProduct[]
  }



  interface IName {
    firstname: string;
    lastname: string;
  }
  
  export interface IUser {
    address: { 
      city: string;
      geolocation: {
        lat: string;
        long: string;
      };
      number: number;
      street: string;
      zipcode: string;
    };
    email: string;
    id: number;
    name: IName;
    password: string;
    phone: string;
    username: string;
    __v: number;
  }

  export interface IData {
    address: any;
    date: string;
    id: number;
    products: ICartProduct;
    userId: number;
    __v: number;
    user: IUser; 
  }

  export interface IDistance {
   firstUser: number;
   secondUser: number;
   distance: number;
  }

  // export interface IAnswer {
  //   firstUser: IDistance;
  //   secondUser: IDistance;
  //   distance: string;
  //  }