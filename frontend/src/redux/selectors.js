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

// toast-page-nav
export const getProfileTitlesList = (state) =>
  state.toastPageNavReducer.profileTitlesList;
export const getFactorsTitlesList = (state) =>
  state.toastPageNavReducer.factorsTitlesList;
export const getActiveTitle = (state) => state.toastPageNavReducer.activeTitle;

// login
export const getEmail = (state) => state.loginReducer.email;
export const getPassword = (state) => state.loginReducer.password;
export const getUser = (state) =>
  lookupUser(getEmail(state), getPassword(state));
export const isLoggedInAdvisor = (state) =>
  state.loginReducer.isLoggedInAdvisor;
export const isLoggedInClient = (state) => state.loginReducer.isLoggedInClient;

// page content
export const getCurrentStep = (state) => state.pageContentReducer.currentStep;
export const getHideSave = (state) => state.pageContentReducer.hideSave;
export const getHideCancel = (state) => state.pageContentReducer.hideCancel;
export const getSaveText = (state) => state.pageContentReducer.saveText;

// PROFILE

// profile
export const getFirstName = (state) => state.profileReducer.firstName;
export const getMiddleName = (state) => state.profileReducer.middleName;
export const getLastName = (state) => state.profileReducer.lastName;
export const getBirthYear = (state) => state.profileReducer.birthYear;
export const getCity = (state) => state.profileReducer.city;
export const getState = (state) => state.profileReducer.state;
export const getCities = (state) => state.profileReducer.cities;

export const getAge = (state) =>
  new Date().getFullYear() - state.profileReducer.birthYear;

// finances
export const getSalaryAfterTax = (state) =>
  state.financesReducer.salaryAfterTax;
export const getMonthlySalaryAfterTax = (state) =>
  calcMonthlyValue(getSalaryAfterTax(state));
export const getShopping = (state) => state.financesReducer.shopping;
export const getProtectionMonthly = (state) =>
  state.financesReducer.protectionMonthly;
export const getProtectionPolicy = (state) =>
  state.financesReducer.protectionPolicy;

// family
export const getPartners = (state) => state.familyReducer.partners;
export const getPartnerSalaries = (state) =>
  state.familyReducer.partners.map((partner) => partner.salary);
export const getPartnerSalariesSum = (state) =>
  getPartnerSalaries(state).reduce((a, b) => a + b, 0);
export const getChildren = (state) => state.familyReducer.children;

// goals
export const getGoals = (state) => state.goalsReducer.goals;

// PLAN

// protection
export const getProtectionMultiplier = (state) =>
  calcProtectionMultiplier(getAge(state));
export const getProtectionPolicyPlan = (state) =>
  calcProtection(getSalaryAfterTax(state), getProtectionMultiplier(state));
export const getProtectionMonthlyPlan = (state) =>
  state.planReducer.protectionMonthly;

// emergency savings
export const getSavingsLowerBound = (state) =>
  calcSavingsLowerBound(getMonthlySalaryAfterTax(state));
export const getSavingsUpperBound = (state) =>
  calcSavingsUpperBound(getMonthlySalaryAfterTax(state));

// retirement
export const getHouseholdIncome = (state) =>
  getSalaryAfterTax(state) + getPartnerSalariesSum(state);
export const getRetirementMultiplier = (state) =>
  calcRetirementMultiplier(getAge(state));
export const getRetirement = (state) =>
  calcRetirement(getSalaryAfterTax(state), getRetirementMultiplier(state));
export const getRetirementSavings = (state) =>
  state.financesReducer.retirementSavings;
export const getRetirementYears = (state) => calcRetirementYears(getAge(state));
export const getRetirementMonthly = (state) =>
  calcRetirementMonthly(
    getMonthlySalaryAfterTax(state),
    getRetirementYears(state)
  );

// debt
export const getDebtMonthly = (state) =>
  calcDebtMonthly(getSalaryAfterTax(state));
export const getSalaryAfterDebt = (state) =>
  calcSalaryAfterDebt(getDebtMonthly(state), getMonthlySalaryAfterTax(state));

// budgeting
export const getSavings = (state) => calcSavings(getSalaryAfterTax(state));
export const getFixedExpenses = (state) =>
  calcFixedExpenses(getSalaryAfterTax(state));
export const getSpending = (state) => calcSpending(getSalaryAfterTax(state));

// advisor
export const getAdvisorFirstName = (state) => state.advisorReducer.firstName;
export const getAdvisorLastName = (state) => state.advisorReducer.lastName;
export const getAdvisorEmail = (state) => state.advisorReducer.email;
export const getAdvisorPhoneNumber = (state) =>
  state.advisorReducer.phoneNumber;
export const getAdvisorAddress = (state) => state.advisorReducer.address;
