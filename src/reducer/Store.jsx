import { createContext, useReducer } from "react";

export const UserContext = createContext();

const INITUSER = {
  userInfo: {
    email: "user",
    password: "123456",
    name: "John",
    lastName: "Tiger",
    status: false,
    address: {
      Street: "5827 E State St",
      City: "Rockford",
      Province: "Indiana",
      Postal: "61108",
      PhoneNumber: "(815) 397-5682",
      Country: "United States",
    },
  },
  nonUser: [],
  cart: {
    cartItems: [],
  },
  history: {
    orders: [],
  },
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          status: true,
          email: action.payload.email,
        },
      };
    case "ADD_INFO_NONUSER":
      return {
        ...state,
        nonUser: action.payload,
      };
    case "Add_TO_CART":
      const newItems = action.payload;
      const oldItem = state.cart.cartItems.find(
        (item) => item.id == newItems.id
      );
      // console.log("data ", oldItem);
      const cartItems = oldItem
        ? state.cart.cartItems.map((item) =>
            item.id === oldItem.id ? newItems : item
          )
        : [...state.cart.cartItems, newItems];
      // console.log("data ", state.cart.cartItems);
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    case "REMOVE_TO_CART":
      const newCart = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: { ...state.cart, cartItems: newCart },
      };
    case "CHECK_OUT":
      const newOrder = action.payload;
      const orders = [...state.history.orders, newOrder];
      return {
        ...state,
        history: { ...state.history, orders },
        cart: { cartItems: [] },
      };
    default:
      return state;
  }
};

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(loginReducer, INITUSER);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
