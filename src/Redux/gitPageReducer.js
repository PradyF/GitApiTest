import { gitApi } from '../API/githubAPI';

const SETPROJECTS = 'SETPROJECTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const LINKS = 'LINKS';
const CURRENT_COMPANY = 'CURRENT_COMPANY';
const CURRENT_PAGE = 'CURRENT_PAGE';

let initialState = {
    companiesProjects: [],
    isFetching: false,
    links: '',
    currentCompany: '',
    currentPage: 1
};


const gitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROJECTS:
            return { ...state, companiesProjects: action.companiesProjects }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case LINKS:
            return { ...state, links: action.links }
        case CURRENT_COMPANY:
            return { ...state, currentCompany: action.currentCompany }
        case CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        default:
            return state;
    }
}

export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setProjects = (companiesProjects) => ({ type: SETPROJECTS, companiesProjects });
export const getLinks = (links) => ({ type: LINKS, links });
export const curCompany = (currentCompany) => ({ type: CURRENT_COMPANY, currentCompany })
export const curPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage })


export const getCompany = (company, currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        gitApi.getCompanies(company)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(curPage(currentPage));
                dispatch(curCompany(company));
                dispatch(getLinks(data.headers.link));
                dispatch(setProjects(data.data));
            })
            .catch(error => {
                dispatch(setProjects(null))
            })
    }
}


export const nextPrevChange = (currentCompany, changePage, currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        gitApi.nextPrev(currentCompany, changePage)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(curPage(currentPage));
                dispatch(getLinks(data.headers.link))
                dispatch(setProjects(data.data))
            })
            .catch(error => {
                dispatch(setProjects(null))
            })
    }
}

export default gitReducer;