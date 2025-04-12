import React from "react";
import "./home.css"
import { Link, NavLink } from "react-router-dom";
import Publications from "../components/publications/publications";

export default function Home(){
    return(
        <div className="home">
            <header className="home_header">
                <div className="top_home">
                    <div className="log_home">
                            <Link>ANGO-NEWS</Link>
                           <h4>Traga e publique as últimas Novidades</h4>
                    </div>
                    <div className="log_op">
                       <span>
                        <img src="/img/user.jpg" alt="" />
                        <h3>Entrar</h3>
                       </span>
                    </div>
                </div>
                <nav className="nav_home">
                    <ol>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/news"}>Noticias</NavLink></li>
                        <li><NavLink to={"/post"}>Postagens</NavLink></li>
                        <li><NavLink to={"/services"}>Serviços</NavLink></li>
                        <li><NavLink to={"/talking"}>Bate-Papo</NavLink></li>
                    </ol>
                    <div>
                        <h2>Pontos Em Destaques</h2>
                        <span>
                            <p> Gerra em Israel-Gaza</p><p> Estado crítico na Ukraine</p><p> US e Canada</p><p> Africa</p><p> Angola</p><p> Luanda</p><p> Brazil</p><p> Portugal</p>
                        </span>
                        <span>
                            <p> US e Canada</p><p> Africa</p><p> Angola</p><p> Luanda</p><p> Brazil</p><p> Portugal</p>
                        </span>
                    </div>
                </nav>
            </header>
            <h1>Mundo</h1>
            <h2>ESTADO ALARMANTE ENTRE A UCRANIA E EUROPA</h2>
            <div className="slid_home">
                    <video loop autoPlay muted>
                        <source  src="/video/v3.mp4" type="video/mp4"/>
                    </video>
            </div>
            <section className="publish_home">
                <h1>Notícias</h1>
                <div className="div_publish_home">
                    <div>
                        <article>
                            <span>
                                <h2>
                                    Zelensky stresses gratitude to US and praises European 'unity' after weekend of talks
                                </h2>
                                <p>
                                The Ukrainian president says "security guarantees" are the key to any peace deal, following talks hosted by the UK and a fiery exchange with Trump.
                                </p>
                            </span>
                            <span>
                                <img src="/img/zz.jpg" alt="" />
                            </span>
                        </article>
                    </div>
                    <div>
                        <article>
                            <div>
                                <img src="/img/zz2.jpg" alt="" />
                            </div>
                            <div>
                                <h2>
                                    Bruised but upbeat: Zelensky heads home after diplomatic whirlwind
                                </h2>
                                <p>
                                    The Ukrainian president is standing firm after his Oval Office clash with Donald Trump, says the BBC's Laura Kuenssberg.
                                </p>
                            </div>

                        </article>
                    </div>
                </div>
                <h2>GERRA</h2>
                <div className="div_publish_home_2">
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                </div>
                <h2>ECONOMIA</h2>
                <div className="div_publish_home_2">
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                </div>
                <h2>TECNOLOGIA</h2>
                <div className="div_publish_home_2">
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                </div>
                <h2>SAÚDE</h2>
                <div className="div_publish_home_2">
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                    <article>
                        <img src="/img/zz.jpg" alt="" />
                        <h3>
                            Anora sweeps Oscars with best picture, best director and best actress for Mikey Madison
                        </h3>
                        <p>
                            Director Sean Baker makes history by winning five awards for the same film for Anora, about a sex worker who has a romance with a Russian oligarch's son.
                        </p>
                        <address>2005/03/07</address>
                                
                    </article>
                </div>
            </section>
            <h2 className="h2_publications end">Publicações Recententes</h2>
            <Publications/>
            <h1 className="h2_publications">Serviços a tua Desposição</h1>
            <section className="sec_serv">
                    <article>
                            <div>
                                <img src="/img/s0.jpg" alt="" />
                            </div>
                            <div>
                                <span>
                                    <img src="/img/s1.jpg" alt="" />
                                </span>
                                <span>
                                    <img src="/img/s2.jpg" alt="" />
                                </span>
                            </div>
                            <div className="interece">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                    </article>
                    <article className="art_ser1">
                            <div>
                                    <img src="/img/s3.jpg" alt="" />
                            </div>
                            <div>
                                <span>
                                    <img src="/img/s4.jpg" alt="" />
                                </span>
                                <span>
                                <img src="/img/s5.jpg" alt="" />
                                </span>
                            </div>
                            <div className="interece">
                                    <h3>Lojas Virtuas PARA TODO TIPO DE NEGÓCIOS</h3>
                                    <Link>Solicitar</Link>
                            </div>
                    </article>
                    <article className="port_sec3">
                        <article className="port_art1">
                            <img src="/img/port1.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port2.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port3.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port4.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port5.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port6.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port7.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                        <article className="port_art1">
                            <img src="/img/port8.jpg" alt="" />
                            <div className="interece2">
                                    <h3>BLOGS PARA OS SEUS NEGÓCIOS OU INTERECES</h3>
                                    <Link>Solicitar</Link>
                            </div>
                        </article>
                    </article>
            </section>
           
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
                                    <button>Enviar</button>
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
