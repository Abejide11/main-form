import style from '../Component/Form.module.css'
import thn from '../assets/images/thank.svg'
import pic from '../assets/images/pic.svg'
export default function Thank({ }) {
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
                    <div className={style.you}>
                        <img src={thn} alt="" />
                        <h2>Thank you!</h2>
                        <p>Thanks you for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}