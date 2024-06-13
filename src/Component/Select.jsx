import style from '../Component/Form.module.css'
import pic from '../assets/images/pic.svg'
import pro from '../assets/images/pro.svg'
import arc from '../assets/images/arcade.svg'
import adv from '../assets/images/advanced.svg'
export default function Select({onClick, goBack }) {
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
                            <div className={style.num}>
                                <p>2</p>
                            </div>
                            <div className={style.sti}>
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
                    <div className={style.select}>

                        <h2>Select your plan</h2>
                        <p>you have the option of monthly or yearly billing. </p>
                    </div>

                    <div className={style.square}>
                        <div className={style.squ1}>
                            <img src={arc} alt="" />
                            <div className={style.ar}>

                                <h5>Arcade</h5>
                                <p>$9/mo</p>
                            </div>

                        </div>
                        <div className={style.squ}>
                            <img src={adv} alt="" />
                            <div className={style.ad}>

                                <h5>Advanced</h5>
                                <p>$12/mo</p>
                            </div>

                        </div>
                        <div className={style.squ}>
                            <img src={pro} alt="" />
                            <div className={style.pr}>

                                <h5>Pro</h5>
                                <p>$15/mo</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.rec}>
                        <p>monthly</p>
                
                        <p>yearly</p>

                    </div>
<div className={style.down}>
<button onClick={goBack}>Go back</button>
<button type='submit' onClick={onClick}>Next Step</button>
</div>
                </div>
            </div>

        </div>
    )
}