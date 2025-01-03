import {API_SERVER_URL} from "./generalConstants";

// User
export const API_URL = `${API_SERVER_URL}/api`;
export const LOGOUT_API_PATH = `${API_URL}/logout`;
export const EDIT_AVATAR_API_PATH = `${API_URL}/edit_avatar`;
export const FETCH_BALANCE_API_PATH = `${API_URL}/mon_solde`;
export const EDIT_PASSWORD_API_PATH = `${API_URL}/edit_password`;
export const EDIT_PROFILE_API_PATH = `${API_URL}/update_profile`;
export const AUTHENTICATION_API_PATH = `${API_URL}/authentication`;
export const USER_FACTORY_RESET_API_PATH = `${API_URL}/factory_reset`;

// Settings
export const EDIT_SETTING_API_PATH = `${API_URL}/edit_setting`;

// Requests
export const NEW_FLEET_API_PATH = `${API_URL}/demande_flote_agent`;
export const ALL_FLEETS_API_PATH = `${API_URL}/list_demandes_flote_collector_all`;
export const FLEETS_API_PATH = `${API_URL}/list_demandes_flote_general_collector`;

export const CLEARANCES_API_PATH = `${API_URL}/list_demandes_destockage`;
export const NEW_CLEARANCE_API_PATH = `${API_URL}/demande_destockage_agent`;
export const ALL_CLEARANCES_API_PATH = `${API_URL}/list_demandes_destockage_all`;
export const DECLARE_CLEARANCE_API_PATH = `${API_URL}/reponse_demandes_destockage`;

// Agents
export const AGENT_API_PATH = `${API_URL}/show_agent`;
export const AGENTS_API_PATH = `${API_URL}/list_agents`;
export const EDIT_AGENT_CNI_API_PATH = `${API_URL}/edit_cni`;
export const AGENT_ADD_SIM = `${API_URL}/ajouter_puce_agent`;
export const CREATE_AGENT_API_PATH = `${API_URL}/create_agent`;
export const DELETE_AGENT_API_PATH = `${API_URL}/delete_agent`;
export const EDIT_AGENT_INFO_API_PATH = `${API_URL}/edit_agent`;
export const ALL_AGENTS_API_PATH = `${API_URL}/list_agents_all`;
export const EDIT_AGENT_DOC_API_PATH = `${API_URL}/edit_folder`;
export const SEARCH_AGENTS_API_PATH = `${API_URL}/search_agents`;
export const AGENT_ZONE_UPDATE_API_PATH = `${API_URL}/edit_zone_agent`;
export const TOGGLE_AGENT_STATUS_API_PATH = `${API_URL}/edit_agent_status`;
export const AGENT_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

export const RESOURCE_API_PATH = `${API_URL}/show_resource`;
export const RESOURCES_API_PATH = `${API_URL}/list_resources`;
export const CREATE_RESOURCE_API_PATH = `${API_URL}/create_resource`;
export const AGENT_AGENCY_UPDATE_API_PATH = `${API_URL}/edit_agency_agent`;

// Collectors
export const COLLECTORS_API_PATH = `${API_URL}/recouvreurs`;
export const EDIT_COLLECTOR_API_PATH = `${API_URL}/edit_user`;
export const COLLECTOR_ADD_SIM = `${API_URL}/ajouter_puce_rz`;
export const COLLECTOR_DETAILS_API_PATH = `${API_URL}/details_user`;
export const ALL_COLLECTORS_API_PATH = `${API_URL}/recouvreurs_all`;
export const CREATE_COLLECTOR_API_PATH = `${API_URL}/create_recouvreur`;
export const COLLECTOR_ZONE_UPDATE_API_PATH = `${API_URL}/edit_zone_user`;
export const TOGGLE_COLLECTOR_STATUS_API_PATH = `${API_URL}/edit_user_status`;
export const COLLECTOR_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Managers
export const MANAGERS_API_PATH = `${API_URL}/gestionnaires`;
export const EDIT_MANAGER_API_PATH = `${API_URL}/edit_user`;
export const MANAGER_DETAILS_API_PATH = `${API_URL}/details_user`;
export const ALL_MANAGERS_API_PATH = `${API_URL}/gestionnaires_all`;
export const CREATE_MANAGER_API_PATH = `${API_URL}/create_gestionnaire`;
export const TOGGLE_MANAGER_STATUS_API_PATH = `${API_URL}/edit_user_status`;
export const MANAGER_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Supervisors
export const SUPERVISORS_API_PATH = `${API_URL}/superviseurs`;
export const EDIT_SUPERVISORS_API_PATH = `${API_URL}/edit_user`;
export const ALL_SUPERVISORS_API_PATH = `${API_URL}/superviseurs`;
export const SUPERVISOR_DETAILS_API_PATH = `${API_URL}/details_user`;
export const CREATE_SUPERVISOR_API_PATH = `${API_URL}/create_superviseur`;
export const TOGGLE_SUPERVISOR_STATUS_API_PATH = `${API_URL}/edit_user_status`;
export const SUPERVISOR_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Administrators
export const ADMINISTRATORS_API_PATH = `${API_URL}/administrateurs`;
export const ADMINISTRATOR_DETAILS_API_PATH = `${API_URL}/details_user`;
export const ALL_ADMINISTRATORS_API_PATH = `${API_URL}/administrateurs`;
export const CREATE_ADMINISTRATOR_API_PATH = `${API_URL}/create_administrateur`;
export const ADMINISTRATOR_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Overseers
export const OVERSEERS_API_PATH = `${API_URL}/controlleurs`;
export const EDIT_OVERSEER_API_PATH = `${API_URL}/edit_user`;
export const ALL_OVERSEERS_API_PATH = `${API_URL}/controlleurs`;
export const OVERSEER_DETAILS_API_PATH = `${API_URL}/details_user`;
export const CREATE_OVERSEER_API_PATH = `${API_URL}/create_controlleur`;
export const TOGGLE_OVERSEER_STATUS_API_PATH = `${API_URL}/edit_user_status`;
export const OVERSEER_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Agencies
export const AGENCIES_API_PATH = `${API_URL}/agencies`;
export const EDIT_AGENCY_API_PATH = `${API_URL}/edit_agency`;
export const CREATE_AGENCY_API_PATH = `${API_URL}/new_agency`;
export const ALL_AGENCIES_API_PATH = `${API_URL}/all_agencies`;
export const AGENCY_ADD_SIM = `${API_URL}/ajouter_puce_agence`;
export const AGENCY_DETAILS_API_PATH = `${API_URL}/show_agency`;

// Accountants
export const ACCOUNTANTS_API_PATH = `${API_URL}/comptables`;
export const EDIT_ACCOUNTANT_API_PATH = `${API_URL}/edit_user`;
export const ALL_ACCOUNTANTS_API_PATH = `${API_URL}/comptables`;
export const ACCOUNTANT_DETAILS_API_PATH = `${API_URL}/details_user`;
export const CREATE_ACCOUNTANT_API_PATH = `${API_URL}/create_comptable`;
export const TOGGLE_ACCOUNTANT_STATUS_API_PATH = `${API_URL}/edit_user_status`;
export const ACCOUNTANT_PASSWORD_RESET_API_PATH = `${API_URL}/user_password_reset`;

// Operators
export const OPERATOR_API_PATH = `${API_URL}/show_flote`;
export const OPERATORS_API_PATH = `${API_URL}/flote_list`;
export const OPERATOR_ADD_SIM = `${API_URL}/ajouter_puce_flote`;
export const CREATE_OPERATOR_API_PATH = `${API_URL}/store_flote`;
export const All_OPERATORS_API_PATH = `${API_URL}/flote_list_all`;
export const EDIT_OPERATOR_INFO_API_PATH = `${API_URL}/edit_flote`;

// Zones
export const ZONES_API_PATH = `${API_URL}/zone_list`;
export const EDIT_ZONE_API_PATH = `${API_URL}/edit_zone`;
export const CREATE_ZONE_API_PATH = `${API_URL}/store_zone`;
export const ZONES_DETAILS_API_PATH = `${API_URL}/show_zone`;
export const All_ZONES_API_PATH = `${API_URL}/zone_list_all`;
export const ZONE_ADD_AGENT_API_PATH = `${API_URL}/ajouter_agent_zone`;

// Vendors
export const VENDORS_API_PATH = `${API_URL}/vendors`;
export const ALL_VENDORS_API_PATH = `${API_URL}/all_vendors`;
export const EDIT_VENDOR_API_PATH = `${API_URL}/edit_vendor`;
export const CREATE_VENDOR_API_PATH = `${API_URL}/new_vendor`;
export const VENDOR_DETAILS_API_PATH = `${API_URL}/show_vendor`;

// Companies
export const COMPANY_API_PATH = `${API_URL}/show_corporate`;
export const COMPANIES_API_PATH = `${API_URL}/corporate_list`;
export const COMPANY_ADD_SIM = `${API_URL}/ajouter_puce_corporate`;
export const CREATE_COMPANY_API_PATH = `${API_URL}/store_corporate`;
export const All_COMPANIES_API_PATH = `${API_URL}/corporate_list_all`;
export const EDIT_COMPANY_INFO_API_PATH = `${API_URL}/edit_corporate`;
export const EDIT_COMPANY_DOC_API_PATH = `${API_URL}/edit_corporate_folder`;

// Sims types
export const All_SIMS_TYPES_API_PATH = `${API_URL}/types_puces_list`;

// Recoveries
export const NEW_FLEET_RECOVERIES_API_PATH = `${API_URL}/retour_flotte`;
export const FLEET_RECOVERIES_API_PATH = `${API_URL}/list_retour_flotte_by_rz`;

export const NEW_CASH_RECOVERIES_API_PATH = `${API_URL}/recouvrement`;
export const CASH_RECOVERIES_API_PATH = `${API_URL}/list_recouvrement_by_rz`;

// Transfers
export const TRANSFERS_API_PATH = `${API_URL}/list_all_flottage_interne`;
export const NEW_TRANSFERS_API_PATH = `${API_URL}/flottage_interne_rz_gf`;

// Supplies
export const SUPPLIES_API_PATH = `${API_URL}/list_all_flottage`;

// Network supplies
export const NEW_NETWORK_SUPPLY_API_PATH = `${API_URL}/flottage_by_rz`;
export const NETWORK_SUPPLIES_API_PATH = `${API_URL}/list_flottage_rz_by_rz`;

// Refuels
export const NEW_REFUEL_API_PATH = `${API_URL}/approvisionnement_etp`;
export const REFUELS_API_PATH = `${API_URL}/list_destockage_collector`;

// Affords
export const AFFORDS_API_PATH = `${API_URL}/list_approvisionnement_collector`;

// Sims
export const SIM_API_PATH = `${API_URL}/show_puce`;
export const SIMS_API_PATH = `${API_URL}/puce_list`;
export const EDIT_SIM_API_PATH = `${API_URL}/edit_puce`;
export const CREATE_SIM_API_PATH = `${API_URL}/store_puce`;
export const All_SIMS_API_PATH = `${API_URL}/puce_list_all`;
export const SEARCH_SIMS_API_PATH = `${API_URL}/search_sims`;
export const MASTERS_SIMS_API_PATH = `${API_URL}/puce_list_master`;
export const AGENTS_SIMS_API_PATH = `${API_URL}/puce_list_all_agent`;
export const FLEETS_SIMS_API_PATH = `${API_URL}/puce_list_gestionnaire`;
export const COLLECTORS_SIMS_API_PATH = `${API_URL}/puce_list_collector`;
export const RESOURCES_SIMS_API_PATH = `${API_URL}/puce_list_all_resource`;
