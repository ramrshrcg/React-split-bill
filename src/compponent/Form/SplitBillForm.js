import { useState } from "react";
import Button from "../Button/button";

export default function SplitBillForm() {

  return (
    
      <>
        <form className="form-split-bill">
        <h2>Split Bill with friend </h2>

          <label> Bill value</label>
          <input type="text" id="name"  placeholder="Enter your name" />

          <label>Your Expense</label>
          <input type="text" id="image" placeholder="Enter image URL"  />

          <label> Saras Expense</label>
          <input type="number" id="bill" disabled placeholder="Enter bill amount" />

          <label> Who is paying the bill?</label>
          <select>
            <option value= 'user'> you</option>
            <option value ='friend '> friend name</option>

          
           
          </select>

          <Button>Split Bill</Button>
        </form>
      </>
    
  );
}
