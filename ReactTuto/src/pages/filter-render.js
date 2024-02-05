import React from 'react';

const box = [
    {
        id: 0,
        name: "도로롱",
        character : "먹보"
    },
    {
        id: 1,
        name: "헤로롱",
        character : "용의혈족"
    },
    {
        id: 2,
        name: "꼬꼬닭",
        character : "장인정신"
    },
    {
        id: 3,
        name: "루나리스",
        character : "장인정신"
    },
]

// map,filter,JSX 를 이용해서 필요한 목록만 추출해보자
export default function List() {
    const goodPal = box.filter(pal =>
        pal.character === "장인정신"
    );
    const palList = goodPal.map(pal =>
    <li>
        <p><b>{pal.name}:</b>{' ' + pal.character + ' '}</p>
    </li>
    )
    return (
        <ul>{palList}</ul>
    );
}