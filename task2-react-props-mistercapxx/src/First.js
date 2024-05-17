import React from "react";
export default function First(chinazes)
{
    const firstItem = chinazes.firstList[0];
    const lowercaseText = firstItem ? firstItem.toLowerCase() : '';
    return (
        <div>{lowercaseText}</div>
    )

}



