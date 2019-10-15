import React from 'react'
import ReactDom from  'react-dom';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';




const Listofmembers = () => {
    return(
        <div className='list_of_members pa2'>
            <p className="center list_of_members_header fw6">List of Management Mommittee</p>
            <div className='members mt2 shadow-4'>
                <div className="member bb bw1 b--gray  shadow-4 br2">
                    <p className='member_name red fw6'>SH. SURENDER PRATAP </p>
                    <p className='member_name fw7'>Chief Patron</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. ANANT NATH SINGH</p>
                    <p className='member_name fw7'>Patron</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. KULDEEP KUMAR KHANDUJA</p>
                    <p className='member_name fw7'>Patron</p>
                    <p className='member_name'></p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH.DEVENDRA BHAI PRAJAPATI</p>
                    <p className='member_name fw7'>President</p>
                    <p className='member_name'>State: Gujarat</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. VIJAY KUMAR GOEL</p>
                    <p className='member_name fw7'>General Secretary</p>
                    <p className='member_name'>State: Uttar Pradesh</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. MANISH GUPTA</p>
                    <p className='member_name fw7'>Treasurer </p>
                    <p className='member_name'>State: Haryana</p>
                </div>
                <table className='table'>
                    <tr className="bb bw2 b--gray shadow-5">
                        <th  >Name</th>
                        <th>Designation</th>
                        <th>State</th>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name' >Sh. Ashok Kumar Tiwari</td>
                        <td className='member_name'>Vice President</td>
                        <td className='member_name'>West Bengal</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name'>Sh. Mukesh Nanda</td>
                        <td className='member_name'>Secretary of Organisation</td>
                        <td className='member_name'>Punjab</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name'>Sh. S.P. Jeyraj</td>
                        <td className='member_name'>Secretary of Organisation</td>
                        <td className='member_name'>Tamil Nadu</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name'>SH. Sanjeev Chaudhary</td>
                        <td className='member_name'>Secretary of Legal Cell</td>
                        <td className='member_name'>Uttar Pradesh</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name'>Sh. Surinder K. Singla</td>
                        <td className='member_name'>Secretary of Environment</td>
                        <td className='member_name'>Punjab</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td className='member_name'>Sh. Rattan Aggarwal Ganesh Gadhiya</td>
                        <td className='member_name'>Secretary of Technology</td>
                        <td className='member_name'>Rajasthan</td>
                    </tr>
                </table>
            </div>
            
        </div>

    )
}

export default Listofmembers;