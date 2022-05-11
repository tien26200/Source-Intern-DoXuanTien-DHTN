import './style.scss'
import { BsBag } from 'react-icons/bs'
import { BiBarcode, BiDiamond } from 'react-icons/bi'
import { RiHandHeartLine } from 'react-icons/ri'

function Policy() {
    return ( 
        <div className="policy">
            <div className="policy__list">
                <h2 className="policy__h2-title">POLICY</h2>
                
                <div className="policy__item">
                    <div className="policy__icon">
                        <BsBag />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Diverse products</h4>
                        <p className="policy__desc">There are many different product designs.</p>
                    </div>
                </div>
                
                <div className="policy__item">
                    <div className="policy__icon">
                        <BiBarcode />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Pay COD</h4>
                        <p className="policy__desc">Pay when receiving goodsg</p>
                    </div>
                </div>
                <div className="policy__item">
                    <div className="policy__icon">
                        <BiDiamond />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Product quality </h4>
                        <p className="policy__desc">High-quality products for users</p>
                    </div>
                </div>
                <div className="policy__item">
                    <div className="policy__icon">
                        <RiHandHeartLine />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Warranty support</h4>
                        <p className="policy__desc">Change, modify at all stores</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Policy;