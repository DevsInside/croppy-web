import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    
    render(){
        return (<div className="Footer">
            <footer className="foot">
                <p>© Devs Inside</p>
                <div className="contact-list">
                    <a href="" class="fa fa-twitter twitter"></a>
                    <a href="" class="fa fa-facebook-square facebook"></a>
                    <a href="" class="fa fa-instagram instagram"></a>
                    <a href="" class="fa fa-linkedin linkedin"></a>
                </div>
            </footer>
        </div>);
    }
}

export default Footer;