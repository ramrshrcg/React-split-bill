import Button from "../Button/button";

export default function Friend({selectedFriend,handleSelectedFriend, friend }) {

  const isSelected =  selectedFriend?.id === friend.id;

 
  return (
    <li className={isSelected ? "selected" : " "}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${friend.balance}
          </p>
        )}
        {friend.balance === 0 && <p> You are even with {friend.name}</p>}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
     
      <Button show={selectedFriend} onClick={()=>handleSelectedFriend(friend)}>
       { isSelected ? <span>Close</span> :<span>Select</span>}
      </Button>
    </li>
  );
}
