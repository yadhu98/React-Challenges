import React, { useEffect, useState } from 'react'
import './formprogress.css'
const FormProgress = () => {

    const [currentForm, setCurrentForm] = useState(1)

    const [progress, setProgress] = useState(0)

    const btnEvent = (type) => {

        if (type === 'prev') {
            setCurrentForm(currentForm - 1)
        }
        else if (type === 'next') {
            setCurrentForm(currentForm + 1)
        }
    }

    useEffect(() => {
        setProgress((currentForm / 3) * 100)

    }, [currentForm])





    return (
        <div className="form-pregress_main">
            <h1> 2: Progress Bar on Form </h1>
            <div className="form-container">
                {
                    currentForm !== 'full' &&
                    <div className="progressbar-main">
                        <div style={{ width: `${progress}%` }} className="progress-status"></div>
                    </div>
                }

                {
                    currentForm === 1 ?
                        <div className="form">
                            <div className="form_elements">
                                <span>First name : </span>
                                <input type="text" name="first_name" className="form_firstName" />
                            </div>
                            <div className="form_elements">
                                <span>Last name : </span>
                                <input type="text" name='last_name' className="form_firstName" />
                            </div>
                            <div className="form_elements">
                                <span>Age : </span>
                                <input type="text" name="age" className="form_firstName" />
                            </div>

                        </div>
                        :
                        currentForm === 2 ?
                            <div className="form">
                                <div className="form_elements">
                                    <span>Experiencne : </span>
                                    <input type="text" name="experience" className="form_firstName" />
                                </div>
                                <div className="form_elements">
                                    <span>Current Salary : </span>
                                    <input type="text" name='current_salary' className="form_firstName" />
                                </div>
                                <div className="form_elements">
                                    <span>Expected Salary : </span>
                                    <input type="text" name="expected_salary" className="form_firstName" />
                                </div>
                            </div> :
                            currentForm === 3 ?
                                <div className="form">
                                    <div className="form_elements">
                                        <span>Skill set : </span>
                                        <div className="form_skills">
                                            <input className='skillset-input' id='react' type="checkbox" name="skill-set" />
                                            <label htmlFor='react'>React</label>
                                        </div>
                                        <div className="form_skills">
                                            <input className='skillset-input' id='bootstrap' type="checkbox" name="skill-set" />
                                            <label htmlFor='react'>Bootstrap</label>
                                        </div>
                                        <div className="form_skills">
                                            <input className='skillset-input' id='redux' type="checkbox" name="skill-set" />
                                            <label htmlFor='react'>Redux</label>
                                        </div>
                                    </div>
                                    {/* <div className="form_elements">
                                    <span> : </span>
                                    <input type="text" name='last_name' className="form_firstName" />
                                </div>
                                <div className="form_elements">
                                    <span>Age : </span>
                                    <input type="text" name="age" className="form_firstName" />
                                </div> */}

                                </div> :
                                currentForm === 'full' ?
                                    <div className="form">
                                        <h1>Finished !!</h1>
                                    </div> : null
                }
                <div className="form_bottom">

                    {
                        (currentForm === 2 || currentForm === 3) &&
                        <button onClick={() => btnEvent('prev')} className="btn-prev">
                            Previous
                        </button>
                    }
                    {
                        (currentForm === 1 || currentForm === 2) &&
                        <button onClick={() => btnEvent('next')} className="btn-next">
                            Next
                        </button>
                    }

                    {
                        currentForm === 3 &&
                        <button onClick={() => { setProgress(100); setCurrentForm('full') }} className="btn-submit">
                            Submit
                        </button>
                    }

                    {
                        currentForm === 'full' &&
                        <button onClick={() => { setCurrentForm(1) }} className="btn-submit">
                            Reset
                        </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default FormProgress