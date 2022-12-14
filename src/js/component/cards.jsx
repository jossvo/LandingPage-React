import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
const cardContent=[
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/asda/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/xcasd/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/gfhs/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/dfgh/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/wrw/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/fghh/500/325"},
    {title:"Hola",text:<LoremIpsum avgSentencesPerParagraph={2}/>,img:"https://picsum.photos/seed/weqfd/500/325"}
]

const Cards = ()=>{
    return (
        <div className="container">
            <div className="row" style={{display:"flex",flexFlow: "row wrap"}}>
                {cardContent.map(elem=>{
                    return (
                        <div className="col-xs-12 col-sm-12 col-md-3 d-flex align-items-stretch ">
                            <div className="card" style={{marginBottom:"10%"}}>
                                <img src={elem.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign:"center"}}>{elem.title}</h5>
                                    <p className="card-text" style={{textAlign:"center"}}>{elem.text}</p>
                                    
                                </div>
                                <hr style={{marginBottom:"0%"}}/>
                                <div className="d-flex justify-content-center bg-light" style={{paddingTop:"5%",paddingBottom:"5%"}}>
                                    <a href="#" className="btn btn-primary">Find out more!</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Cards;