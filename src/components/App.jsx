import { Profile } from "./Profile/Profile"
import user from "../to/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../to/data.json"

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
    </div>
  );
}
