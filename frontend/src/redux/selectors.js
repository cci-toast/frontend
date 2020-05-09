import {
  calcProtectionMultiplier,
  calcProtection,
  calcSavingsLowerBound,
  calcSavingsUpperBound,
  calcRetirementMultiplier,
  calcRetirement,
  calcMonthlyValue,
  calcDebtMonthly,
  calcSalaryAfterDebt,
  calcSavings,
  calcFixedExpenses,
  calcSpending,
  calcRetirementYears,
  calcRetirementMonthly,
} from "../utils/plan-utils";
import { lookupUser } from "../utils/login-utils";
import { filterClients } from "../utils/search-utils";

import { createSelector } from "reselect";

// toast-page-nav
export const getProfileTitlesList = (state) =>
  state.toastPageNavReducer.profileTitlesList;
export const getFactorsTitlesList = (state) =>
  state.toastPageNavReducer.factorsTitlesList;
export const getActiveTitle = (state) => state.toastPageNavReducer.activeTitle;

// login
export const getEmail = (state) => state.loginReducer.email;
export const getPassword = (state) => state.loginReducer.password;
export const getUser = createSelector([getEmail, getPassword], lookupUser);
export const isLoggedInAdvisor = (state) =>
  state.loginReducer.isLoggedInAdvisor;
export const isLoggedInClient = (state) => state.loginReducer.isLoggedInClient;

// page content
export const getCurrentStep = (state) => state.pageContentReducer.currentStep;
export const getShowPlanReady = (state) =>
  state.pageContentReducer.showPlanReady;
export const getAddedFinancesStep = (state) =>
  state.pageContentReducer.addedFinancesStep;

// PROFILE

// profile
export const getClientId = (state) => state.profileReducer.clientId;
export const getFirstName = (state) => state.profileReducer.firstName;
export const getMiddleName = (state) => state.profileReducer.middleName;
export const getLastName = (state) => state.profileReducer.lastName;
export const getBirthYear = (state) => state.profileReducer.birthYear;
export const getCity = (state) => state.profileReducer.city;
export const getState = (state) => state.profileReducer.state;
export const getCities = (state) => state.profileReducer.cities;

export const getAge = createSelector(
  [getBirthYear],
  (birthYear) => new Date().getFullYear() - birthYear
);

// finances
export const getSalaryAfterTax = (state) =>
  state.financesReducer.salaryAfterTax;
export const getMonthlySalaryAfterTax = createSelector(
  [getSalaryAfterTax],
  calcMonthlyValue
);
export const getAdditionalIncome = (state) =>
  state.financesReducer.additionalIncome;

export const getRetirement = (state) => state.financesReducer.retirement;

export const getHousingType = (state) => state.financesReducer.housingType;
export const getHousingAmount = (state) => state.financesReducer.housingAmount;
export const getProtectionPolicy = (state) =>
  state.financesReducer.protectionPolicy;
export const getProtectionMonthly = (state) =>
  state.financesReducer.protectionMonthly;
export const getBill = (state) => state.financesReducer.bill;
export const getUtility = (state) => state.financesReducer.utility;

export const getLoanDebt = (state) => state.financesReducer.loanDebt;
export const getShopping = (state) => state.financesReducer.shopping;
export const getLeisure = (state) => state.financesReducer.leisure;
export const getTransportation = (state) =>
  state.financesReducer.transportation;
export const getSubscription = (state) => state.financesReducer.subscription;
export const getOther = (state) => state.financesReducer.other;

// family
export const getPartners = (state) => state.familyReducer.partners;
export const getPartnerSalaries = (state) =>
  state.familyReducer.partners.map((partner) => partner.salary);
export const getPartnerSalariesSum = createSelector(
  [getPartnerSalaries],
  (partnerSalaries) => partnerSalaries.reduce((a, b) => a + b, 0)
);
export const getChildren = (state) => state.familyReducer.children;

// goals
export const getGoals = (state) => state.goalsReducer.goals;

// PLAN

// protection
export const getProtectionMultiplier = createSelector(
  [getAge],
  calcProtectionMultiplier
);
export const getProtectionPolicyPlan = createSelector(
  [getSalaryAfterTax, getProtectionMultiplier],
  calcProtection
);
export const getProtectionMonthlyPlan = (state) =>
  state.planReducer.protectionMonthly;

// emergency savings
export const getSavingsLowerBound = createSelector(
  [getMonthlySalaryAfterTax],
  calcSavingsLowerBound
);
export const getSavingsUpperBound = createSelector(
  [getMonthlySalaryAfterTax],
  calcSavingsUpperBound
);

export const getHouseholdIncome = createSelector(
  [getSalaryAfterTax, getPartnerSalariesSum],
  (salaryAfterTax, partnerSalariesSum) => salaryAfterTax + partnerSalariesSum
);
// retirement
export const getRetirementMultiplier = createSelector(
  [getAge],
  calcRetirementMultiplier
);
export const getRetirementTargetSavings = createSelector(
  [getSalaryAfterTax, getRetirementMultiplier],
  calcRetirement
);

export const getRetirementYears = createSelector([getAge], calcRetirementYears);

export const getRetirementMonthly = createSelector(
  [getMonthlySalaryAfterTax, getRetirementYears],
  calcRetirementMonthly
);

// debt
export const getDebtMonthly = createSelector(
  [getSalaryAfterTax],
  calcDebtMonthly
);
export const getSalaryAfterDebt = createSelector(
  [getDebtMonthly, getMonthlySalaryAfterTax],
  calcSalaryAfterDebt
);

// budgeting
export const getSavings = createSelector([getSalaryAfterTax], calcSavings);
export const getFixedExpenses = createSelector(
  [getSalaryAfterTax],
  calcFixedExpenses
);
export const getSpending = createSelector([getSalaryAfterTax], calcSpending);

// advisor
export const getAdvisorFirstName = (state) => state.advisorReducer.firstName;
export const getAdvisorLastName = (state) => state.advisorReducer.lastName;
export const getAdvisorEmail = (state) => state.advisorReducer.email;
export const getAdvisorPhoneNumber = (state) =>
  state.advisorReducer.phoneNumber;
export const getAdvisorAddress = (state) => state.advisorReducer.address;
export const getSearchTerm = (state) => state.advisorReducer.searchTerm;
export const getClients = (state) => state.advisorReducer.clients;
export const getFilteredClients = createSelector(
  [getClients, getSearchTerm],
  filterClients
);
