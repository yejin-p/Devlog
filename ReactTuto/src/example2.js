import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

// 리액트 공식 튜토리얼 Updating Objects in State 예제를 useImmer 사용하여 변경한 버전
let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false }
];

// ### UseImmer는 불변성을 유지해준다는데 이게 뭔 뜻일까? 고찰

// # 1. 불변성이란 무엇인가?
// '불변성'의 사전적 정의는 '생성 후 상태를 바꿀 수 없다'는 뜻이다.
// React는 참조하고 있는 값이 변경되지 않는다는 것을 전제로 한다는 뜻이다. 무슨 뜻이냐면,
// const panda = {name : "판다"}
// const copy = panda
// copy.name = "사자"
// console.log(panda)하면?
// "사자" 라고 찍힌다. 
// copy는 panda를 가리키는 참조변수일 뿐 새로 생성된 객체가 아니다.(얕은복사)

// 한편, 컴포넌트는 부모에게 받은 Props나 자신의 State가 변경될때 리렌더링이 일어난다.
// 그리고 이 '변경을 인식하는 지점'은 '참조하는게 다를때' 이다.
// 즉 얕은복사하면 참조하는 객체가 변경되지 않았다고 생각하여 리렌더링 하지 않는다.
// 바꿔말하면, 리렌더링이 일어나기 위해서는 그 객체의 참조를 바꿔줘야한다.
// 지금까지 튜토리얼에서 써왔던 스프레드 연산자(...) 는 객체 내부의 각 값을 깊은 복사 해서 참조값을 바꿔주기 위한 과정들이었던것이다.
// 결론적으로, UseImmer는 객체의 불변성을 유지하면서 참조값을 바꿔주는 과정에서 깊은 복사 어쩌구 저쩌구 하는 과정을 줄여주려고 나온 친구다.


// # 2. 리액트에서 Const로 useState를 정의하는 이유, 왜 React의 객체는 불변성을 유지해야하는가?
// 앞선 불변성의 정의와 비슷한 맥락의 얘기이다.
// React는 보편적으로 State 와 같은 객체를 const로 정의한다. 
// 처음에는 의아했다. '엥 리액트는 상태관리가 중요하다매. 바뀌는데 왜 let이 아니라 const임?? 이상해요'
// const 쓰는 이유는 한번 정의한 변수를 다시 재정의하지 못하게 하려고 하는것이다.

// 위에서 React는 참조하는게 달라졌을때 상태변화를 감지하고 리렌더를 한다고 했었다.
// '변경을 인식하는 지점'이 '참조하는게 다를때' 인데, 만약 참조하는 객체 내부 값이 변화한다고 생각하면..? React 입장에서는 너무 신경쓸게 많을것이다.
// 그래서 '난 참조가 달라지면 다시 컴포넌트 그려줄테니까 그 안에 값의 변경까진 난 잘 모르겠다?'
// 이말은 즉슨 너가 알아서 그 안에 값은 변하지 않게 처신 잘하라는 이야기다.
// 다시 돌아와서, 그런데 만약 state를 let으로 정의해버리면, 내가 관리하고 있는 상태가 재정의 되어 변경될 여지를 줘 버리는 것이다.
// 이것을 방지하기 위해 const로 "나는 중간에 바뀌지 않을것이오" 하는것이다.


// # 3. 그래서 useImmer는 어떻게 동작하는 것일까
// 사실 여기까지 파먹는게 맞나? 싶다가 원리만 파악하자면,,
// 객체를 트리 구조화 시키고 원래데이터랑 데이터 복사본을 둘이 비교한다. 
// 만약 변경점이있으면 변경점 이하의 서브 트리만을 변경하여 변경을 최소화 하는 방식을 택한다- 정도로만 이해했다 ^-^ 

// 참조한 쩌는글
// https://ui.toast.com/posts/ko_20220217 
// https://medium.com/hackernoon/introducing-immer-immutability-the-easy-way-9d73d8f71cb3#3bff

export default function TaskApp() {
    const [todos, setTodos] = useImmer(
        initialTodos
    );
    
    function handleAddTodo(title) {
        setTodos(draft =>{
            draft.push({
                id:nextId++,
                title:title,
                done:false
            })
        })
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return nextTodo;
            } else {
                return todo;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}