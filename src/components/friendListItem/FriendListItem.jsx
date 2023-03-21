import css from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={`${css.status} ${css.isOnline}`}></span>
      ) : (
        <span className={`${css.status} ${css.isOffline}`}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
