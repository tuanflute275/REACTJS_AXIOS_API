import React, { useEffect, useState } from 'react'
import * as CategoryService from "../../../../Services/CategoryService";
import * as ProductService from "../../../../Services/ProductService";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    // init dữ liệu ban đầu từ form
    const initState = {
        name: '',
        status: 1,
        price: 0,
        sale_price: 0,
        image: {},
        category_id: 0
    }

    const [category, setCategory] = useState([]);
    const [postData, setPostData] = useState(initState);
    const [postImage, setPostImage] = useState();

    const navigate = useNavigate();

    const getAllCategory = async () => {
        const [data, error] = await CategoryService.GetAllCategory();
        console.log(data);
        setCategory(data);

        if (error) {
            console.log(error);
        }
    }

    const handleChangeValue = (e) => {

        const { name, value } = e.target;

        setPostData({ ...postData, [name]: value });

    }

    const handleChangeImage = (e) => {
        // console.log(e.target.files[0]);
        setPostImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        var formData = new FormData();

        formData.append("name", postData.name);
        formData.append("status", postData.status);
        formData.append("price", postData.price);
        formData.append("sale_price", postData.sale_price);
        formData.append("image", postImage);
        formData.append("category_id", postData.category_id);

        console.log(postData.category_id);

        const [data, error] = await ProductService.PostProduct(postData.category_id, formData);

        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Insert Success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/admin/product');
        }
        if (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    return (
        <div className='container p-3'>
            <form method='POST' encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Name" onChange={(e) => handleChangeValue(e)} />
                </div>
                <label for="name">Status: </label>
                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="status" id="" value="1" checked onChange={handleChangeValue} /> Show
                        </label>

                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="status" id="" value="0" onChange={handleChangeValue} /> Hide
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" id="price" class="form-control" placeholder="Price" onChange={(e) => handleChangeValue(e)} />
                </div>
                <div class="form-group">
                    <label for="sale_price">Sale Price</label>
                    <input type="text" name="sale_price" id="sale_price" class="form-control" placeholder="Sale Price" onChange={(e) => handleChangeValue(e)} />
                </div>

                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="file" name="image" id="image" class="form-control" onChange={(e) => handleChangeImage(e)} />
                </div>

                <div className='w-50'>
                    {
                        postImage && <img src={URL.createObjectURL(postImage)} className='card-img' alt="" />
                    }
                </div>

                <div class="form-group">
                    <label for="category_id">Category</label>
                    <select class="form-control" onChange={handleChangeValue} name="category_id" id="category_id">
                        <option>--- SELECT ONE CATEGORY ---</option>
                        {
                            category && category.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct