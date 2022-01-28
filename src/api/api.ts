import axios from 'axios';

export type CardType = {
    cardNumber: number
    englishName: string
    sakuraCard: string
    _id: string
    spanishName: string
    kanji: string
    appeardManga: string
    appeardAnime: string
    clowCard: string
    meaning: string
    __v: string
    cardsReverse: string
    Rōmaji: string
};

export type GetCardsApiType = Array<CardType>


const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://protected-taiga-89091.herokuapp.com/api/card',
});

export const api = {
    getCards() {
        // @ts-ignore
        return instance.get<GetCardsApiType>('/').then(res => res.data.data)
    }
}
