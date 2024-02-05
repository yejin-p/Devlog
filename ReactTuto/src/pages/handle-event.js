import React from 'react';
import { box } from './palbox.js';
import { useState } from 'react';

export default function Event() {
    const [index, setIndex] = useState(0);  //페이지 인덱스
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < box.length - 1;
    const hasPrev = index > 0;

    // 현재 이벤트 핸들러 안에 정의된 상태는 setIndex(0+1); setIndex(0+2); setIndex(0+3); 을 호출 한뒤 결과를 보여주는 것과 같다.
    // 이는 마치 식당에서 토마토 스파게티 주세요! 아 아아니 바질 토마토 스파게티 주세요! 어! 아니? 치즈 토마토 스파게티 주세요! 한다고 해서 
    // 마지막에 냅다 부른 치즈 토마토 스파게티를 주는거지 이 세개를 다 줬다가는 고객님이 상을 뒤엎을지도 모른다.

    // 그러나 어떤 경우에서는 state 값을 업데이트 하면서 요리저리 바꾸고 싶을때도 있다.
    // 리액트는 이를위해 상태업데이트 들을 상태큐에 넣어놓고 기다린다.
    // 리 랜더링 하기 전 상태 큐의 값을 업데이트-리턴하며 최종 결과를 만들어 낸다.
    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
            setIndex(index + 2);
            setIndex(index + 3);
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handlePreviousClick(){
        if(hasPrev){
            setIndex(n => n-1);
            // setIndex(n => n-1); //2씩 증가
        }else{
            setIndex(box.length-1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let palList = box[index];
    return (
        <div style={{marginLeft: "50px", marginTop: "30px"}}>
            <button onClick={handlePreviousClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
            <h1>팰상자</h1>
            <h2>
                <p>{palList.name}</p>
                <p>{index+1} of {box.length}</p>
            </h2>
            <button onClick={handleMoreClick}>상세보기</button>
            {showMore && <p>속성 :{palList.character}</p>}
        </div>
    );
}