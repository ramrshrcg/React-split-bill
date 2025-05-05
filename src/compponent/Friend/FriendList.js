import Friend from "./Friend";

export default function FriendList1({
  selectedFriend,
  toogleSplitBillForm,
  friends
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          toogleSplitBillForm={toogleSplitBillForm}
          show
        />
      ))}
    </ul>
  );
}
