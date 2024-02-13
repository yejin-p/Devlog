import React from 'react';
import { useState } from 'react';

export default function Object() {
    const palbox= [
        {   name: '헤로롱', 
            id: '1',
            character: { level: 20, attack: 300, defense: 150 }
        },
        {   name: '초판다', 
            id: '2',
            character: { level: 23, attack: 320, defense: 200 }
        },
    ]
    const [palList, setpalList] = useState(palbox); //객체 배열 선언

    // 객체 변경 이벤트
    function handleIncreaseLevel(id) {
        setpalList(palList.map(pal =>{
            if(pal.id === id){
                return{...pal, character : {...pal.character, level: parseInt(pal.character.level)+1}}
            }else{
                return pal;
            }
        }
            ));
    }
    return (
        <>  
            <div>
                {palList.map(pal =>(
                    <li key={pal.id} style={{listStyleType:"none", margin:"20px", marginBottom:"30px"}}>
                        <a> Name: {pal.name} </a>
                        <br></br>
                        <a> Id: {pal.id} </a>
                        <br></br>
                        <a>
                            Level: {pal.character.level} 
                            <button onClick={()=>handleIncreaseLevel(pal.id)}>UP</button> &nbsp;&nbsp;
                        </a>
                        <a>
                            Attack: {pal.character.attack} &nbsp;&nbsp;
                        </a>
                        <a>
                            Defense: {pal.character.defense} 
                        </a>           
                    </li>
                ))}

            </div>
        </>
    );
}