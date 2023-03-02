import React from "react";
import MenuRender from "./MenuRend";
import fetching from "../../utils/services";

const getItems = () => {
    return fetching('beans/', 'GET').then ((response) => {
      if (!response.ok){
        console.log("Beans retrieved")
      }
      return {response};
    })
  }
  
const items = await getItems();


const fetcheditems = {items}.items.response.menu


export default function MenuItems() {



        const mappeditems = fetcheditems.map(x => {
            return <MenuRender
            key = {x.id}
            ItemName = {x.title}
            ItemDesc = {x.desc}
            price = {x.price}
            />
        })


    return (
        <div>
        {mappeditems}
        </div>
     )
}

