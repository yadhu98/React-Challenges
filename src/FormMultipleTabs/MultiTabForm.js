import React, { useState } from 'react'
import './mutlipletabForm.css'
const MultiTabForm = () => {


    const [currentForm, setCurrentForm] = useState(1)
    const [checked, setChecked] = useState(false)
    const btnEvent = () => {
        setCurrentForm(prev => prev + 1)
    };

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        age: '',
        phone: '',
        address: '',
        bank_name: '',
        acc_no: '',
        ifsc: '',
        agreeterms: false
    })


    const formFillFunction = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }



    const submissionDisable = () => {
        let flag = false
        if (values.acc_no === '' || values.first_name === '' || values.last_name === '' || values.phone === '' || values.address === '' || values.bank_name === '' || values.ifsc === '' || !checked) {
            flag = true
        }
        return flag
    }

    const renderForm = () => {
        switch (currentForm) {
            case 1:
                return (
                    <div className="form">
                        <div className="form_elements">
                            <span>First name:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.first_name} type="text" name="first_name" />
                        </div>
                        <div className="form_elements">
                            <span>Last name:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.last_name} type="text" name="last_name" />
                        </div>
                        <div className="form_elements">
                            <span>Age:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.age} type="text" name="age" />
                        </div>
                        <div className="form_elements">
                            <span>Phone:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.phone} type="text" name="phone" />
                        </div>

                        <div className="form_elements">
                            <span>Address:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.address} type="texrarea" name="address" />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="form">
                        <div className="form_elements">
                            <span>Bank name:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.bank_name} type="text" name="bank_name" />
                        </div>
                        <div className="form_elements">
                            <span>Account No:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.acc_no} type="text" name="acc_no" />
                        </div>
                        <div className="form_elements">
                            <span>IFSC:</span>
                            <input onChange={(e) => formFillFunction(e)} value={values.ifsc} type="text" name="ifsc" />
                        </div>
                    </div>
                );
            case 3:
                return (<div className='form'>
                    <span className='form_licence'>
                        {`Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised i
                    n the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </span>
                    <div>
                        <input onChange={(e) => setChecked(e.target.checked)} defaultChecked={checked} type="checkbox" name='agreeterms' />Agree terms and conditions
                    </div>
                </div>);
            case 4: return (
                <div className="form-finish">
                    Completed Successfully!!
                </div>
            )
            default:
                return null;
        }
    }

    return (
        <div className='multi-tab-form-main'>
            <div className="form__header--container">
                <div onClick={() => setCurrentForm(1)} style={{ backgroundColor: currentForm === 1 ? 'rgb(34, 185, 219)' : '#ffffff' }} className="form--steps__divisions">
                    Personal details
                </div>
                <div onClick={() => setCurrentForm(2)} style={{ backgroundColor: currentForm === 2 ? 'rgb(34, 185, 219)' : '#ffffff' }} className="form--steps__divisions">
                    Account details
                </div>
                <div onClick={() => setCurrentForm(3)} style={{ backgroundColor: currentForm === 3 ? 'rgb(34, 185, 219)' : '#ffffff' }} className="form--steps__divisions">
                    Licences and confirmation
                </div>
            </div>
            <div className="form__main--section">
                {renderForm()}
            </div>
            <div>{
                currentForm !== 3 && currentForm !== 4&&
                <button onClick={btnEvent}>Next</button>
            }
                {
                    currentForm === 3 &&
                    <button
                        onClick={() => {
                            setCurrentForm(4);
                            localStorage.setItem('values', JSON.stringify(values));
                            setValues({
                                first_name: '',
                                last_name: '',
                                age: '',
                                phone: '',
                                address: '',
                                bank_name: '',
                                acc_no: '',
                                ifsc: '',
                            })
                            setChecked(false)
                        }}>
                        Submit
                    </button>
                }
                {
                    currentForm === 4 &&
                    <button disabled={submissionDisable} onClick={() => { setCurrentForm(1) }}>Reset</button>

                }
            </div>
        </div>
    )
}

export default MultiTabForm