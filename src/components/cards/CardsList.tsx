import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import '../../assets/cards.scss'
import Card from './Card';
import {AppStateType} from "../../redux/store";
import {getCardsThunk, deleteContact} from "../../redux/reducers/cards";
import {CardType} from "../../api/api";

function CardsList() {
    const [sort, setSort] = useState(false);
    const cardsList = useSelector((state: AppStateType) => state.cards.cards);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getCardsThunk())
        }, [dispatch])

    const handleChangeCheckbox = ({target: {checked}}: any) => {
        setSort(checked);
    }

    const handleRemove = (id: string) => {
        dispatch(deleteContact(id));
    }


    const cardItems = (list: Array<CardType>) => {

        return list.map((item: CardType) => {
            return item.sakuraCard ? <Card key={item._id} card={item} handleRemove={handleRemove}/> : ""
        })
    }
    let cardsListCopy = [...cardsList]
    const sortCardItems = cardsListCopy.sort((a, b) => a.englishName > b.englishName ? 1 : -1);


    const descCardsList = cardItems(sortCardItems)
    const cardsListDraw = cardItems(cardsList)


    return (
        <div>
            <div className="filter">
                <input type="checkbox" checked={sort} onChange={handleChangeCheckbox}/> сортировать по алфавиту
            </div>
            <div className="card-list">
                {sort ? descCardsList : cardsListDraw}
            </div>
        </div>
    );
}

export default CardsList;
