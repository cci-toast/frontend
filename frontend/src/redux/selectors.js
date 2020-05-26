import { calcMonthlyValue, calcSalaryAfterDebt } from "../utils/plan-utils";
import { lookupUser } from "../utils/login-utils";
import { filterClients } from "../utils/search-utils";
import { sortItemsBackwards } from "../utils/action-items-utils";

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
export const getAuthKey = (state) => state.loginReducer.authKey;

// page content
export const getCurrentStep = (state) => state.pageContentReducer.currentStep;
export const getShowPlanReady = (state) =>
  state.pageContentReducer.showPlanReady;
export const isLoading = (state) => state.pageContentReducer.isLoading;

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

// delete
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
export const getUtility = (state) => state.financesReducer.utility;

export const getLoanDebt = (state) => state.financesReducer.loanDebt;
export const getShopping = (state) => state.financesReducer.shopping;
export const getLeisure = (state) => state.financesReducer.leisure;
export const getTransportation = (state) =>
  state.financesReducer.transportation;
export const getSubscription = (state) => state.financesReducer.subscription;
export const getOther = (state) => state.financesReducer.other;
export const getExpensesId = (state) => state.financesReducer.expensesId;

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
export const getProtectionMultiplier = (state) =>
  state.planReducer.protectionFactor;
export const getProtectionPolicyPlan = (state) => state.planReducer.protection;

// emergency savings
export const getSavingsLowerBound = (state) =>
  state.planReducer.emergencySavingsLower;
export const getSavingsUpperBound = (state) =>
  state.planReducer.emergencySavingsUpper;
export const getTotalIncome = createSelector(
  [getSalaryAfterTax, getAdditionalIncome],
  (salary, income) => Number(salary || 0) + Number(income || 0)
);
export const getSavingsFactorUpperBound = (state) =>
  state.planReducer.emergencySavingsFactorUpper;
export const getSavingsFactorLowerBound = (state) =>
  state.planReducer.emergencySavingsFactorLower;

// retirement
export const getRetirementMultiplier = (state) =>
  state.planReducer.retirementFactor;
export const getRetirementTargetSavings = (state) =>
  state.planReducer.retirement;

// debt
export const getDebtMonthly = (state) => state.planReducer.monthlyMaxDebt;
export const getSalaryAfterDebt = createSelector(
  [getDebtMonthly, getMonthlySalaryAfterTax],
  calcSalaryAfterDebt
);
export const getDebtMultiplier = (state) =>
  state.planReducer.debtRepaymentFactor;
export const isOnTrackDebt = (state) => state.planReducer.isOnTrackDebt;

// budgeting
export const getSavings = (state) => state.planReducer.budgetSavings;
export const getSavingsMultiplier = (state) =>
  state.planReducer.budgetSavingsFactor;
export const getFixedExpenses = (state) =>
  state.planReducer.budgetFixedExpenses;
export const getFixedExpensesMultiplier = (state) =>
  state.planReducer.budgetFixedExpensesFactor;
export const getSpending = (state) => state.planReducer.budgetSpending;
export const getSpendingMultiplier = (state) =>
  state.planReducer.budgetSpendingFactor;

// action items
export const getActionItems = (state) => state.actionItemsReducer.actionItems;

export const getActionItemsSorted = createSelector(
  [getActionItems],
  sortItemsBackwards
);

// advisor
export const getAdvisorId = (state) => state.advisorReducer.id;
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
