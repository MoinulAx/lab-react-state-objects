import React from "react";
import menuItems from "./data";

function MenuFunction({items,setItems,total,setTotal}){

    function addMenuItem(food){
        setItems([...items, food])
        setTotal(total + food.price)
    }
    
    return (
        menuItems.map(elementObj  => {
        return (
            <tr onClick={() => addMenuItem(elementObj)} key = {elementObj.id}>
                <div className="head">
                    <p>{elementObj.name}</p>
                    <p>{elementObj.image}</p>
                    <p>{elementObj.price}</p>
                </div>
                <div className="spice">
                    {[...Array(elementObj.spiceLevel)].map(()=>{
                        return <span>🌶️</span>
                    })}
                </div>
            </tr>
        )

        })
    )


}



export default MenuFunction;