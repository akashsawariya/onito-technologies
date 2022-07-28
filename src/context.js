import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([
    {
      date: "2022-07-15",
      amount: 2000,
      payment: "online",
      remark: "Tution Fees",
    },
    {
      date: "2022-07-15",
      amount: 1500,
      payment: "online",
      remark: "Wifi Bill",
    },
    {
      date: "2022-07-15",
      amount: 400,
      payment: "cash",
      remark: "Mobile Recharge",
    },
    {
      date: "2022-07-15",
      amount: 10000,
      payment: "cash",
      remark: "EMI",
    },
  ]);
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
