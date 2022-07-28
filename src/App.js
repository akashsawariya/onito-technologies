import Receipt from "./components/Receipt";
import "./App.css";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  // const [store, setStore] = useState([
  //   {
  //     date: "2022-07-15",
  //     amount: 2000,
  //     payment: "online",
  //     remark: "Tution Fees",
  //   },
  //   {
  //     date: "2022-07-15",
  //     amount: 1500,
  //     payment: "online",
  //     remark: "Wifi Bill",
  //   },
  //   {
  //     date: "2022-07-15",
  //     amount: 400,
  //     payment: "cash",
  //     remark: "Mobile Recharge",
  //   },
  //   {
  //     date: "2022-07-15",
  //     amount: 10000,
  //     payment: "cash",
  //     remark: "EMI",
  //   },
  // ]);
  return (
    <div>
      <Receipt />
      <Details />
    </div>
  );
}

export default App;
