import React, { Component } from 'react';
import $ from 'jquery';

let pictures = ['http://www.instagram.com/p/BTR0SeBDaAg/', 'http://www.instagram.com/p/BRJTfeFjQd3/', 'http://www.instagram.com/p/BROSuaMD_gH/', 'http://www.instagram.com/p/BQGmKIggycT/', 'http://www.instagram.com/p/BL6sr_MgTG5/', 'http://www.instagram.com/p/BKti0GPAsaS/' ]

class InstagramFeed extends Component {

    componentDidMount() {
        let photoData = [];
        pictures.forEach(picture => (
            $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: picture,
            success: function(data) {
                photoData.push(data);
                }
            })
       ))
    }

    render() {
        return (
            <div>
                <blockquote className="instagram-media" style={{background:"#FFF", border:0, borderRadius:3, boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin: 1, maxWidth:329, maxHeight:500, padding:0, width:"49.375%", width:"-webkit-calc(50% - 2px)", width:"calc(50% - 2px)"}}>
                    <div style={{padding:8}}>
                        <div style={{background:"#F8F8F8", lineHeight:0, marginTop:40, padding:"50.0% 0", textAlign:"center", width:"100%"}}> 
                            <div style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)", display:"block", height:44, margin:"0 auto -44px", position:"relative", top:-22, width:44}}>
                            </div>
                        </div>
                        <p style={{color:"#c9c8cd", fontFamily:"Arial,sans-serif", fontSize:10, lineHeight:10, marginBottom:0, marginTop:4, overflow:"hidden", padding:"2 0 3", textAlign:"center", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                            <a href="https://www.instagram.com/p/BVnHvbiD54k/" style={{color:"#c9c8cd", fontFamily:"Arial,sans-serif", fontSize:14, fontStyle:"normal", fontWeight:"normal", lineHeight:17, textDecoration:"none"}} target="_blank">A post shared by Maxwell Foley (@max.swell)</a>
                        </p>
                    </div>
                </blockquote>
            </div>

        );
    }
}

export default InstagramFeed;