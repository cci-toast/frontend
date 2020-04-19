export const goalOptions = [
  "I want to save money to pay off my credit card",
  "I want to save money to pay off student debt",
  "I want to save money for a vacation",
  "I want to save money to buy/rent a property",
  "I want to create an emergency savings fund",
  "I want to save money to prepare for retirement",
  "Other (Type in)",
];

export const stateOptions = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

export const getStateCode = (name) => {
  let results = stateOptions.filter((state) => state.name === name);
  if (!!results.length) {
    return stateOptions.filter((state) => state.name === name)[0].code;
  }
  return null;
};

export const utilityOptions = [
  "Water",
  "Electricity",
  "Gas",
  "Sewer",
  "Internet",
  "Telephone",
  "TV",
];

export const insuranceOptions = [
  "Health Insurance",
  "Life Insurance",
  "Dental Insurance",
  "Car Insurance",
  "Homeowners/RentInsurance",
  "Life Insurance",
  "Flood Insurance",
  "Pet Insurance",
  "Disability Insurance",
  "Umbrella Insurance",
];

export const housingOptions = ["Rent", "Mortgage"];

export const billOptions = [
  "Rent",
  "Mortgage",
  "Lawn Service",
  "Water",
  "Electricity",
  "Gas",
  "Sewer",
  "Internet",
  "Telephone",
  "TV",
];

export const shoppingOptions = ["Groceries", "Clothing/Shoes"];

export const leisureOptions = ["Concert", "Dining", "Vacation", "Sports"];

export const transportationOptions = ["Car", "Bus", "Train", "Flight"];

export const subscriptionOptions = [
  "Music Subscription (Spotify, Apple Music)",
  "TV/Movie Subscription (Netflix, Hulu, Disney+)",
  "Gym Membership",
  "Magazine Subscription",
];

export const loandebtOptions = ["Credit Card", "School/Student", "Medical"];

export const childEducationOptions = ["College", "Going to College"];

export const getBirthYearOptions = (maxOffset) => {
  if (maxOffset == null) {
    maxOffset = 120;
  }
  let thisYear = new Date().getFullYear();
  let birthYearOptions = [];
  for (let x = 0; x <= maxOffset; x++) {
    birthYearOptions.push(thisYear - x);
  }
  return birthYearOptions;
};
