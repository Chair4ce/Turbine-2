import React from 'react';
import {useQuery} from "@apollo/client";
import SiteModel from "../store/site/SiteModel";
import {FETCH_SITES} from "../store/site/Queries/FETCH_SITES";
import reportWebVitals from "../reportWebVitals";


export interface SiteData {
    sites: SiteModel[];
}

interface Props {
    className?: String;
}

const MainView: React.FC<Props> = (props) => {
    const { loading, error, data } = useQuery<SiteData>(FETCH_SITES);
    function runVitals() {
        reportWebVitals(console.log);
    }
    return (
        <div className={'mainRoot'}>
            <button className={'vitaButton'} onClick={runVitals}> </button>
            {loading ? <p>Loading... </p> :
                error ? <p>Uh oh! {error.message}</p> :
                    data && data.sites !== undefined ?
                        <div>
                            {data.sites.map((site: any) => (
                                <div className={'dataRow'} key={site.id}> <p>{site.name}</p></div>
                            ))}
                        </div>
                        : null}
        </div>
    )
}

export default MainView;
