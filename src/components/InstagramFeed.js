import React, { Component } from 'react';
import $ from 'jquery';

let pictures = ['http://www.instagram.com/p/BTR0SeBDaAg/', 'http://www.instagram.com/p/BRJTfeFjQd3/', 'http://www.instagram.com/p/BROSuaMD_gH/', 'http://www.instagram.com/p/BQGmKIggycT/', 'http://www.instagram.com/p/BL6sr_MgTG5/', 'http://www.instagram.com/p/BKti0GPAsaS/' ]

class InstagramFeed extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var photoData = [];
        pictures.forEach(picture => {
            $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: `https://api.instagram.com/oembed/?url=${picture}`,
            success: function(data) {
                photoData.push(data.html);
                }
            })
        })

    }

    render() {
        return (
            <div className="col s12 m1">
                {this.props.photos.map(photo => (
                    {photo}
                ))}
            </div>

        );
    }
}

export default InstagramFeed;