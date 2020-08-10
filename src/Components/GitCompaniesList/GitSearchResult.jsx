import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import style from './GitCompany.module.css';

const GitSearchResult = (props) => {
    return (
        <>
            <h2>Pagination:</h2>
            <div className={style.pagianator}>
                <div onClick={props.goFirstPage} className={style.buttonsPrevNext}>&#8656;</div>
                <div onClick={props.backPrevPage} className={style.buttonsPrevNext}>&#8592;</div>
                <div onClick={props.backPrevPage} className={style.buttonsPrevNext}> {props.parsed && props.parsed.prev ? props.parsed.prev.page : ''}</div>
                <div className={style.activePage}>{props.currentPage}</div>
                <div onClick={props.goNextPage} className={style.buttonsPrevNext}> {props.parsed && props.parsed.next ? props.parsed.next.page : ''}</div>
                <div onClick={props.goNextPage} className={style.buttonsPrevNext}>&#8594;</div>
                <div onClick={props.goLastPage} className={style.buttonsPrevNext}>&#8658;</div>
            </div>
            <div >
                {props.isFetching ? <Preloader /> : null}
                {props.projects.map(u =>
                    <div key={u.id} className={style.projectCard}>
                        <div>Name: {u.name}</div>
                        <div>URL: <a href={u.html_url} target='blank'>{u.html_url}</a></div>
                        <div>forks: {u.forks}</div>
                        <div>watchers: {u.watchers_count}</div>
                        <div>stargazers: {u.stargazers_count}</div>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default GitSearchResult;