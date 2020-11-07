import React from 'react';
import SiteModel from "../store/site/SiteModel";

export interface SiteData {
    sites: SiteModel[];
}

export interface Props {
    onSubmit: () => void;
    loading: any;
    errors: any;
    data: SiteModel[];
    className?: String;
}

const MainView: React.FC<Props> = (props) => {
    // const { loading, error, data } = useQuery<SiteData>(FETCH_SITES);
    const onButtonClick = () => {
        props.onSubmit();
    }
    return (
        <div data-testid="main-view" className={'main_view'}>
            <button type={"submit"} data-testid={"btn-submit"} className={'btn_submit'} onClick={onButtonClick}> </button>
            {props.loading ? <p>Loading... </p> :
                props.errors ? <p>Uh oh! {props.errors.message}</p> :
                    props.data && props.data !== undefined ?
                        <div>
                            {props.data.map((site: any) => (
                                <div data-testid={"site-row"} className={'dataRow'} key={site.id}> <p>{site.name}</p></div>
                            ))}
                        </div>
                        : null}
        </div>
    )
}

export default MainView;
