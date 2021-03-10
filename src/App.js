import React, { useState } from 'react';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CrossfadeImage from 'react-crossfade-image';
import Header from './components/layout/Header';

function App() {
  const [id, setId] = useState('c');
  const changeSrc = (id) => {
    console.log(id)
    setId(id);
  }
  return (
    <>
      <Header />
      <div class="row">
        <div class="col-1">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
              Template
            </a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              Uploads
            </a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              Photo
            </a>
            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              Elements
            </a>
          </div>
        </div>
        <div class="col-11">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="row">
                <div className="col-md-2">
                  <div className="color" style={{backgroundImage:`url("img/a.jpg")`}} onClick={e => changeSrc('a')}><span className="shadow" style={{backgroundColor:"#695b41"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/c.jpg")`}} onClick={e => changeSrc('c')}><span className="shadow" style={{backgroundColor:"#6e5b47"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/d.jpg")`}} onClick={e => changeSrc('d')}><span className="shadow" style={{backgroundColor:"#75695e"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/e.jpg")`}} onClick={e => changeSrc('e')}><span className="shadow" style={{backgroundColor:"#826543"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/f.jpg")`}} onClick={e => changeSrc('f')}><span className="shadow" style={{backgroundColor:"#959187"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/g.jpg")`}} onClick={e => changeSrc('g')}><span className="shadow" style={{backgroundColor:"#706257"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/h.jpg")`}} onClick={e => changeSrc('h')}><span className="shadow" style={{backgroundColor:"#99937e"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/b.jpg")`}} onClick={e => changeSrc('b')}><span className="shadow" style={{backgroundColor:"#7e6d55"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/i.jpg")`}} onClick={e => changeSrc('i')}><span className="shadow" style={{backgroundColor:"#827351"}}></span></div>
                  <div className="color" style={{backgroundImage:`url("img/j.jpg")`}} onClick={e => changeSrc('j')}><span className="shadow" style={{backgroundColor:"#968b78"}}></span></div>
                </div>
                <div className="col-md-10">
                  <CrossfadeImage src={`img/${id}.jpg`} style={{width:"80%", marginTop: '20px'}} />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              Upload Content
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <h1>Photo Content</h1>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
             <h2>Element Content</h2> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
