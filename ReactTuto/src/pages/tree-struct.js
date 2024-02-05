import React from 'react';

// 랜더링 구조 https://react.dev/learn/understanding-your-ui-as-a-tree
export default function Tree(){
    return(
        <>
            <Child text="자식에게 바로"></Child>
            <Parent></Parent>
        </>
    )
}

export function Child({text}) {
    return <h1> text! {text}</h1>

}

export function Parent({children}) {
    const ptext = "parent"
    return (
    <>
        <Child text={ptext}></Child>
    </>
    );
}
