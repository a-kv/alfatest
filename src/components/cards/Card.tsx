import React, {useState} from 'react';
import {ReactComponent as Remove} from '../../assets/delete_remove_trash_icon_177304.svg';
import {ReactComponent as Like} from '../../assets/like-svgrepo-com.svg';

import '../../assets/cards.scss'
import {CardType} from "../../api/api";

type PropsType = {
    card: CardType
    handleRemove: (id: string)=>void
}

function Card(props: PropsType) {
    const [like, setLike] = useState(false);

    const  handlerLike= () => {
        setLike(!like);
    }

    const setStyle = () => {
      return  like ? 'icon--active' : 'icon'
    }

    return (
        <div className="card">
            <div>Номер карточки: {props.card.cardNumber}</div>
            <div>Имя: {props.card.englishName}</div>
            <div className="card__wrapper-panel">
                <Remove className="icon" onClick={() => props.handleRemove(props.card._id)}/>
                <Like className={setStyle()} onClick={handlerLike}/>
            </div>
        </div>
    );
}

export default React.memo(Card);