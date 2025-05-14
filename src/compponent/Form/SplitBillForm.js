import { useState } from "react";
import Button from "../Button/button";

export default function SplitBillForm({selectedFriend,handleSplitBill }) {
  const [bill, setBill] = useState('');
  const [userExpense, setUserExpense] = useState('');
  // const [friendExpense, setFriendExpense] = useState('');
  const [whoisPaying, setWhoisPaying] = useState('user');
  const paidByFriend= bill?bill- userExpense:''
  function handleSubmitBillspliting(e){
    e.preventDefault();
    if(!bill || !userExpense){
      alert('Please enter a bill and your expense');
      return;
    }
    handleSplitBill(whoisPaying ==='user'?paidByFriend:-userExpense)
    // setSelectedFriend(null)
    
  }
  return (
    
      <>
        <form className="form-split-bill" onSubmit={handleSubmitBillspliting}>
        <h2>Split Bill with {selectedFriend.name} </h2>

          <label>Bill value</label>
          <input type="text"  placeholder="Enter bill value"  value={bill} onChange={e=>setBill(Number(e.target.value))} />

          <label>Your Expense</label>
          <input type="text"  placeholder="Enter total" value={userExpense}  onChange={e=>setUserExpense(Number(e.target.value)>bill?userExpense:(e.target.value))}  />

          <label> {selectedFriend.name} Expense</label>
          <input type="text"  disabled={true}  
          value={paidByFriend>0?paidByFriend:''}/>

          <label> Who is paying the bill?</label>
          <select value={whoisPaying} onChange={e=>setWhoisPaying(e.target.value)}> 
            <option value= 'user'> you</option>
            <option value ='friend '> {selectedFriend.name}</option>

          
           
          </select>

          <Button>Split Bill</Button>
        </form>
      </>
    
  );
}
