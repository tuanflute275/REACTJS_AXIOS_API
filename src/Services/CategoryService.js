import * as http from "../Common/http";

const URLAPI = "http://localhost:8000/api";

export const GetAllCategory = async () => {
    try {
        const res = await http.get(`${URLAPI}/category`);

        return [res, null];

    } catch (error) {

        return [null, error];

    }

}
