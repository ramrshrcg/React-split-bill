import { useState } from "react";
import Button from "../Button/button";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name||!image) {
      alert("Please enter a name");
      return; 
    }
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");

  }
  return (
    <>
      <div>
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <h2>Add a Friend</h2>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="image">Image</label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button>ADD</Button>
        </form>
      </div>
    </>
  );
}
