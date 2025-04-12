import react from "react";
import "./services.css";
import { Link, NavLink } from "react-router-dom";


export default function Services(){
    return(<div className="services">
                   <header className="services_header">
                                <div className="top_services">
                                    <div className="log_services">
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
                                <nav className="nav_services">
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
                    <main className="services_main">
                        <h1>ELEVE OS SEUS SERVICOS A OUTRO NIVEL</h1>
                        <section className="services_sec1">
                            <h2>MARCAÇÃO DE SERVICOS</h2>
                        </section>
                        <section className="services_sec1 sec2">
                            <h2>MARCAÇÃO DE SALÃO DE BELEZA</h2>
                        </section>
                        <section className="services_sec1 sec3">
                            <h2>UM LUGAR PARA O SEU NEGÓCIO</h2>
                        </section>
                        <section className="services_sec1 sec4">
                            <h2>DIVULGUE OS SEUS TRABALHOS AO MUNDO</h2>
                        </section>
                        <section className="services_sec1 sec5">
                            <h2>UM BLOG PARA OS SEU MERCADO</h2>
                        </section>
                        <section className="services_sec1 sec6">
                            <h2>MOSTRE AO MUNDO O SEU TRABALHO</h2>
                        </section>
                        <h1>SOLICITE O SERVICO QUE MAIS O IDENTIFICA</h1>
                        <ul>
                            <li> <h3> The full list of Oscar winners </h3></li>
                            <li> <h3> Zelensky bruised but determined after diplomatic whirlwind </h3></li>
                            <li> <h3> UK death rate 'reaches record low </h3></li>
                            <li> <h3> Bubble tea chain bigger than Starbucks sees shares jump on debut </h3></li>
                            <li> <h3> A payback kiss, a surprise win, and defying gravity at the Oscars </h3></li>
                            <li> <h3> Australian whose blood saved 2.4 million babies dies </h3></li>
                            <li> <h3> Stars turn on the style on Oscars red carpet - in pictures </h3></li>
                            <li> <h3> Protesters target JD Vance in Vermont after clash with Zelensky </h3></li>
                        </ul>
                        <section className="services_sec1 sec7">
                            <article className="sec7_art1">
                                <h3>VENDA MAIS RÁPIDAS A OUTRO NIVEL</h3>
                            </article>
                            <article className="sec7_art2">
                                <h3>ELEVE AS SUAS VENDAS A OUTRO NIVEL</h3>
                            </article>
                        </section>
                            <br /><br /><br /><br />
                        <section className="services_sec1 sec7">
                            <article className="sec7_art1 art3">
                                <h3>VENDA MAIS RÁPIDAS A OUTRO NIVEL</h3>
                            </article>
                            <article className="sec7_art2 art4">
                                <h3>ELEVE AS SUAS VENDAS A OUTRO NIVEL</h3>
                            </article>
                        </section>
                        <br /><br /><br /><br />
                        <ul>
                            <li> <h3> The full list of Oscar winners </h3></li>
                            <li> <h3> Zelensky bruised but determined after diplomatic whirlwind </h3></li>
                            <li> <h3> UK death rate 'reaches record low </h3></li>
                            <li> <h3> Bubble tea chain bigger than Starbucks sees shares jump on debut </h3></li>
                            <li> <h3> A payback kiss, a surprise win, and defying gravity at the Oscars </h3></li>
                            <li> <h3> Australian whose blood saved 2.4 million babies dies </h3></li>
                            <li> <h3> Stars turn on the style on Oscars red carpet - in pictures </h3></li>
                            <li> <h3> Protesters target JD Vance in Vermont after clash with Zelensky </h3></li>
                        </ul>
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

    </div>)
}

