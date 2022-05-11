import './style.scss'


function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer__main container">
                <div className="footer__left footer__column">
                    <div className="footer__logo logo">Watches Selling</div>
                    <h4 className="footer__sologan">The best system sell watch in DakMil</h4>
                    <div className="footer__phone">
                        <span><b>Hotline:</b></span>
                        <span>0348596060</span>
                    </div>
                    <div className="footer__address">
                        <span><b>Store: </b></span>
                        <span>Group DG4 of TMA Solution</span>
                    </div>
                    
                </div>
                <div>
                    
                </div>
                <div className="footer__column">
                    <h4 className='footer__title mobile'>About shop</h4>
                    <ul className="footer__list">
                        <li className="footer__item">Introduce</li>
                        <li className="footer__item">Contact</li>
                        <li className="footer__item">Recruit</li>
                        <li className="footer__item">News</li>
                    </ul>
                    <ul className="footer__list footer__mobile">
                        <li className="footer__item">Chopard</li>
                        <li className="footer__item">Cartier</li>
                        <li className="footer__item">Franck</li>
                        <li className="footer__item">Piaget</li>
                    </ul>
                    <ul className="footer__list footer__mobile">
                        <li className="footer__item">Selling</li>
                        <li className="footer__item">Rate </li>
                        <li className="footer__item">Old </li>
                        <li className="footer__item">New </li>
                    </ul>             
                </div>
                
                <div className="footer__column footer__Service">
                    <h4 className='footer__title'> Service Of Customer</h4>
                    <ul className="footer__list " style={{fontSize:"25px"}}>
                        <li className="footer__item">Ordering</li>
                        <li className="footer__item">Return Policy</li>
                        <li className="footer__item">Warranty Policy</li>
                        <li className="footer__item">Refund Policy</li>
                    </ul>
                    <ul className="footer__list footer__mobile2" style={{fontSize:"25px"}}>
                        <li className="footer__item">Ordering</li>
                        <li className="footer__item">Return Policy</li>
                        <li className="footer__item">Warranty Policy</li>
                        <li className="footer__item">Refund Policy</li>
                    </ul>
                   
                </div>
                
            </div>


            
            
        </footer>
     );
}

export default Footer;