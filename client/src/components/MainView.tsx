import React from 'react';
import {useQuery} from "@apollo/client";
import SiteModel from "../store/site/SiteModel";
import {FETCH_SITES} from "../store/site/Queries/FETCH_SITES";

export interface SiteData {
    sites: SiteModel[];
}

export interface Props {
    onSubmit: () => void;
    className?: String;
}

const MainView: React.FC<Props> = (props) => {
    const { loading, error, data } = useQuery<SiteData>(FETCH_SITES);
    const onButtonClick = () => {
        props.onSubmit();
    }
    return (
        <div data-testid="main-view" className={'main'} id="main">
            <button type={"submit"} data-testid={"submit"} className={'submitButton'} onClick={onButtonClick}> </button>
            {loading ? <p>Loading... </p> :
                error ? <p>Uh oh! {error.message}</p> :
                    data && data.sites !== undefined ?
                        <div>
                            {data.sites.map((site: any) => (
                                <div data-testid={"site-row"} className={'dataRow'} key={site.id}> <p>{site.name}</p></div>
                            ))}
                        </div>
                        : null}
        </div>
    )
}

export default MainView;
