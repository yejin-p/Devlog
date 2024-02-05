import React from 'react';

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}
function Avatar({size,color}) {
    const style = {
        backgroundColor:`${color}`,
        width: `${size}px`,
        height: `${size}px`
    }
    return (
        <div style={style}></div>
    );
  }
  
export default function Profile() {
    return (
        <Card>
            <Avatar size={100} color={"pink"} />
            <Avatar size={150} color={"black"} />
            <Avatar size={200} color={"brown"} />
        </Card>
    );
}
