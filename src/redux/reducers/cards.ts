import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";
import {api, CardType} from "../../api/api";

export type initialStateType = {
    cards: Array<CardType>
}

const initialState = {
    cards: []
};

const GET_CARDS = 'GET_CARDS'
const REMOVE_CARD = 'REMOVE_CARD'

type ActionsType = getCardsType | removeCardType

const cards = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'GET_CARDS': {
            return {
                ...state,
                cards: action.cards,
            }
        }
        case 'REMOVE_CARD': {
            const newCards = state.cards.filter((item) => item._id !== action.id);
            return {
                ...state,
                cards: newCards,
            }
        }

        default:
            return state;
    }
};

type getCardsType = {
    type: typeof GET_CARDS,
    cards: Array<CardType>
}

type removeCardType = {
    type: typeof REMOVE_CARD,
    id: string
}
const getCards = (cards: Array<CardType>): getCardsType => ({type: GET_CARDS, cards})
const removeCard = (id: string): removeCardType => {
    return {type: 'REMOVE_CARD', id}
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

export const getCardsThunk = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await api.getCards()
        dispatch(getCards(data))
    } catch (e) {
        console.log(e)
    }
}
export const deleteContact = (id: string): ThunkType => (dispatch: ThunkDispatchType) => {
    dispatch(removeCard(id));
}
export default cards;