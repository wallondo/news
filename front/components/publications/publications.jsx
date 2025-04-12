import React, { useState } from "react";
import "./publications.css";
import { Link } from "react-router-dom";


export default function Publications(){
    const [publishons,setPublishons] = useState([
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data: Date.now(),
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        },
        {
            // i=function(){
            //     let time = new Date();
            //     let data = time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay(); 
            //         return data; 
            // },
            name:"dev",
            img:"/",
            img2:"/",
            autor:"jose",
            title:"O dev Nerd".toUpperCase(),
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores dolore quaerat minus accusantium sint nis harum amet cum assumenda",
            data:null,
            gender:"Dev",
            like:0,
            not_like:0,
            huart:0,
            id:Math.round(Math.random()*10000)+"s"+Math.round(Math.random()*10000)
        }
      
    ])
    const [publishons_,setPublishons_] = useState([...publishons])
    const search = (text)=>{
        let res = publishons.filter((pub,pos)=> {return pub.name.includes(text.toLowerCase())})
        setPublishons_(res)
    }

    publishons.map((pub,pos)=>{
       
          const time = ()=>{
                let time = new Date();
                let data = time.getFullYear()+"/0"+time.getMonth()+"/0"+time.getDay(); 
                pub.data=data; 
            }
            time();
    })

    return(
        <section className="publications">
            <div className="publications_top">
             
                <div className="publications_top_search">
                    <input 
                        type="search" 
                        placeholder="Nome Da Publicação :  " 
                        onChange={(evt)=>{search(evt.target.value)}}
                        />
                    <img src="/img/lupa.png" alt="" className="lupa2"/>
                </div>
            </div>
            <ol className="list_publish">
                {
                    publishons_.map((pub,pos)=>(
                    <li className="publishion" key={pos}>
                            <div className="the_publishion" style={{backgroundImage:"url(/img/i1.jpg)"}}>
                                <h2>" {pub.title} "</h2>
                                <p>
                                    {pub.text}
                                </p>
                                <Link to={`/post/publishion_jusid/${pub.id}`} className="see_publishion">
                                    Ver a publicação
                                </Link>
                                <div className="the_publishion_react">
                                        <span><small className="good">👍</small><small className="number">{pub.like}</small></span>
                                        <span><small className="bad">👎</small><small className="number">{pub.not_like}</small></span>
                                        <span><small className="heart">💛</small><small className="number">{pub.not_like}</small></span>
                                </div>
                                <div className="the_publishion_infor">
                                    <p>Publicada por :  <em> {pub.autor} </em></p>
                                    <address>
                                        Data : {pub.data}
                                    </address>
                                </div>
                            </div>
                    </li>
                    ))
                }
                
            </ol>
        </section>
    )
}



