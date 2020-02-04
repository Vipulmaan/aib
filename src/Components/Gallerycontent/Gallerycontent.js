import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';
import axios from 'axios';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import {gallery} from '../../Helpers/gallery';


import '../../util/css/app.css';
import Galleryslides from '../Galleryslides/Galleryslides';
import Image from '../../util/assets1/bg20.jpg';




class Gallerycontent extends Component {

    state = {
        index:[],
        gallery:[]
        
    }


    componentDidMount(){
        axios.get('https://tranquil-eyrie-69509.herokuapp.com/fetchgallery')
        .then(response => {
            this.setState({gallery:response.data})
        })
    }


    

    render() {
        let galleryList = this.state.gallery;

        let gallerySlideHandler = (num) => {
            this.setState({
                index:num,
            })
            
        }

        let gallery_list = galleryList.map((user,num)=> {
            return(
                <div onClick={() =>gallerySlideHandler(num)} className='gallery_list pointer grow'>
                    <img   className='gallery_list_image' src={'https://tranquil-eyrie-69509.herokuapp.com/' + user.combine[0][0]}/>
                    <p key={num} data-key={num} onClick={() =>gallerySlideHandler(num)} className='gallery_list_text f2'>{user.combine.title} <br/> {user.combine.date.split('-').reverse().join('-')}</p>   
                </div>
            );
        })

        let gallery_image = this.state.gallery
        let image_index = Number(this.state.index);
        const gal = gallery_image[image_index];

        const data = (
                this.state.gallery.length >0
                ?
                 gal.combine[0].map((data,i) =>{
                    return(
                        <Carousel.Item>
                        <img
                          className="gallery_slide_image w-70 "
                          src={'https://tranquil-eyrie-69509.herokuapp.com/' + gal.combine[0][i]}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3 className='gallery_caption_text'>{gal.combine.title + " " + gal.combine.date.split('-').reverse().join('-')}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                })
                :
                <div></div>
        );
        // const gallery_images = gallery[Number(image_index)].url.map((data,i) =>{
        //     return(
        //         <Carousel.Item>
        //         <img
        //           className="gallery_slide_image w-70 "
        //           src={gallery[Number(image_index)].url[i]}
        //           alt="Third slide"
        //         />
      
        //         <Carousel.Caption>
        //           <h3 className='gallery_caption_text'>{gallery[Number(image_index)].visit}</h3>
        //           <p id="gallery_caption_text">{gallery[Number(image_index)].description}</p>
        //         </Carousel.Caption>
        //       </Carousel.Item>
        //     );
        // })

    
        

        return(
            <div className='gallery_content background_cover bg-white pa2'>
                <p className=' fw6 list_of_members_header tc b--black'>Gallery</p>
                <div className='gallery_combine_div'>
                    <div className="gallery_list_div b--black ">
                        {gallery_list.reverse()}           
                    </div>
                    <div className='gallery_slides ba b--black '>
                        <Galleryslides images={data} />
                    </div>  
                </div>
            </div>
        );
    }
}

export default Gallerycontent;