import React from 'react';
import s from './About_me.module.css';
const About_me = (props) => {
    return(
        <div className= {s.about_me}>
            <img className={s.img_top} src="https://images5.alphacoders.com/520/520133.jpg"/>        
            <div className={s.avatar}>
                <img className={s.avatar_img} src="https://a.wattpad.com/cover/84608722-352-k886345.jpg"/>
                <div className={s.persom_name}>
                    <div>Котовский Кот Котович</div>
                    <div>Дата рождения: 26 марта</div>
                    <div>г. Котов-сити</div>
                    <div>Оброзование: БГУ-кэтс</div>
                    <div>Веб сайт: <a href="http://newwebsite.ru">newwebsite</a></div>
                </div>
            </div>
        </div>
    );
}

export default About_me;