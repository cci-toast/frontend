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
} from "../utils/plan-utils";

// toast-page-nav
export const getProfileTitlesList = (state) =>
  state.toastPageNavReducer.profileTitlesList;
export const getFactorsTitlesList = (state) =>
  state.toastPageNavReducer.factorsTitlesList;
export const getActiveTitle = (state) => state.toastPageNavReducer.activeTitle;

// login
export const getEmail = (state) => state.loginReducer.email;
export const getPassword = (state) => state.loginReducer.password;

// page content
export const getCurrentStep = (state) => state.pageContentReducer.currentStep;

// PROFILE

// profile
export const getFirstName = (state) => state.profileReducer.firstName;
export const getMiddleName = (state) => state.profileReducer.middleName;
export const getLastName = (state) => state.profileReducer.lastName;
export const getBirthYear = (state) => state.profileReducer.birthYear;
export const getCity = (state) => state.profileReducer.city;
export const getState = (state) => state.profileReducer.state;

export const getAge = (state) =>
  new Date().getFullYear() - state.profileReducer.birthYear;

// finances
export const getSalaryBeforeTax = (state) =>
  state.financesReducer.salaryBeforeTax;
export const getSalaryAfterTax = (state) =>
  state.financesReducer.salaryAfterTax;
export const getMonthlySalaryAfterTax = (state) =>
  calcMonthlyValue(getSalaryAfterTax(state));
export const getShopping = (state) => state.financesReducer.shopping;

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
export const getProtection = (state) =>
  calcProtection(getSalaryAfterTax(state), getProtectionMultiplier(state));
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
  calcRetirement(
    getSalaryAfterTax(state),
    getPartnerSalariesSum(state),
    getRetirementMultiplier(state)
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