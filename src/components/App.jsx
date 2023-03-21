import { ComponentWrapper } from './componentWrapper/ComponentWrapper';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionsHistory from './transactionsHistory/TransactionsHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <ComponentWrapper text="Social Profile">
        <Profile {...user} />
      </ComponentWrapper>

      <ComponentWrapper text="Upload Statistics">
        <Statistics title="UPLOAD STATS" stats={data} />
      </ComponentWrapper>

      <ComponentWrapper text="Friend List">
        <FriendList friends={friends} />
      </ComponentWrapper>

      <ComponentWrapper text="Transactions History">
        <TransactionsHistory items={transactions} />
      </ComponentWrapper>
    </div>
  );
};
