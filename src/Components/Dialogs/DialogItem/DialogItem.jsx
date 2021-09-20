import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3644482/pub_5f6f09ba63b25d04cd57922e_5f6f0d8ffde6297ce3a096df/scale_1200" />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;