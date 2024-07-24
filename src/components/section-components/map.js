import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			
            <iframe src=" https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76507.37838749144!2d74.60710106628052!3d12.830804136738193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4a6fb2a6c9%3A0xd4c5334e82e9b8d8!2sBajaj%20Finance%20Limited!5e0!3m2!1sen!2sin!4v1717570115804!5m2!1sen!2sin" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
           
        </div>
        }
}

export default Map