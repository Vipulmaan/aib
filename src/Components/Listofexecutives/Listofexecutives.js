import React,{ Component } from 'react';
import 'tachyons';
import '../../util/css/app.css';


import * as exec from '../../Helpers/executives.json';


class Listofexecutives extends Component {

    

    render(){

        const executive_array = exec.executives.map((executive, i) =>{
            return (
                <div>
                    <p className='pl4 executive_state b-- shadow-4 br3 bg-gray white'>{executive.FIELD7}</p>
                    <ul className='executive_list ba b--white br3 shadow-3 pt2 pb2 w-90 ml4'>
                        <li className="executive_text fw7"><span>Name : </span>{executive.FIELD1}</li>
                        <li className=" executive_text fw4 green" ><span className='executive_text fw7'></span>{executive.FIELD2}</li>
                        <li className='executive_text'><span className="executive_text fw7">Contact : </span>{executive.FIELD3}</li>
                        <ul className='executive_list'>
                            <ul className='executive_list'>
                                <li className='executive_text'>{executive.FIELD4}</li>
                                <li className="fw6 executive_text">{executive.FIELD5}</li>
                                <li className='fw6 executive_text'>{executive.FIELD6}</li>
                            </ul>
                         </ul>
                    </ul>
                </div>
            )
        
        })

        return(
            <div className='executives bg-white pa2'>
                <h1 className="tc list_of_members_header bw6">
                    Executives
                </h1>
                { executive_array }
            </div>            
        );
    }
}

export default Listofexecutives;