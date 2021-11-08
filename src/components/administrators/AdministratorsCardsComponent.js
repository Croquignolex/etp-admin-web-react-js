import React from 'react';
import PropTypes from "prop-types";

import LoaderComponent from "../LoaderComponent";
import {dateToString} from "../../functions/generalFunctions";

// Component
function AdministratorsCardsComponent({administrators, user, handleAdministratorDetailsModalShow, handleResetModalShow}) {console.log({user, administrators})
    // Render
    return (
        <>
            <div className="row m-1">
                {administrators.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <img src={item.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                                        <div className="float-right">
                                            {item.status
                                                ?  <span className="badge badge-success">Activé</span>
                                                :  <span className="badge badge-danger">Bloqué</span>
                                            }
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Nom</b>
                                            <span className="float-right">{item.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Téléphone</b>
                                            <span className="float-right">{item.phone}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Créer par</b>
                                            <span className="float-right">{item.creator.name}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        {item.actionLoader ? <LoaderComponent little={true} /> : (
                                            <>
                                                <button type="button"
                                                        className="btn btn-sm btn-theme"
                                                        onClick={() => handleAdministratorDetailsModalShow(item)}
                                                >
                                                    <i className="fa fa-eye" /> Détails
                                                </button>
                                                {(user.id.toString() !== item.id.toString()) && (
                                                    <>
                                                        <br />
                                                        <button type="button"
                                                                className="btn btn-sm btn-danger mt-1"
                                                                onClick={() => handleResetModalShow(item)}
                                                        >
                                                            <i className="fa fa-redo" /> Réinitialisation
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {administrators.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'administrateurs
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
AdministratorsCardsComponent.propTypes = {
    user: PropTypes.object.isRequired,
    administrators: PropTypes.array.isRequired,
    handleResetModalShow: PropTypes.func.isRequired,
    handleAdministratorDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(AdministratorsCardsComponent);
