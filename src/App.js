import { useState } from "react";
import "./App.css";
import Button from "./compponent/Button/button.js";
import SplitBillForm from "./compponent/Form/SplitBillForm.js";
import AddFriendForm from "./compponent/Form/AddfriendForm.js";
import FriendList1 from "./compponent/Friend/FriendList.js";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
    
  }
  function toggleAddFriendForm() {
    setShowAddFriendForm((show) => !show);
    setSelectedFriend(null)
  }
  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((currentlySelectedFriend) =>
      currentlySelectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriendForm(false);

  }

  function handleSplitBill(value){
    setFriends((friends) =>
      friends.map((friend) => 
      friend.id===selectedFriend.id?
      {...friend,balance:friend.balance+value}
      :friend
    ),
    setSelectedFriend(null)


    )
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList1
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
        />
        {showAddfriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button show={showAddfriendForm} onClick={toggleAddFriendForm}>
          {showAddfriendForm ? "Close" : "Add "}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm key={selectedFriend.id}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          handleSelectedFriend={handleSelectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
