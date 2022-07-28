import React, { useContext } from "react";
import { Context } from "../context";

const Details = () => {
  const { store } = useContext(Context);
  return (
    <div className="details">
      <h3>Details</h3>
      <table>
        <tr>
          <th>Sr.No</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Remark</th>
        </tr>
        {store?.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item?.date}</td>
            <td>{item?.amount}</td>
            <td>{item?.remark}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Details;
