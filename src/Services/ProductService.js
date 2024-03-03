import * as http from "../Common/http";

const URLAPI = "http://localhost:8000/api";

export const GetAllProduct = async () => {
    try {
        const res = await http.get(`${URLAPI}/product`);

        return [res, null];
    } catch (error) {
        return [null, error];
    }

}

export const PostProduct = async (cateId, data) => {
    try {
        const res = await http.post(`${URLAPI}/product/${cateId}`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }

}
export const UpdateProduct = async (id, cateId, data) => {
    try {
        const res = await http.put(`${URLAPI}/product/${id}/${cateId}`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }

}

export const getProductbyId = async (id) => {
    try {
        const res = await http.get(`${URLAPI}/product/${id}`);

        return [res, null];
    } catch (error) {
        return [null, error];
    }

}


export const deleteProduct = async (id) => {
    try {
        const res = await http.remove(`${URLAPI}/product/${id}`);

        return [res, null];
    } catch (error) {
        return [null, error];
    }

}