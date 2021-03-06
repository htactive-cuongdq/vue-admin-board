import Repository from './Repository';

const resource = "/salary-employee/get"

export default {
    getAllUsers(payload, option) {
        return Repository.post(`${resource}`, payload, option)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data;
            })
    }
}