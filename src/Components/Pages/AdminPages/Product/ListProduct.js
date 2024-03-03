import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as ProductService from "../../../../Services/ProductService";
import Swal from 'sweetalert2';

function ListProduct() {
    // Khởi tạo 1 state để chứa dữ liệu fetch từ api ra.
    const [apiData, setApiData] = useState([]);

    const [isDeleted, setIsDeleted] = useState(false);

    const FetchApiData = async () => {
        const [data, error] = await ProductService.GetAllProduct();
        console.log(data);
        setApiData(data);
    }

    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            const [data, error] = await ProductService.deleteProduct(id);

            if (data) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Delete Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsDeleted(!isDeleted);
            }
        }
    }

    useEffect(() => {
        FetchApiData();
    }, [isDeleted]);

    return (
        <div className='container-fluid p-3'>
            <Link to={"/admin/product/create"} className='btn btn-primary rounded-0'> Add New </Link>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Sale Price</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData && apiData.map((i, e) => {
                            return (
                                <tr key={e}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.status == 1 ? 'Show' : 'Hidee'}</td>
                                    <td>{i.price}</td>
                                    <td>{i.sale_price}</td>
                                    <td className='w-25'>
                                        <img src={i.image} alt="" className='card-img' />
                                    </td>
                                    <td>{i.cate.name}</td>
                                    <td>
                                        <Link to={`/admin/product/edit/${i.id}`} className='btn btn-primary rounded-0'> Edit </Link>
                                        <button className='btn btn-danger rounded-0' onClick={() => deleteProduct(i.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ListProduct