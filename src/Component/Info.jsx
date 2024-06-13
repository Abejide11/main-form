import style from '../Component/Form.module.css'
import pic from '../assets/images/pic.svg'
export default function Info({
    onSubmitForm,
 }) {
    return (
        <div>
            <div className={style.container}>

                <div className={style.child1}>

                    <div className={style.picture}>

                        <img src={pic} alt="" />
                    </div>
                    <div className={style.info}>

                        <div className={style.step}>
                            <div className={style.num}>
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
                            <div className={style.four}>
                                <p>4</p>

                            </div>
                            <div className={style.sumt}>
                                <p>STEP4</p>
                                <h5>SUMMary</h5>
                            </div>
                        </div>

                    </div>


                    <div className={style.child2}>
                        <div className={style.personal}>
                            <h2>Personal info</h2>
                            <p>please provide your name,email address,and phone number.</p>
                        </div>



                        <form action="" onSubmit={onSubmitForm}>
                            <div className={style.details}>

                                <label htmlFor="name">name</label>
                                <input type="text" placeholder='Vanessa Mint' />
                            </div>

                            <div className={style.details}>

                                <label htmlFor="Email Address">Email Address</label>
                                <input type="text" placeholder='vanessamint@' />
                            </div>

                            <div className={style.details}>

                                <label htmlFor="Phone number">Phone number</label>
                                <input type="text" placeholder='e.g +1 234 567 890' />
                            </div>
                            <div className={style.but}>

                                <button type='submit'>Next Step</button>
                            </div>
                        </form>
                    </div>







                </div>





            </div>



        </div>
    )
}