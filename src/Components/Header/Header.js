import React from 'react';
import Tachyons from 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';
import {Navbar,Nav,NavDropdown, Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import '../../util/css/app.css';
import o from '../../util/assets1/1.jpg';
import Logo from '../../util/assets1/brick-logo.png'
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Languagenav from '../Languagenav/Languagenav';
// import News from '../../util/articles/article1.pdf';
// import Application_form from '../../util/articles/application_form.pdf';




const Header = (props) => {

    return(

        <MyContext.Consumer>
            {(context)=>(
                <React.Fragment>
                    {(()=>{
                        if(context.state.language === 'hindi'){
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationHIN.header.title}</p>
                                            <p className="white header">{translationHIN.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 ">{translationHIN.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  ">{translationHIN.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/management'>
                                                    <p className="pointer dim link mt1 optionnew">{translationHIN.header.nav.suboption1}</p>
                                                </Link>
                                                <Link to='executives'>
                                                    <p className="pointer dim link optionnew">{translationHIN.header.nav.suboption2} </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  ">{translationHIN.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <a href='https://drive.google.com/file/d/1BPCIDVEDIqngjHT-E0pLCaMC480V8UbN/view?usp=sharing' target="_blank">
                                                    <p className="pointer dim link mt1 center optionnew">{translationHIN.header.nav.suboption3}</p> 
                                                </a>
                                                <Link to='lifemembers' >
                                                    <p className="pointer dim link optionnew">{translationHIN.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationHIN.header.nav.suboption5}</p>
                                                </Link>
                                                <Link to='/vendors'>
                                                    <p className="pointer dim link mt1 optionnew">{translationHIN.header.nav.suboption6}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/articles'>
                                                    <p className="pointer dim link  mt1 optionnew">{translationHIN.header.nav.suboption7}</p>
                                                </Link>
                                                <Link to="/newscontent">
                                                    <p className="pointer dim link mt1 center optionnew">{translationHIN.header.nav.suboption8}</p> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">{translationHIN.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">{translationHIN.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">{translationHIN.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                    
                                </div>

                            );
                        }else if(context.state.language === 'punjabi'){
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationPUN.header.title}</p>
                                            <p className="white header">{translationPUN.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 grow">{translationPUN.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  grow">{translationPUN.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/management'>
                                                    <p className="pointer dim link mt1 optionnew">{translationPUN.header.nav.suboption1}</p>
                                                </Link>
                                                <Link to='executives'>
                                                    <p className="pointer dim link optionnew">{translationPUN.header.nav.suboption2} </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationPUN.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <a href='https://drive.google.com/file/d/1BPCIDVEDIqngjHT-E0pLCaMC480V8UbN/view?usp=sharing' target="_blank">
                                                    <p className="pointer dim link mt1 center optionnew">{translationPUN.header.nav.suboption3}</p> 
                                                </a>
                                                <Link to='lifemembers' >
                                                    <p className="pointer dim link optionnew">{translationPUN.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationPUN.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationPUN.header.nav.suboption5}</p>
                                                </Link>
                                                <Link to='/vendors'>
                                                    <p className="pointer dim link mt1 optionnew">{translationPUN.header.nav.suboption6}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationPUN.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/articles'>
                                                    <p className="pointer dim link  mt1 optionnew">{translationPUN.header.nav.suboption7}</p>
                                                </Link>
                                                <Link to="/newscontent">
                                                    <p className="pointer dim link mt1 center optionnew">{translationPUN.header.nav.suboption8}</p> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">{translationPUN.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">{translationPUN.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">{translationPUN.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                    
                                </div>

                            );
                        }else if(context.state.language === 'marathi'){
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationMAR.header.title}</p>
                                            <p className="white header">{translationMAR.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 grow">{translationMAR.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  grow">{translationMAR.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/management'>
                                                    <p className="pointer dim link mt1 optionnew">{translationMAR.header.nav.suboption1}</p>
                                                </Link>
                                                <Link to='executives'>
                                                    <p className="pointer dim link optionnew">{translationMAR.header.nav.suboption2} </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationMAR.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <a href='https://drive.google.com/file/d/1BPCIDVEDIqngjHT-E0pLCaMC480V8UbN/view?usp=sharing' target="_blank">
                                                    <p className="pointer dim link mt1 center optionnew">{translationMAR.header.nav.suboption3}</p> 
                                                </a>
                                                <Link to='lifemembers' >
                                                    <p className="pointer dim link optionnew">{translationMAR.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationMAR.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationMAR.header.nav.suboption5}</p>
                                                </Link>
                                                <Link to='/vendors'>
                                                    <p className="pointer dim link mt1 optionnew">{translationMAR.header.nav.suboption6}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationMAR.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/articles'>
                                                    <p className="pointer dim link  mt1 optionnew">{translationMAR.header.nav.suboption7}</p>
                                                </Link>
                                                <Link to="/newscontent">
                                                    <p className="pointer dim link mt1 center optionnew">{translationMAR.header.nav.suboption8}</p> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">{translationMAR.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">{translationMAR.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">{translationMAR.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                    
                                </div>

                            );
                        }else if(context.state.language === 'gujarati'){
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationGUJ.header.title}</p>
                                            <p className="white header">{translationGUJ.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 grow">{translationGUJ.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  grow">{translationGUJ.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/management'>
                                                    <p className="pointer dim link mt1 optionnew">{translationGUJ.header.nav.suboption1}</p>
                                                </Link>
                                                <Link to='executives'>
                                                    <p className="pointer dim link optionnew">{translationGUJ.header.nav.suboption2} </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationGUJ.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <a href='https://drive.google.com/file/d/1BPCIDVEDIqngjHT-E0pLCaMC480V8UbN/view?usp=sharing' target="_blank">
                                                    <p className="pointer dim link mt1 center optionnew">{translationGUJ.header.nav.suboption3}</p> 
                                                </a>
                                                <Link to='lifemembers' >
                                                    <p className="pointer dim link optionnew">{translationGUJ.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationGUJ.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationGUJ.header.nav.suboption5}</p>
                                                </Link>
                                                <Link to='/vendors'>
                                                    <p className="pointer dim link mt1 optionnew">{translationGUJ.header.nav.suboption6}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationGUJ.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/articles'>
                                                    <p className="pointer dim link  mt1 optionnew">{translationGUJ.header.nav.suboption7}</p>
                                                </Link>
                                                <Link to="/newscontent">
                                                    <p className="pointer dim link mt1 center optionnew">{translationGUJ.header.nav.suboption8}</p> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">{translationGUJ.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">{translationGUJ.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">{translationGUJ.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                    
                                </div>

                            );
                        }else{
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationEN.header.title}</p>
                                            <p className="white header">{translationEN.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 link">{translationEN.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  ">{translationEN.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/management'>
                                                    <p className="pointer dim link mt1 optionnew">{translationEN.header.nav.suboption1}</p>
                                                </Link>
                                                <Link to='executives'>
                                                    <p className="pointer dim link optionnew">{translationEN.header.nav.suboption2} </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  ">{translationEN.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <a href='https://drive.google.com/file/d/1BPCIDVEDIqngjHT-E0pLCaMC480V8UbN/view?usp=sharing' target="_blank">
                                                    <p className="pointer dim link mt1 center optionnew">{translationEN.header.nav.suboption3}</p> 
                                                </a>
                                                <Link to='lifemembers' >
                                                    <p className="pointer dim link optionnew">{translationEN.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  ">{translationEN.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationEN.header.nav.suboption5}</p>
                                                </Link>
                                                <Link to='/vendors'>
                                                    <p className="pointer dim link mt1 optionnew">{translationEN.header.nav.suboption6}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  ">{translationEN.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/articles'>
                                                    <p className="pointer dim link  mt1 optionnew">{translationEN.header.nav.suboption7}</p>
                                                </Link>
                                                <Link to="/newscontent">
                                                    <p className="pointer dim link mt1 center optionnew">{translationEN.header.nav.suboption8}</p> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6   ">{translationEN.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6   ">{translationEN.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 ">{translationEN.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                    
                                </div>
                                
                            );
                        }
                    })()}
                </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}


export default Header;