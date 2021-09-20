import React from 'react';
import s from  './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
          {props.message}
            <div className={s.like}>
            <span>Like</span> { props.likesCount}
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReuu5q5sBB6BY4H6ZZLMBHKJ7zPR8h0efolYAq9Irh-0ww1Os1eMGoxVrMkfpYkwe7Kxk&usqp=CAU' />

            </div>
        </div>
       
    )
};
export default Post;