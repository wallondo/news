import React from "react";
import "./news.css";
import { Link, NavLink } from "react-router-dom";

export default function News(){


    return(
        <div className="news">
                <header className="news_header">
                    <div className="top_news">
                        <div className="log_news">
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
                    <nav className="nav_news">
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
                    <div className="destaks_news">
                        <h2>Assuntos relevantes</h2>
                        <ol>
                            <li>Gerra em Israel-Gaza</li>
                            <li>Estado crítico na Ukraine</li>
                            <li>US e Canada</li>
                            <li>Africa</li>
                            <li>Angola</li>
                            <li>Luanda</li>
                            <li>Brazil</li>
                            <li>Portugal</li>
                        </ol>
                    </div>
                </header>
                <div className="news_slid">
                    <section className="news_slid_slid">
                            <div className="novas">
                                <article className="slid1_art1" id="slid1">
                                    <img src="/img/car.png" alt="" />
                                    <h2>
                                        Grupos dançaram com bravura no desfile da classe B do Carnaval
                                    </h2>
                                    <p>
                                        Os 11 grupos carnavalescos da classe B, de adultos, ontem, na pista 
                                        da Marginal da Praia do Bispo, em Luanda, dançaram com bastante euforia, 
                                        bravura e determinação, o Carnaval, a maior manifestação cultural do país.
                                        Durante a exibição os grupos aproveitaram o momento para reviver o simbolismo 
                                        e a magnitude dos 50 anos de Independência,
                                        sob o lema “Preservar e valorizar as conquistas alcançadas, 
                                        construindo um futuro melhor”.
                                    </p>
                                </article>
                            </div>
                            <article>
                                <div>
                                    <img src="/img/jj.jpg" alt="" />
                                </div>
                                <div>
                                <h2>“Partiu para a eternidade um homem corajoso, patriota namibiano convicto”</h2>
                                <p>  O Chefe de Estado angolano, João Lourenço, assinalou, sexta-feira, em Windhoek, durante a cerimónia fúnebre do Fundador da Nação namibiana, que partiu para a eternidade um homem corajoso, patriota convicto e um filho genuíno de África, 
                                    que se tornou um ícone da luta pelo resgate da dignidade e soberania do seu povo.
                                </p>
                                </div>
                            </article>
                    </section>
                    <h1 className="padd">ÚLTIMAS 24H</h1>
                </div>
                <section className="publicacoes_dest">
                    <h1 className="padd">Destaques e Novas</h1>
                    <h2 className="padd">ESTADO E POLITICA</h2>
                    <br />
                    <section className="publicacoes_dest_sec">
                        <article>
                                <div>
                                    <img src="/img/jj.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>“Partiu para a eternidade um homem corajoso, patriota namibiano convicto”</h2>
                                    <p>  O Chefe de Estado angolano, João Lourenço, assinalou, sexta-feira, em Windhoek, durante a cerimónia fúnebre do Fundador da Nação namibiana, que partiu para a eternidade um homem corajoso, patriota convicto e um filho genuíno de África, 
                                        que se tornou um ícone da luta pelo resgate da dignidade e soberania do seu povo.
                                    </p>
                                </div>
                        </article>
                        <article>
                                <div>
                                    <img src="/img/jj.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>“Partiu para a eternidade um homem corajoso, patriota namibiano convicto”</h2>
                                    <p>  O Chefe de Estado angolano, João Lourenço, assinalou, sexta-feira, em Windhoek, durante a cerimónia fúnebre do Fundador da Nação namibiana, que partiu para a eternidade um homem corajoso, patriota convicto e um filho genuíno de África, 
                                        que se tornou um ícone da luta pelo resgate da dignidade e soberania do seu povo.
                                    </p>
                                </div>
                        </article>
                        <article>
                                <div>
                                    <img src="/img/jj.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>“Partiu para a eternidade um homem corajoso, patriota namibiano convicto”</h2>
                                    <p>  O Chefe de Estado angolano, João Lourenço, assinalou, sexta-feira, em Windhoek, durante a cerimónia fúnebre do Fundador da Nação namibiana, que partiu para a eternidade um homem corajoso, patriota convicto e um filho genuíno de África, 
                                        que se tornou um ícone da luta pelo resgate da dignidade e soberania do seu povo.
                                    </p>
                                </div>
                        </article>
                        <article>
                                <div>
                                    <img src="/img/jj.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>“Partiu para a eternidade um homem corajoso, patriota namibiano convicto”</h2>
                                    <p>  O Chefe de Estado angolano, João Lourenço, assinalou, sexta-feira, em Windhoek, durante a cerimónia fúnebre do Fundador da Nação namibiana, que partiu para a eternidade um homem corajoso, patriota convicto e um filho genuíno de África, 
                                        que se tornou um ícone da luta pelo resgate da dignidade e soberania do seu povo.
                                    </p>
                                </div>
                        </article>
                    </section>
                    <h2>DESENVOLVIMENTO E ECONOMIA</h2>
                    <br />
                        <section className="economia">
                            <article>
                                    <div>
                                        <img src="/img/casa.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h2>Banca comercial regista entrada de 10,8 mil milhões de dólares</h2>
                                        <p> A banca comercial angolana absorveu, em 2024, um total de 10,8 mil milhões de dólares do mercado cambial para atender as necessidades internas, um aumento de 9,8 por cento face aos 9,9 mil milhões adquiridos no ano anterior, aponta o relatório do Banco Nacional de Angola (BNA).
                                        </p>
                                    </div>
                            </article>
                            <div className="economia_div">
                                <article>
                                    <div>
                                        <img src="/img/agr.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h2>Toneladas de Grão de Arroz para os meses vindoros , Afirma BNI</h2>
                                        <p> A banca comercial angolana absorveu, em 2024, um total de 10,8 mil milhões de dólares do mercado cambial para atender as necessidades internas, um aumento de 9,8 por cento face aos 9,9 mil milhões adquiridos no ano anterior, aponta o relatório do Banco Nacional de Angola (BNA).
                                        </p>
                                    </div>
                                </article>
                                <article>
                                    <div>
                                        <img src="/img/agr.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h2>Toneladas de Grão de Arroz para os meses vindoros , Afirma BNI</h2>
                                        <p> A banca comercial angolana absorveu, em 2024, um total de 10,8 mil milhões de dólares do mercado cambial para atender as necessidades internas, um aumento de 9,8 por cento face aos 9,9 mil milhões adquiridos no ano anterior, aponta o relatório do Banco Nacional de Angola (BNA).
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <section className="coments">
                            <h1 className="padd">Comentários</h1>
                              <ol>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="coment">
                                        <span style={{backgroundImage:"url(/img/jj.jpg)"}}>
                                            
                                        </span>
                                        <h2>Economia Estatal</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cupiditate consequatur repellendus quis dolores nam numquam
                                            magnam quo fugit optio quaerat.
                                        </p>
                                            <small>
                                                <address> Publicada por : JOSE Quitumba</address>
                                                <address>2025/04/25</address>
                                            </small>
                                    </div>
                                </li>
                              </ol>
                              <form action="" method="post">
                                <img src="/img/ola4.png" alt="" className="ola"/>
                                <span>
                                    <h2>Deixe a sua Opinião</h2>
                                    <div>
                                        <label htmlFor="">Nome</label>
                                        <input type="text" placeholder="Nome : "/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Opiniao</label>
                                        <textarea name="" id=""></textarea>
                                    </div>
                                    <div>
                                        <p>Tudo bem aqui</p>
                                        <button>Deixar</button>
                                    </div>
                                </span>
                              </form>
                        </section>
                    <h1 className="padd">Mundial</h1>
                    <h2 className="padd">Europa e Mundo</h2>
                        <section className="word">
                                <article>
                                    <img src="/img/z.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/www.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/gg.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/z.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/www.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/gg.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/z.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/www.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/gg.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/z.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/www.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                                <article>
                                    <img src="/img/gg.jpg" alt="" />
                                    <h3>
                                        Ukraine still 'ready' to sign US minerals deal, Zelensky tells BBC
                                    </h3>
                                    <p>
                                        Donald Trump will not get involved in security 
                                        guarantees for Ukraine, but can Europe fill the gap?
                                    </p>
                                    <small>
                                        <address>Publicada Por :  Pedro da cruz </address>
                                        <address>2025/04/05</address>
                                    </small>
                                </article>
                        </section>
                </section>
                <h1 className="padd">Mais Lidas</h1>
                <section className="lidas">
                        <ol>
                            <li>The full list of Oscar winners</li>
                            <li>Australian whose blood saved 2.4 million babies dies</li>
                            <li>Zelensky bruised but determined after diplomatic whirlwind</li>
                            <li>Stars turn on the style on Oscars red carpet - in pictures</li>
                            <li>UK death rate 'reaches record low'</li>
                            <li>Protesters target JD Vance in Vermont after clash with Zelensky</li>
                            <li>Bubble tea chain bigger than Starbucks sees shares jump on debut</li>
                            <li>Dozens found alive in metal containers after India avalanche</li>
                            <li>A payback kiss, a surprise win, and defying gravity at the Oscars</li>
                            <li>Starmer announces 'coalition of the willing' to guarantee Ukraine peace</li>
                        </ol>
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