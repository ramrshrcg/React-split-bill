import Friend from "./Friend";

export default function FriendList1({
  selectedFriend,
  handleSelectedFriend,
  friends
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
          show
        />
      ))}
    </ul>
  );
}
