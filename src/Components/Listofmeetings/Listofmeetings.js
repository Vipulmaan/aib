import React,{Component} from 'react'
import 'tachyons';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { MyContext } from '../../context';
import axios from 'axios';

// import * as translationEN from '../../translations/en.json';
// import * as translationHIN from '../../translations/hindi.json';
// import * as translationPUN from '../../translations/punjabi.json';
// import * as translationGUJ from '../../translations/gujarati.json';
// import * as translationMAR from '../../translations/marathi.json';


import {meetings} from '../../Helpers/meetings';



class Listofmeetings extends Component {

   
        state = {
            num:'Hi',
            meetingPosts:[],
        }

    

    componentDidMount(){
        axios.get('https://tranquil-eyrie-69509.herokuapp.com/fetchmeetings')
            .then((response) =>{
                this.setState({meetingPosts: response.data});
                this.setState({num: response.data[0]});
            });
    }

   
    render(){
        let meetingPostsstore = this.state.meetingPosts;


        let meeting_handler = (user) =>{
            return(
                this.setState({num : user })
        
            );
        }
        const meeting_array = meetingPostsstore.map((user,num) =>{
            return(
                <div className="bl meetingmobile bb b--gray br3 mb2 shadow-2 pa2">
                    <p className='meeting_date' data-key={user} key={user} onClick={() =>meeting_handler(user)} className="red link pointer dim ">DATE: <i>{user.date.split('-').reverse().join('-')}</i></p>
                    <p  className="meet">{user.description}</p>
                </div> 
            );           
        });

        const data = (
                this.state.meetingPosts 
                ?
                    <div className="meeting_details ba bw1 b--gray br3 mb2 mt4 pa2">
                        <h3 className="meeting_title fw8">{this.state.num.title}</h3>
                        <p className='meeting_description  fw5 red'><i>{this.state.num.description}</i></p>
                        <p className="meeting_detail fw7 mt4 tj "><i>{this.state.num.details}</i></p>
                        <a href={this.state.num.url} target="_blank" > <p className='black w-100 tc fw6 pa4 ba b--grey shadow-4 bg-lemonchiffon' >Open </p> </a>
                    </div>
                :
                <div></div>
                
        );


      
        return(
            
            <div className='meetings background_cover ba b--gray pa2'>
                {/* <h1 className="center list_of_members_header">
                    Meetings
                </h1> */}
                <div className="meeting_box_combine  b--black" >
                    <div className="meeting_list_box bt bb bw1 b--gray br3 shadow-5">
                        <h3 className="meeting_list_header f3 fw8 ba b--gray bw1 shadow-2 br3 pa2 tc bg-white ">Meetings</h3>
                        {meeting_array}
                    </div>
                    {data}  
                </div>
            </div>
    
        )

    }
   
}

export default Listofmeetings;