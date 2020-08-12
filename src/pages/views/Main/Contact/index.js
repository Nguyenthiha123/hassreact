import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Contact = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addContact(data);
    const [Url, setUrl] = useState()
    console.log(Url)


    const history = useHistory()
    const addContact = async (e) => {
        const data = await axios.post('http://localhost:8080/contact', e);
        if (data.data) {

            Swal.fire(
                'Gửi thành công',
                'You clicked the button!',
                'success'
            )
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }

    }

    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h3 mb-3 text-black">Liên hệ</h2>
                        </div>
                        <div className="col-md-7">
                            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_fname" className="text-black">Họ tên <span className="text-danger">*</span></label>
                                            <input type="text" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} name="name" className="form-control" id="c_fname" />
                                            <small className="form-text text-danger">
                                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                            <input type="email" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} className="form-control" id="c_email" name="email" placeholder />
                                            <small className="form-text text-danger">
                                                {errors.email && errors.email.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.email && errors.email.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.email && errors.email.type === "pattern" && <span className="text-danger">Không được cách</span>}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_subject" className="text-black">Số điện thoại </label>
                                            <input type="text" ref={register({ required: true, minLength: 3, pattern: /0[0-9]/ })} className="form-control" id="c_subject" name="phone" />
                                            <small className="form-text text-danger">
                                                {errors.phone && errors.phone.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.phone && errors.phone.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.phone && errors.phone.type === "pattern" && <span className="text-danger">Phai la so</span>}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_message" className="text-black">Nội dung</label>
                                            <textarea name="content" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} id="c_message" cols={30} rows={7} className="form-control" defaultValue={""} />
                                            <small className="form-text text-danger">
                                                {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.content && errors.content.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.content && errors.content.type === "pattern" && <span className="text-danger">Không được cách</span>}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Send Message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 ml-auto">
                            <div className="p-4 border mb-3">
                                <span className="d-block text-primary h6 text-uppercase">New York</span>
                                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="p-4 border mb-3">
                                <span className="d-block text-primary h6 text-uppercase">London</span>
                                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="p-4 border mb-3">
                                <span className="d-block text-primary h6 text-uppercase">Canada</span>
                                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact
