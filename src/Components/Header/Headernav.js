import React, {Component } from 'react';
import 'tachyons';
import {Navbar,Nav,NavDropdown, Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';



import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import '../../util/css/app.css';
import Languagenav from '../Languagenav/Languagenav';





class Headernav extends Component {
    render(){
        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <div>
                                        <Navbar  collapseOnSelect justify expand="lg" bg="light" variant="dark">
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="mr-auto navigation">
                                                    <NavDropdown title={translationHIN.header.nav.option2} id="collasible-nav-dropdown">
                                                        <Link to='/management'>
                                                            <p className="menuitem">{translationHIN.header.nav.suboption1}</p>
                                                        </Link>
                                                        <Link to="/executives">
                                                            <p className="menuitem" >{translationHIN.header.nav.suboption2}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationHIN.header.nav.option3} id="collasible-nav-dropdown">
                                                            <a target="_blank" href="https://drive.google.com/file/d/1MfnvLV60al_8tiZF2wL5aaFG79bSIXGp/view?usp=sharing">
                                                               <p  className="menuitem">{translationHIN.header.nav.suboption3}</p>
                                                            </a>
                                                        <Link to="/lifemembers">
                                                            <p className="menuitem" >{translationHIN.header.nav.suboption4}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationHIN.header.nav.option4} id="collasible-nav-dropdown">
                                                        <Link to="/machines">
                                                            <p href="" className="menuitem">{translationHIN.header.nav.suboption5} </p>
                                                        </Link>
                                                        <Link to="/vendors">
                                                            <p className="menuitem" >{translationHIN.header.nav.suboption6}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationHIN.header.nav.option5} id="collasible-nav-dropdown">
                                                        <Link to="/articles">
                                                            <p className="menuitem">{translationHIN.header.nav.suboption7} </p>
                                                        </Link>
                                                        <Link to="/newscontent">
                                                            <p className="menuitem" >{translationHIN.header.nav.suboption8}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <Link className='navlink' to="/listofmeetings">
                                                        <p className='navlink'>{translationHIN.header.nav.option6}</p>
                                                    </Link>
                                                    <Link to="/gallery">
                                                        <p>{translationHIN.header.nav.option7}</p>
                                                    </Link>
                                                    <Link to="/contactus">
                                                        <p>{translationHIN.header.nav.option8}</p>
                                                    </Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div>
                                );

                            }else if(context.state.language === 'punjabi'){
                                return(
                                    <div>
                                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="mr-auto navigation">
                                                    <Nav.Link href="/">{translationPUN.header.nav.option1}</Nav.Link>
                                                    <NavDropdown title={translationPUN.header.nav.option2} id="collasible-nav-dropdown">
                                                        <Link to='/management'>
                                                            <p className="menuitem">{translationPUN.header.nav.suboption1}</p>
                                                        </Link>
                                                        <Link to="/executives">
                                                            <p className="menuitem" >{translationPUN.header.nav.suboption2}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationPUN.header.nav.option3} id="collasible-nav-dropdown">
                                                            <a target="_blank" href="https://drive.google.com/file/d/1MfnvLV60al_8tiZF2wL5aaFG79bSIXGp/view?usp=sharing">
                                                               <p  className="menuitem">{translationPUN.header.nav.suboption3}</p>
                                                            </a>
                                                        <Link to="/lifemembers">
                                                            <p className="menuitem" >{translationPUN.header.nav.suboption4}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationPUN.header.nav.option4} id="collasible-nav-dropdown">
                                                        <Link to="/machines">
                                                            <p href="" className="menuitem">{translationPUN.header.nav.suboption5} </p>
                                                        </Link>
                                                        <Link to="/vendors">
                                                            <p className="menuitem" >{translationPUN.header.nav.suboption6}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationPUN.header.nav.option5} id="collasible-nav-dropdown">
                                                        <Link to="/articles">
                                                            <p className="menuitem">{translationPUN.header.nav.suboption7} </p>
                                                        </Link>
                                                        <Link to="/newscontent">
                                                            <p className="menuitem" >{translationPUN.header.nav.suboption8}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <Link to="/listofmeetings">
                                                        <p>{translationPUN.header.nav.option6}</p>
                                                    </Link>
                                                    <Link to="/gallery">
                                                        <p>{translationPUN.header.nav.option7}</p>
                                                    </Link>
                                                    <Link to="/contactus">
                                                        <p>{translationPUN.header.nav.option8}</p>
                                                    </Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div>
                                );

                            }else if(context.state.language === 'marathi'){
                                return(
                                    <div>
                                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="mr-auto navigation">
                                                    <Nav.Link href="/">{translationMAR.header.nav.option1}</Nav.Link>
                                                    <NavDropdown title={translationMAR.header.nav.option2} id="collasible-nav-dropdown">
                                                        <Link to='/management'>
                                                            <p className="menuitem">{translationMAR.header.nav.suboption1}</p>
                                                        </Link>
                                                        <Link to="/executives">
                                                            <p className="menuitem" >{translationMAR.header.nav.suboption2}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationMAR.header.nav.option3} id="collasible-nav-dropdown">
                                                            <a target="_blank" href="https://drive.google.com/file/d/1MfnvLV60al_8tiZF2wL5aaFG79bSIXGp/view?usp=sharing">
                                                               <p  className="menuitem">{translationMAR.header.nav.suboption3}</p>
                                                            </a>
                                                        <Link to="/lifemembers">
                                                            <p className="menuitem" >{translationMAR.header.nav.suboption4}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationMAR.header.nav.option4} id="collasible-nav-dropdown">
                                                        <Link to="/machines">
                                                            <p href="" className="menuitem">{translationMAR.header.nav.suboption5} </p>
                                                        </Link>
                                                        <Link to="/vendors">
                                                            <p className="menuitem" >{translationMAR.header.nav.suboption6}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationMAR.header.nav.option5} id="collasible-nav-dropdown">
                                                        <Link to="/articles">
                                                            <p className="menuitem">{translationMAR.header.nav.suboption7} </p>
                                                        </Link>
                                                        <Link to="/newscontent">
                                                            <p className="menuitem" >{translationMAR.header.nav.suboption8}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <Link to="/listofmeetings">
                                                        <p>{translationMAR.header.nav.option6}</p>
                                                    </Link>
                                                    <Link to="/gallery">
                                                        <p>{translationMAR.header.nav.option7}</p>
                                                    </Link>
                                                    <Link to="/contactus">
                                                        <p>{translationMAR.header.nav.option8}</p>
                                                    </Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div> 
                                );

                            }else if(context.state.language === 'gujarati'){
                                return(
                                    <div>
                                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="mr-auto navigation">
                                                <Nav.Link href="/">{translationGUJ.header.nav.option1}</Nav.Link>
                                                <NavDropdown title={translationGUJ.header.nav.option2} id="collasible-nav-dropdown">
                                                    <Link to='/management'>
                                                        <p className="menuitem">{translationGUJ.header.nav.suboption1}</p>
                                                    </Link>
                                                    <Link to="/executives">
                                                        <p className="menuitem" >{translationGUJ.header.nav.suboption2}</p>
                                                    </Link>
                                                </NavDropdown>
                                                <NavDropdown title={translationGUJ.header.nav.option3} id="collasible-nav-dropdown">
                                                    <a target="_blank" href="https://drive.google.com/file/d/1MfnvLV60al_8tiZF2wL5aaFG79bSIXGp/view?usp=sharing">
                                                        <p  className="menuitem">{translationGUJ.header.nav.suboption3}</p>
                                                    </a>
                                                    <Link to="/lifemembers">
                                                        <p className="menuitem" >{translationGUJ.header.nav.suboption4}</p>
                                                    </Link>
                                                </NavDropdown>
                                                <NavDropdown title={translationGUJ.header.nav.option4} id="collasible-nav-dropdown">
                                                    <Link to="/machines">
                                                        <p href="" className="menuitem">{translationGUJ.header.nav.suboption5} </p>
                                                    </Link>
                                                    <Link to="/vendors">
                                                        <p className="menuitem" >{translationGUJ.header.nav.suboption6}</p>
                                                    </Link>
                                                </NavDropdown>
                                                <NavDropdown title={translationGUJ.header.nav.option5} id="collasible-nav-dropdown">
                                                    <Link to="/articles">
                                                        <p className="menuitem">{translationGUJ.header.nav.suboption7} </p>
                                                    </Link>
                                                    <Link to="/newscontent">
                                                        <p className="menuitem" >{translationGUJ.header.nav.suboption8}</p>
                                                    </Link>
                                                </NavDropdown>
                                                <Link to="/listofmeetings">
                                                    <p>{translationGUJ.header.nav.option6}</p>
                                                </Link>
                                                <Link to="/gallery">
                                                    <p>{translationGUJ.header.nav.option7}</p>
                                                </Link>
                                                <Link to="/contactus">
                                                    <p>{translationGUJ.header.nav.option8}</p>
                                                </Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                                );

                            }else{
                                return(
                                    <div>
                                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="mr-auto navigation">
                                                    <Nav.Link href="/">{translationEN.header.nav.option1}</Nav.Link>
                                                    <NavDropdown title={translationEN.header.nav.option2} id="collasible-nav-dropdown">
                                                        <Link to='/management'>
                                                            <p className="menuitem">{translationEN.header.nav.suboption1}</p>
                                                        </Link>
                                                        <Link to="/executives">
                                                            <p className="menuitem" >{translationEN.header.nav.suboption2}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option3} id="collasible-nav-dropdown">
                                                        <a target="_blank" href="https://drive.google.com/file/d/1MfnvLV60al_8tiZF2wL5aaFG79bSIXGp/view?usp=sharing">
                                                            <p  className="menuitem">{translationEN.header.nav.suboption3}</p>
                                                        </a>
                                                        <Link to="/lifemembers">
                                                            <p className="menuitem" >{translationEN.header.nav.suboption4}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option4} id="collasible-nav-dropdown">
                                                        <Link to="/machines">
                                                            <p href="" className="menuitem">{translationEN.header.nav.suboption5} </p>
                                                        </Link>
                                                        <Link to="/vendors">
                                                            <p className="menuitem" >{translationEN.header.nav.suboption6}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option5} id="collasible-nav-dropdown">
                                                        <Link to="/articles">
                                                            <p className="menuitem">{translationEN.header.nav.suboption7} </p>
                                                        </Link>
                                                        <Link to="/newscontent">
                                                            <p className="menuitem" >{translationEN.header.nav.suboption8}</p>
                                                        </Link>
                                                    </NavDropdown>
                                                    <Link to="/listofmeetings">
                                                        <p>{translationEN.header.nav.option6}</p>
                                                    </Link>
                                                    <Link to="/gallery">
                                                        <p>{translationEN.header.nav.option7}</p>
                                                    </Link>
                                                    <Link to="/contactus">
                                                        <p>{translationEN.header.nav.option8}</p>
                                                    </Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div>
                                );
                            }
                        })()}
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            

        )
    }
}


export default Headernav;