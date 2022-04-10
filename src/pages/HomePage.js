import React from 'react';
import PropTypes from "prop-types";

import {HOME_PAGE} from "../constants/pageNameConstants";
import HeaderComponent from "../components/HeaderComponent";
import AppLayoutComponent from "../components/AppLayoutComponent";
import HomeCardComponent from "../components/dashboard/HomeCardComponent";
import {
    SIMS_PAGE_PATH,
    ZONES_PAGE_PATH,
    VENDORS_PAGE_PATH,
    MANAGERS_PAGE_PATH,
    OPERATORS_PAGE_PATH,
    COLLECTORS_PAGE_PATH
} from "../constants/pagePathConstants";

// Component
function HomePage({location}) {
    // Render
    return (
        <AppLayoutComponent pathname={location.pathname}>
            <div className="content-wrapper">
                <HeaderComponent title={HOME_PAGE} icon={'fa fa-home'} />
                <section className="content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Opérateurs"
                                    color="bg-success"
                                    url={OPERATORS_PAGE_PATH}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Puces"
                                    color="bg-primary"
                                    url={SIMS_PAGE_PATH}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Zones"
                                    color="bg-danger"
                                    url={ZONES_PAGE_PATH}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Fournisseurs"
                                    color="bg-warning"
                                    url={VENDORS_PAGE_PATH}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Gestionnaires de flottes"
                                    color="bg-info"
                                    url={MANAGERS_PAGE_PATH}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                                <HomeCardComponent
                                    label="Responsables de zones"
                                    color="bg-dark"
                                    url={COLLECTORS_PAGE_PATH}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppLayoutComponent>
    )
}

// Prop types to ensure destroyed props data type
HomePage.propTypes = {
    location: PropTypes.object.isRequired
};

export default React.memo(HomePage);
