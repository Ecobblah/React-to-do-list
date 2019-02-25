import React from 'react';

const Items = ({items, deleteItems}) => {
    
    // holds the list of items
    const itemList = items.map(i=>{
        return(
            <div onClick={()=>{deleteItems(i.id)}} key ={i.id}>
                <li class="list-group-item">{i.item}</li>
            </div>
        );
    })
    
    return(
        <div className="container">
            <ul className="list-group">
                {itemList}
            </ul>
        </div>
    );
}

export default Items;
