import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";

const Receipt = () => {
  const { setStore } = useContext(Context);
  const [formIn, setFormIn] = useState({
    date: "",
    amount: "",
    payment: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormIn((prevalue) => {
      return {
        ...formIn,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { date, amount, payment, remark } = formIn;
    const data = {
      date,
      amount,
      payment,
      remark,
    };
    setStore((prevalue) => [data, ...prevalue]);
  };

  const clear = () => {
    setFormIn({
      date: "",
      amount: "",
      payment: "",
      remark: "",
    });
  };

  return (
    <div className="container">
      <div className="receipt">
        <h4>Receipt Details</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="required">Date</label>
            <input
              type="date"
              name="date"
              value={formIn.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Amount</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Amount (in INR)"
              name="amount"
              value={formIn.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Payment Mode</label>
            <select
              name="payment"
              value={formIn.payment}
              onChange={handleChange}
            >
              <option value="cash">Cash</option>
              <option value="online">Online</option>
              <option value="netbanking">Netbaning & NTFS</option>
            </select>
          </div>
          <div className="form-group">
            <label>Remark</label>
            <input
              type="text"
              className="input"
              placeholder="Enter remark"
              name="remark"
              value={formIn.remark}
              onChange={handleChange}
            />
          </div>
          <div className="btn">
            <button onClick={clear} className="cancel">
              CANCEL
              <br />
              <span>(ESC)</span>
            </button>
            <button type="submit" className="submit">
              SUBMIT
              <br />
              <span>(⌘ S)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receipt;
