import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./post.css";
import Publications from "../components/publications/publications";


export default function Post(){
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
                huart:0
            },
          
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
        <div className="post">
            <header className="post_header">
                <div className="top_post">
                    <div className="log_post">
                            <Link>ANGO-NEWS</Link>
                            <h4> Traga e publique as últimas Novidades</h4>
                    </div>
                    <div className="log_op">
                       <span>
                       <img src="/img/user.jpg" alt="" />
                        <h3>Entrar</h3>
                       </span>
                    </div>
                    
                </div>
                <nav className="nav_post">
                    <ol>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/news"}>Noticias</NavLink></li>
                        <li><NavLink to={"/post"}>Postagens</NavLink></li>
                        <li><NavLink to={"/services"}>Serviços</NavLink></li>
                        <li><NavLink to={"/talking"}>Bate-Papo</NavLink></li>
                    </ol>
                    <div>
                       
                    </div>
                </nav>
            </header>
            <div className="slid_home">
                    <div className="slid_video_div">
                        <video autoPlay muted loop={true}>
                            <source src="../video/v1.mp4" type="video/mp4" loop/>
                            sem suporte para video
                        </video>
                    </div>
                    <button>Encomendar</button>
            </div>
                <h1>Postagem</h1>
            <main className="post_main">
                <section>
                        <Outlet/>
                </section>
                <h1>Restantes Postagens</h1>
                <section>
                    <div className="post_bt">
                        <button className="bt">postar</button>
                    </div>
                    <Publications/>
                </section> 
            </main>
              <footer className="footer_home">
                              <div className="footer_home_div">
                              <section className="sec_about">
                                        <h3>
                                                Sobre a <br /> 
                                            <span>ANGO-NEWS</span>
                                        </h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto enim, necessitatibus libero voluptatum quae quis
                                            blanditiis corporis aliquam est velit rem ipsa distinctio
                                            commodi, repellat doloremque illo repellendus consectetur qui!
                                        </p>
                                        <h3>
                                                Ainda mais sobre <br /> 
                                            <span>ANGO-NEWS</span>
                                        </h3>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Architecto enim, necessitatibus libero voluptatum quae quis
                                                blanditiis corporis aliquam est velit rem ipsa distinctio
                                                commodi, repellat doloremque illo repellendus consectetur qui!
                                            </p>
                                </section>
                                <section className="just_published">
                                    <div>
                                        <h3>Contacte-nos</h3>
                                        <ol>
                                            <li><address> <img src="/img/what.jpg" alt="" /> (+244) 941-137-038 whatzapp only</address></li>
                                            <li><address> <img src="/img/cell.jpg" alt="" /> (+244) 952-687-217 call</address></li>
                                            <li><address> <img src="/img/gml.jpg"alt="" /> quinguri@gmail.com</address></li>
                                            <li><address> <img src="/img/git.jpg"  alt="" className="git"/> github.com/wallondo</address></li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h4>Outros Sites</h4>
                                        <ol>
                                            <li><Link to="http://">github.com//wallondo</Link></li>
                                            <li><Link to="http://">imobiliarios de venda</Link></li>
                                            <li><Link to="http://">Eletronicos</Link></li>
                                            <li><Link to="http://">portifólio</Link></li>
                                            <li><Link to="http://">bate-papo</Link></li>
                                        </ol>
                                    </div>
                                </section>
                                <section className="parcer">
                                        <div>
                                            <h4>Torne-se um parceiro</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                nemo ducimus maxime quidem mollitia.
                                            </p>
                                            <div>
                                                <input type="number" min={900000000} placeholder="Número de celular : (+244)" />
                                            </div>
                                            <p>
                                                Nnemo ducimus maxime quidem mollitia.
                                            </p>
                                                <button>send</button>
                                        </div>
                                </section>
                              </div>
                              <div className="copryte">
                                    <p>copiryte@ 2025/03/01 by Quinguri</p>
                                    <address><Link>www.vercel.quinguri_dev_fullStack</Link></address>
                                    <div>
                                        <Link><img src="/img/what.png" alt="" /></Link>
                                        <Link><img src="/img/gml.png" alt="" /></Link>
                                        <Link><img src="/img/gps.png" alt="" /></Link>
                                        <Link><img src="/img/icon2.png" alt="" /></Link>
                                        <Link><img src="/img/cell.png" alt="" /></Link>
                                    </div>
                              </div>
                        </footer>
        </div>
    )
}