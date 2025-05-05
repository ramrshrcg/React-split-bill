import AddFriendForm from "./AddfriendForm";
import SplitBillForm from "./SplitBillForm";

export default function Form ({ addFriend}){
    return (
        <>
            <SplitBillForm> </SplitBillForm>
            <AddFriendForm addFriend={addFriend}> </AddFriendForm>
        </>
    )
}