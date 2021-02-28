import style from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={style.profileContainer}>
      <img src="http://github.com/alexdesignprograming1.png" alt="Alex Silva" />
      <div>
        <strong>Alex Silva</strong>
        <p><img src="icons/level.svg" alt="icon level" />Level 1</p>
      </div>
    </div>
  );
}  