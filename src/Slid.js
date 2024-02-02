import { FaStar } from "react-icons/fa";
import './App.css';


function Slid() {
    return (
        <>
            <div className='spacer2'></div>

            <div className=" container img flex">
                <div className="main_img">
                    <img src={require('./image/sec3.png')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Devlopment course</h3>


                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>


                </div>
                <div className="main_img">
                    <img src={require('./image/sec5.png')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Design course</h3>

                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>



                </div>
                <div className="main_img">
                    <img src={require('./image/sec4.png')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Programimg IT</h3>


                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>



                </div>

            </div>
            <div className="spacer">
            <div className=" container img flex">
                <div className="main_img">
                    <img src={require('./image/offered4.webp')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Devlopment course</h3>


                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>
                    


                </div>
                <div className="main_img">
                    <img src={require('./image/offered3.webp')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Design course</h3>

                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>



                </div>
                <div className="main_img">
                    <img src={require('./image/offered1.webp')} style={{ width: "350px", height: "233px" }}></img>
                    <div className="caption">
                        <h3>Programimg IT</h3>


                    </div>
                    <div className="cap_2 flex">
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>
                        <p><FaStar></FaStar></p>


                    </div>



                </div>

            </div>

            </div>






        
        </>
    )
}
export default Slid