import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormClose } from 'react-icons/gr';
import { SketchPicker} from 'react-color';
import '../index.css';
import Draggable from 'react-draggable';
import {Container} from "react-bootstrap";
import * as htmlToImage from 'html-to-image';





function Modal({selectedImg, setSelectedImg}) {
  
  const [topText, setTopText] = useState(" ");
  const [bottomText, setBottomText] = useState(" ");
  const [fontSize, setFontSize] = useState(30);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("");

 
    const closeModal = (e) => {
        // only closes on backdrop and not when clicking on image
        if(e.target.classList.contains('close' )){
            setSelectedImg(null)}
        }

        // download meme
    const handleDownload = (e) =>{
        htmlToImage.toJpeg(document.getElementById('save'), { quality: 0.95 })
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
        });
    }

    return (
        <div className="backdrop close" onClick={closeModal}>
            
            <div id="myModal" className="modal fade" role="dialog"></div>
            
            <div className="model-dialog ">
            
            <div className="modal-content">
               
                <div className="modal-header">
                    Make your own Meme
                    <button type="button" className="close " onClick={closeModal}data-dismiss="modal"  aria-label="Close"  >  
                    <GrFormClose  className="close" />
                    </button>
                </div>


                <div className="modal-body" >
                    <div className="row">
                    <div align="center" className=" imageCont col-lg-12 col-xs-12 col-md-12" >

                    {/* image and draggable text from user input */}
                    <Container id='save' >
                    <figure align="center"> 

                    <img src={selectedImg} alt="meme" />

                    <Draggable bounds="parent"> 
                          <figcaption className="top">
                            <p style={{fontSize: `${fontSize}px`, fontFamily: `${fontFamily}`, color:`${color}`}}>
                               {topText}
                               </p>
                          </figcaption>
                    </Draggable> 
                    
                    <Draggable bounds="parent" >      
                         <figcaption className="bottom">
                             <p style={{fontSize: `${fontSize}px`, fontFamily: `${fontFamily}`, color:`${color}`}}>
                                 {bottomText}
                            </p>
                      </figcaption>
                    </Draggable> 
                    
                    </figure>
                    </Container>

                      </div>

                    
                        {/* beginning of form for user input */}
                    <h3 className="form-header" align="center">Input text and style it !</h3>

                    <h6 className="directions" align="center" width="40px">Click on text in image after writing it in form below to drag to desired location on image.</h6>
                    

                    <div align="center" className=" meme-color col-lg-6 col-xs-12 col-md-6">
                        
                        <form>
                        <h4>Pick a color!</h4>
                        
                        <br />
                        <div className="color-wheel" align="center" padding-left="80px">   
                        <SketchPicker 
                            color={color}
                            onChangeComplete={ (color) => {setColor(color.hex)}}/>
                        
                        </div>
                        <br />
                   
                        </form>
                        {/* button to download finished meme */}
                        <button align="center" class="btn btn-secondary" onClick={handleDownload}>Download Meme!</button>
                        </div>
                        
                        <div className="col-lg-6 col-xs-12 col-md-6">
                            
                            <form>
                            <h4>Style Text!</h4>
                            
                            <br />
                            <div className="form-group">
                            <label htmlFor="upper text" >Top text</label>
                            <br />
                            <input 
                            id="text"
                            type="topText" className="top-text " placeholder="Enter top text"
                            value={topText}
                            onChange= {(e) => setTopText(e.target.value)} 
                            /></div>

                            <br />
                            <div className="form-group">
                            <label htmlFor="lower text"  >Bottom Text</label>
                            <br />
                            <input id="text"  type="bottomText" className="bottom-text" placeholder="Enter bottom text"
                            value={bottomText}
                            onChange= {(e) => setBottomText(e.target.value)} 
                              />
                              </div>
                     
                             <br />
                             <div className="form-group">
                             <label htmlFor="font size"  >Font Size </label>
                             <br />
                            
                             <input type="number" className="font-size" placeholder="30" 
                            value={fontSize}
                            onChange= {e => setFontSize(e.target.value)}
                              />
                              </div>

                            <br />
                            <div className="form-group">
                            <label htmlFor="font family"  >Font type </label>

                            <br />
                            <input type="radio" name="font-family" className="font-family" 
                            value="Comic Sans MS"
                            onChange= {e => setFontFamily(e.target.value)} 
                                />Comic Sans MS 
                            
                            <br />    
                            <input type="radio" name="font-family" className="font-family" 
                            value="Arial" 
                            onChange= {e => setFontFamily(e.target.value)}
                                />Arial
                            <br />
                            
                            <input type="radio" name="font-family" className="font-family" 
                            value="Pacifico"
                            onChange= {e => setFontFamily(e.target.value)}
                                />Pacifico

                            
                            </div>
                            
                        </form>
                        
                    </div>
                    </div>
                </div>
            
            </div>
            
        </div>
        </div>
       
    )
}

export default Modal


