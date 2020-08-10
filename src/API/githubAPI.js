import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
});

export const gitApi = {
    getCompanies(company, currentPage = 1) {
        return instance.get(`orgs/${company}/repos?page=${currentPage}&per_page=10`)
    },
    nextPrev(currentCompany, changePage) {
        return instance.get(`orgs/${currentCompany}/repos?page=${changePage}&per_page=10`)
    },
}