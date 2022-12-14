import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const Jumbotron = ()=>{
    return (
        <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">A Warm Welcome!</h1>
            <p class="lead"><LoremIpsum avgSentencesPerParagraph={6}/></p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    );
};

export default Jumbotron;