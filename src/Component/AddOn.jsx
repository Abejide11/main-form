import style from '../Component/Form.module.css'
import pic from '../assets/images/pic.svg'
export default function AddOn({onClick,goBack }) {
    return (
        <div>
            <div className={style.container}>
                <div className={style.child1}>

                    <div className={style.picture}>

                        <img src={pic} alt="" />
                    </div>
                    <div className={style.info}>

                        <div className={style.plan}>
                            <div className={style.two}>
                                <p>1</p>
                            </div>
                            <div className={style.tplan}>

                                <p>STEP1</p>
                                <h5>YOUR INFO</h5>
                            </div>


                        </div>
                        <div className={style.ste}>
                            <div className={style.three}>
                                <p>2</p>
                            </div>
                            <div className={style.sti}>
                                <p>STEP2</p>
                                <h5>SELECT PLAN</h5>

                            </div>
                        </div>
                        <div className={style.add}>
                            <div className={style.num}>
                                <p>3</p>
                            </div>
                            <div className={style.tadd}>
                                <p>STEP3</p>
                                <h5>ADD-ONS</h5>

                            </div>


                        </div>

                        <div className={style.sum}>
                            <div className={style.four}>
                                <p>4</p>

                            </div>
                            <div className={style.sumt}>
                                <p>STEP4</p>
                                <h5>SUMMary</h5>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={style.child2}>
                    <div className={style.pick}>
                        <h2>Pick add-ons</h2>
                        <p>Add-ons help enhance your gaming experience.</p>
                    </div>

                    <div className={style.online}>
                        <div className={style.on}>
                            <div className={style.check}>
                                <input type="checkbox" />
                            </div>
                            <div className={style.onl}>
                                <h5>Online service</h5>
                                <p>Access tp multiplayer games.</p>
                            </div>
                            <div className={style.price}>
                                <p>$1/mo</p>
                            </div>
                        </div>
                        <div className={style.on}>
                            <div className={style.check}>
                                <input type="checkbox" />
                            </div>
                            <div className={style.onl}>
                                <h5>Larger  storage</h5>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                            <div className={style.price}>
                                <p>$2/mo</p>
                            </div>
                        </div>
                        <div className={style.on}>
                            <div className={style.check}>
                                <input type="checkbox" />
                            </div>
                            <div className={style.onl}>
                                <h5>Customizable profit</h5>
                                <p>custom theme on your profile</p>
                            </div>
                            <div className={style.price}>
                                <p>$2/mo</p>

                            </div>
                        </div>
                    </div>
                    <div className={style.down}>
                     <button type='submit' onClick={goBack}>Go  Back</button>
                        <button type='submit' onClick={onClick}>Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    )
}