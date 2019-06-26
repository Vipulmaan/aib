import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import '../../util/css/app.css';
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Brick2 from '../../util/assets1/brick.png';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.png';
import Location from '../../util/assets1/location.png';
import Demoimage from '../../util/assets1/gallery_demo_image.jpg';
import Twitter from '../../util/assets1/twitter.svg';
import Facebook from '../../util/assets1/facebook.svg';
import Homeslides from '../Homeslides/Homeslides';





class Homecontent extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <div className="home_content">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white">
                                            <h2 className='center f2 fw6'>{translationHIN.home_content.title}</h2>
                                            <h3 className='center f3 fw6'>{translationHIN.home_content.header}</h3>
                                            <p className='w-60 fw6 about_text'>{translationHIN.home_content.purpose} </p>
                                            <div className='about_profile_div'>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7 '>{translationHIN.home_content.name1}</p>
                                                    <p>{translationHIN.home_content.designation1}</p>
                                                    <p>{translationHIN.header.title}</p>
                                                </div>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7'>{translationHIN.home_content.name2}</p>
                                                    <p>{translationHIN.home_content.designation2}</p>
                                                    <p>{translationHIN.header.title}</p>
                                                </div>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7'>{translationHIN.home_content.name3}</p>
                                                    <p>{translationHIN.home_content.designation3}</p>
                                                    <p>{translationHIN.header.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">{translationHIN.home_content.address_line1}
                                                        <br/>
                                                        <b>{translationHIN.home_content.address_line2} </b><br/>
                                                        {translationHIN.home_content.address_line3}
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' ba b--black rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
                                    </div>
                                );
                            }else{
                                return(
                                    <div className="home_content">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white">
                                            <h2 className='center f2 fw6'>ABOUT</h2>
                                            <h3 className='center f3 fw6'>ALL INDIA BRICK AND TILE MANUFACTURING FEDERATION</h3>
                                            <p className='w-60 fw6 about_text'>We represent the Brick and tile manufacturers of India.
                                                We aim to inspire contemporary brick architecture and building design in all areas of the built environment: commercial, residential and landscape.
                                                f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                                            </p>
                                            <div className='about_profile_div'>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7'>Devender B. Prajapati</p>
                                                    <p>President</p>
                                                    <p>AIBTM</p>
                                                </div>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7'>Vijay Kumar Goel</p>
                                                    <p>General Secretary</p>
                                                    <p>AIBTM</p>
                                                </div>
                                                <img src={Face} />
                                                <div className="about_profile">
                                                    <p className='fw7'>Manish Gupta</p>
                                                    <p>Treasurer</p>
                                                    <p>AIBTM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">
                                                        All India Brick & Tile Manufacturers Federation (AIBTMF)
                                                        Zone 6A, 3rd Floor, Indian Habitat Centre
                                                        Lodhi Road, New Delhi, India
                                                        011-24641853, 41504740<br/>
                                
                                                        <b>Contact Person:-</b><br/>
                                                        Sh. R. K. Verma (Executive Secretary)
                                                        Email: aibtmf@rediffmail.com
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' ba b--black rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
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

export default Homecontent;