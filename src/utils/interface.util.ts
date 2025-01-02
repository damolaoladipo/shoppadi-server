import { Document, Model, ObjectId } from "mongoose";

export type Nullable<T> = T | null;
export interface IRoleDoc extends Document {
  name: string;
  description: string;
  slug: string;
  users: Array<ObjectId | any>;
  permissions: Array<string>;

  //generics
  createdAt: string;
  updatedAt: string;
  _id: ObjectId;
  id: ObjectId;

  // functions
  getAll(): Array<IRoleDoc>;
  findByName(name: string): IRoleDoc | null;
}


export interface IUserDoc extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    
    username: string;
    avatar: string;
    phoneNumber: string;
    phoneCode: string;
    countryPhone: string;
    userType: string;
    resetPasswordToken: any;
    resetPasswordTokenExpire: any
    accountStatus: string;
    emailCode: string;
    slug: string;
    
    isSuper: boolean;
    isAdmin: boolean;	
    isMerchant: boolean;	
    isGuest: boolean;
    isUser: boolean;	
    isActive: boolean;
    loginLimit: number;	
    sessionToken: string;
    
    merchant: ObjectId | any;
    guest: ObjectId | any;
    role: ObjectId | any;
    cart: Array<ObjectId | any>;	
    wishlist: Array<ObjectId | any>;	
    address: Array<IAddress>;

    matchPassword: (password: string) => boolean;
    getAuthToken: () => string;
    getResetToken: () => string
}

export interface IAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }


  export interface IResult {
    error: boolean;
    message: string;
    code: number;
    data: any;
  }
  
export interface ISessionToken extends Document {
    token: string;
    userId: ObjectId;
    createdAt: Date;
    removeSession: () => void;
  }

export interface IRandoChar {

}

export interface IProductDoc extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  tag: string[];
  stockQuantity: number;
  imageURLs: string[];
  
  merchant: ObjectId | any;
  inStock: boolean;
  discount: number;
  count: number;
  slug: string

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
  
  getAllProducts: () => void
  addToCart: (userId: ObjectId) => void;
  like: (userId: ObjectId) => void;
  updateStock: (quantity: number) => Promise<void>;
  applyDiscount: (discountPercentage: number) => Promise<void>;
  removeDiscount: () => Promise<void>;
  addTag: (tag: string) => Promise<void>;
  removeTag: (tag: string) => Promise<void>;
  isInStock: () => boolean;
}


export interface ICartDoc extends Document {
  users: ObjectId;
  products: { productId: ObjectId; quantity: number }[];
  coupon: string | null;
  checkout: boolean;

  addToCart: (productId: ObjectId, quantity: number) => Promise<ICartDoc>;
  removeFromCart: (productId: ObjectId) => Promise<ICartDoc>;
  applyCoupon: (coupon: string) => Promise<ICartDoc>;
  proceedToCheckout: () => Promise<ICartDoc>;

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}

export interface IOrderDoc extends Document {
  users: ObjectId;
  address: IAddress
  orderDate: Date;
  status: string;
  totalAmount: number;
  orderItems: { productId: ObjectId; quantity: number }[];
  payment: {
    method: string;
    status: string;
    transactionId: string;
  };
  shipment: {
    carrier: string;
    trackingNumber: string;
    status: string;
  };

  placeOrder: () => Promise<IOrderDoc>;
  updateStatus: (status: string) => Promise<IOrderDoc>;

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}

export interface ITransactionDoc extends Document {
  order: ObjectId;
  amount: number;
  method: string;
  currency: string;
  paymentPartner: string;
  date: Date;
  processTransaction: () => Promise<ITransactionDoc>;
  updatePaymentStatus: (status: string) => Promise<ITransactionDoc>;

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}



export interface IDoc extends Document {
 

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}



export interface IDoc extends Document {
 

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}



export interface IDoc extends Document {
 

  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}