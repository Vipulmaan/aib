import React,{Component} from 'react'
import 'tachyons';
import { MyContext } from '../../context';



import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


require('dotenv').config();


class Contactus extends Component {


    render(){

        const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <div className="contactus pa2">
                                        <p className='list_of_members_header fw7 center'>{translationHIN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.5903211,77.223525) */}
                                        <iframe
                                            className='map_frame'
                                            src={process.env.REACT_APP_API_KEY}
                                            >
                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form action="https://tranquil-eyrie-69509.herokuapp.com/submitmessage" method="POST" className='message_form  b--black'>
                                                <div className='message_form2'>
                                                        <input className='input ' type='text' name='name' placeholder={translationHIN.contact_us.name}/>
                                                        <input className='input' type='email' name='email' placeholder={translationHIN.contact_us.email}/>
                                                </div>
                                                <br/>
                                                <textarea className='  text_area ' id='input' type='text' name='message' placeholder={translationHIN.contact_us.message}></textarea>
                                                <button type='submit' className='message_button bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className=' contact_header fw6 red'>{translationHIN.home_content.header}</p>
                                                <p className='contact_address  fw6'>
                                                {translationHIN.home_content.address_line1}<br/>
                                                    {translationHIN.home_content.address_line2}<br/>
                                                    {translationHIN.home_content.address_line3}<br/>
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationHIN.contact_us.account_number} : 52142908661
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationHIN.contact_us.ifsc} : SBIN0020511
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'gujarati'){
                                return(
                                    <div className="contactus pa2">
                                        <p className='list_of_members_header fw7 center'>{translationGUJ.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe
                                            className='map_frame'
                                            src={process.env.REACT_APP_API_KEY}
                                            >
                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form action="https://tranquil-eyrie-69509.herokuapp.com/submitmessage" method="POST" className='message_form  b--black'>
                                                <div className='message_form2'>
                                                        <input className='input ' type='text' name='name' placeholder={translationGUJ.contact_us.name}/>
                                                        <input className='input' type='email' name='email' placeholder={translationGUJ.contact_us.email}/>
                                                </div>
                                                <br/>
                                                <textarea className='  text_area ' id='input' type='text' name='message' placeholder={translationGUJ.contact_us.message}></textarea>
                                                <button type='submit' className='message_button bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className=' contact_header fw6 red'>{translationGUJ.home_content.header}</p>
                                                <p className='contact_address  fw6'>
                                                {translationGUJ.home_content.address_line1}<br/>
                                                    {translationGUJ.home_content.address_line2}<br/>
                                                    {translationGUJ.home_content.address_line3}<br/>
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationGUJ.contact_us.account_number} : 52142908661
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationGUJ.contact_us.ifsc} : SBIN0020511
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'marathi'){
                                return(
                                    <div className="contactus pa2">
                                        <p className='list_of_members_header fw7 center'>{translationMAR.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe
                                            className='map_frame'
                                            src={process.env.REACT_APP_API_KEY}
                                            >
                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form action="https://tranquil-eyrie-69509.herokuapp.com/submitmessage" method="POST" className='message_form  b--black'>
                                                <div className='message_form2'>
                                                        <input className='input ' type='text' name='name' placeholder={translationMAR.contact_us.name}/>
                                                        <input className='input' type='email' name='email' placeholder={translationMAR.contact_us.email}/>
                                                </div>
                                                <br/>
                                                <textarea className='  text_area ' id='input' type='text' name='message' placeholder={translationMAR.contact_us.message}></textarea>
                                                <button type='submit' className='message_button bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className=' contact_header fw6 red'>{translationMAR.home_content.header}</p>
                                                <p className='contact_address  fw6'>
                                                {translationMAR.home_content.address_line1}<br/>
                                                    {translationMAR.home_content.address_line2}<br/>
                                                    {translationMAR.home_content.address_line3}<br/>
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationMAR.contact_us.account_number} : 52142908661
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationMAR.contact_us.ifsc} : SBIN0020511
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'punjabi'){
                                return(
                                    <div className="contactus pa2">
                                        <p className=' fw7 list_of_members_header center'>{translationPUN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe
                                            className='map_frame'
                                            src={process.env.REACT_APP_API_KEY}
                                            >
                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form action="https://tranquil-eyrie-69509.herokuapp.com/submitmessage" method="POST" className='message_form  b--black'>
                                                <div className='message_form2'>
                                                        <input className='input ' type='text' name='name' placeholder={translationPUN.contact_us.name}/>
                                                        <input className='input' type='email' name='email' placeholder={translationPUN.contact_us.email}/>
                                                </div>
                                                <br/>
                                                <textarea className='  text_area ' id='input' type='text' name='message' placeholder={translationPUN.contact_us.message}></textarea>
                                                <button type='submit' className='message_button bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className=' contact_header fw6 red'>{translationPUN.home_content.header}</p>
                                                <p className='contact_address  fw6'>
                                                {translationPUN.home_content.address_line1}<br/>
                                                    {translationPUN.home_content.address_line2}<br/>
                                                    {translationPUN.home_content.address_line3}<br/>
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationPUN.contact_us.account_number} : 52142908661
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    {translationPUN.contact_us.ifsc} : SBIN0020511
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else{
                                return(
                                    <div className="contactus pa2">
                                        <p className=' fw7 list_of_members_header center'>{translationEN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        {/* <iframe className='map_frame'  src={process.env.REACT_APP_API_KEY}>

                                        </iframe> */}
                                        <iframe
                                            className='map_frame'
                                            src={process.env.REACT_APP_API_KEY}
                                            >
                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form action="https://tranquil-eyrie-69509.herokuapp.com/submitmessage" method="POST" className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <input  className='input ' type='text' name='name' placeholder={translationEN.contact_us.name}/>
                                                    <input className='input' type='email' name='email' placeholder={translationEN.contact_us.email}/>
                                                </div>
                                                <br/>
                                                <textarea className='  text_area ' id='input' type='text' name='message' placeholder={translationEN.contact_us.message}></textarea>
                                                <button type='submit' className='message_button bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form >
                                            <div className="contact_details  b--black">
                                                <p className=' contact_header fw6 red'>{translationEN.home_content.header}</p>
                                                <p className='contact_address  fw6'>
                                                    Zone 6A, 3rd Floor, Indian Habitat Centre<br/>
                                                    Lodhi Road, New Delhi, India<br/>
                                                    Phone:- 011-24641853, 41504740<br/>
                                                    Contact Person:-<br/>
                                                    Sh. R. K. Verma<br/>
                                                    Email: aibtmf@rediffmail.com</p>
                                                <p className=' contact_header fw6 red'>
                                                    Account Number : 52142908661
                                                </p>
                                                <p className=' contact_header fw6 red'>
                                                    IFSC Code : SBIN0020511
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })()}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}


export default Contactus;