import css from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.isOnline}`
            : `${css.status} ${css.isOffline}`
        }
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
