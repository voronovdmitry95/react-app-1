import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="http://luciliadiniz.com/wp-content/uploads/2018/11/praia.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava +description
            </div>
        </div>
    )

}

export default ProfileInfo;