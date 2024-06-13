import style from '../Component/Form.module.css'
import pic from '../assets/images/pic.svg'
export default function Summary({onClick,goBack }) {
    return (
        <div>
            <div className={style.container}>

                <div className={style.child1}>

                    <div className={style.picture}>

                        <img src={pic} alt="" />
                    </div>
                    <div className={style.info}>

                        <div className={style.step}>
                            <div className={style.four}>
                                <p>1</p>
                            </div>
                            <div className={style.stin}>

                                <p>STEP1</p>
                                <h5>YOUR INFO</h5>
                            </div>


                        </div>
                        <div className={style.plan}>
                            <div className={style.two}>
                                <p>2</p>
                            </div>
                            <div className={style.tplan}>
                                <p>STEP2</p>
                                <h5>SELECT PLAN</h5>

                            </div>
                        </div>
                        <div className={style.add}>
                            <div className={style.three}>
                                <p>3</p>
                            </div>
                            <div className={style.tadd}>
                                <p>STEP3</p>
                                <h5>ADD-ONS</h5>

                            </div>


                        </div>

                        <div className={style.sum}>
                            <div className={style.num}>
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
                    <div className={style.up}>
                        <h2>Finishing up</h2>
                        <p>Double-chech everything looks OK before confirming.</p>

                    </div>
                    <div className={style.big}>
                        <div className={style.ade}>
                            <div className={style.ac}>

                                <h5>Arcade (Monthly)</h5>
                                <p>Change</p>
                            </div>

                            <div className={style.dol}>
                                <h5>$9/mo</h5>
                            </div>



                        </div>
                        <div className={style.ons}>
                            <div className={style.service}>
                                <p>Online service</p>
                                <p>Larger storage</p>
                            </div>

                            <div className={style.bills}>
                                <h5>+$1/mo</h5>
                                <h5>+$2/mo</h5>
                            </div>
                        </div>

                    </div>

                    <div className={style.tot}>
                        <p>total(per year)</p>
                        <h5>$120/yr</h5>
                    </div>
                    <div className={style.down}>
                        <button type='submit' onClick={goBack}>Go Back</button>
                        <button type='submit' onClick={onClick}>Confirm</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
