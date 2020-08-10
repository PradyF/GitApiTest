import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCompany, getLinks, curCompany, nextPrevChange } from '../../Redux/gitPageReducer';
import parse from 'parse-link-header';
import GitSearchResult from './GitSearchResult';

const GitCompanies = (props) => {

    let newCompanyElement = React.createRef();

    const onCompanyChange = () => {
        let company = newCompanyElement.current.value;
        props.getCompany(company, 1);
    }

    let parsed = parse(props.links);

    const goNextPage = () => {
        if (parsed && parsed.next) {
            props.nextPrevChange(props.currentCompany, parsed.next.page, parsed.next.page)
        }

    }
    const backPrevPage = () => {
        if (parsed && parsed.prev) {
            props.nextPrevChange(props.currentCompany, parsed.prev.page, parsed.prev.page)
        }
    }

    const goLastPage = () => {
        if (parsed && parsed.last) {
            props.nextPrevChange(props.currentCompany, parsed.last.page, parsed.last.page)
        }
    }
    const goFirstPage = () => {
        if (parsed && parsed.first) {
            props.nextPrevChange(props.currentCompany, parsed.first.page, parsed.first.page)
        }
    }

    return (
        <div>

            <h2>Введите название компании:</h2>
            <div>
                <div><textarea ref={newCompanyElement} /></div>
                <div>
                    <button onClick={onCompanyChange}>Найти компанию</button>
                </div>
                {props.projects ? <GitSearchResult {...props}
                    goNextPage={goNextPage}
                    backPrevPage={backPrevPage}
                    goLastPage={goLastPage}
                    goFirstPage={goFirstPage}
                    parsed={parsed}
                /> : 'Такой компании нет:('
                }
            </div>

        </div>
    );

}

let mapStateToProps = (state) => {
    return {
        projects: state.gitHub.companiesProjects,
        isFetching: state.gitHub.isFetching,
        links: state.gitHub.links,
        currentCompany: state.gitHub.currentCompany,
        currentPage: state.gitHub.currentPage
    }
}

export default compose(
    connect(mapStateToProps, { getCompany, getLinks, curCompany, nextPrevChange }),
)(GitCompanies)



