import PropTypes from "prop-types";
import React, {useState} from 'react';

import {formatNumber} from "../../functions/generalFunctions";
import FormModalComponent from "../modals/FormModalComponent";
import AgentAddSimContainer from "../../containers/agents/AgentAddSimContainer";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";

// Component
function AgentSimsListComponent({agent}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: 'DETAIL DE LA PUCE', id: ''});
    const [addSimModal, setAddSimEditModal] = useState({show: false, header: 'AJOUTER UNE SIM CHEZ ' + agent.name});

    // Show add sim modal form
    const handleAddSimModalShow = () => {
        setAddSimEditModal({...addSimModal, show: true})
    }

    // Hide add sim modal form
    const handleAddSimModalHide = () => {
        setAddSimEditModal({...addSimModal, show: false})
    }

    // Hide sim details modal form
    const handleSimDetailModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mb-1" onClick={handleAddSimModalShow}>
                <i className="fa fa-plus" /> Ajouter une sim
            </button>
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-hover text-nowrap table-bordered">
                        <thead>
                            <tr>
                                <th>NOM</th>
                                <th>NUMERO</th>
                                <th>SOLDE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agent.sims.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <i className="fa fa-question-circle small mr-1 hand-cursor text-theme"
                                               onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.id})}
                                            />
                                            {item.name}
                                        </td>
                                        <td>{item.number}</td>
                                        <td className='text-right'>{formatNumber(item.balance)}</td>
                                    </tr>
                                )
                            })}
                            {agent.sims.length === 0 && (
                                <tr>
                                    <td colSpan={3}>
                                        <div className='alert custom-active text-center'>
                                            Pas de puces
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={addSimModal} handleClose={handleAddSimModalHide}>
                <AgentAddSimContainer handleClose={handleAddSimModalHide} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentSimsListComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

export default React.memo(AgentSimsListComponent);