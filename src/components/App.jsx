import { Profile } from "./Profile/Profile"
import user from "../to/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../to/data.json"
import { FriendList } from "./FriendList/FriendList";
import friends from "../to/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../to/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
