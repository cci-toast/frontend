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

// profile
export const getFirstName = (state) => state.profileReducer.firstName;
export const getMiddleName = (state) => state.profileReducer.middleName;
export const getLastName = (state) => state.profileReducer.lastName;
export const getBirthYear = (state) => state.profileReducer.birthYear;
export const getCity = (state) => state.profileReducer.city;
export const getState = (state) => state.profileReducer.state;

// finances
export const getSalaryNoTax = (state) => state.financesReducer.salaryNoTax;
export const getSalaryTax = (state) => state.financesReducer.salaryTax;
export const getShopping = (state) => state.financesReducer.shopping;

// family
export const getPartners = (state) => state.familyReducer.partners;
export const getChildren = (state) => state.familyReducer.children;

// goals
export const getGoals = (state) => state.goalsReducer.goals;
