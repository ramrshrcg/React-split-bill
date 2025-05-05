import Button from "../Button/button";

export default function Friend({selectedFriend,toogleSplitBillForm, friend }) {
  return (
    <li>
     
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${friend.balance}
          </p>
        )}
        {friend.balance === 0 && <p> You are even with {friend.name}</p>}
        {friend.balance < 0 && (
          <p className="red">showSplitBillForm
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
     
      <Button show={selectedFriend} onClick={toogleSplitBillForm}>
        <span>Select</span>
      </Button>
    </li>
  );
}
