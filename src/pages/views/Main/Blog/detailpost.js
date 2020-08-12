import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import api1 from '../../../../api/categoryApi'
import api from '../../../../api/postApi'

const DetailPost = props => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const getDetail = async () => {
            try {
                const { data } = await api.get(id);
                console.log(data)
                setDetail(data);
            } catch (error) {
            }
        }
        getDetail()
    }, []);

    // const [category, setCategory] = useState('')
    // useEffect(() => {
    //     const getCategory = async () => {
    //         try {
    //             const { data } = await api1.getAll();
    //             setCategory(data);
    //         } catch (error) {
    //         }
    //     }
    //     getCategory()
    // }, []);
    // console.log(category)


    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Detail Post</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="row">

                        <div className="col-md-12">
                            <h1 style={{ fontSize: "30px" }}>{detail.title}</h1>
                            <img src={detail.image} style={{ width: "1000px", height: "500px", marginTop: "50px" }} alt="Image" className="img-fluid" />
                            <div style={{ marginTop: "30px" }}>
                                <p className="mb-4">{detail.content}</p>
                            </div>
                        </div>
                        <div className="col-md-12" style={{ marginLeft: "-200px" }} >
                            <h2 className="text-black">
                                {/* {product.id_category} */}
                            </h2>

                            {/* 
                            <h2 style={{ marginTop: "20px" }}>Danh mục:
                            {category && category.map(cate =>
                                <span name="id_category">
                                    <option value={cate.id} > {cate.name}</option>
                                </span>
                            )}
                               {category && category.map(cate => cate.id == el.id_category ? cate.name : console.log(cate.id))} 

                            </h2> */}




                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

DetailPost.propTypes = {

}

export default DetailPost

