import React, {useState} from 'react';

let Article = ({book}) => {

    const [oeuvre, setOeuvre] = useState(book);

    return(
        <div id="allArticles">
    
            {
                oeuvre[0].map((titre,index)=>{
                    return (
                        <div id="article-item">
                            <span>{index +1}</span>
                            <h1 key={index}>{titre.title}</h1>
                            <span>{oeuvre[1][index].author}</span> <br/> <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti quos assumenda sit commodi amet ut tenetur rerum laudantium non. Impedit, pariatur accusamus quod nulla unde voluptates magnam aspernatur fuga!</p>
                        </div>
                    )
                })
            }
            
        </div>
    );

}

export default Article