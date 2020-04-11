export const goalOptions = [
  { id: 0, value: "I want to save money to pay off my credit card" },
  { id: 1, value: "I want to save money to pay off student debt" },
  { id: 2, value: "I want to save money for a vacation" },
  { id: 3, value: "I want to save money to buy/rent a property" },
  { id: 4, value: "I want to create an emergency savings fund" },
  { id: 5, value: "I want to save money to prepare for retirement" },
  { id: 6, value: "Other (Type in)" },
];

export const stateOptions = [
  { id: 0, value: "Alabama" },
  { id: 1, value: "Alaska" },
  { id: 2, value: "Arizona" },
  { id: 3, value: "Arkansas" },
  { id: 4, value: "California" },
  { id: 5, value: "Colorado" },
  { id: 6, value: "Connecticut" },
  { id: 7, value: "Delaware" },
  { id: 8, value: "Florida" },
  { id: 9, value: "Georgia" },
  { id: 10, value: "Hawaii" },
  { id: 11, value: "Idaho" },
  { id: 12, value: "Illinois" },
  { id: 13, value: "Indiana" },
  { id: 14, value: "Iowa" },
  { id: 15, value: "Kansas" },
  { id: 16, value: "Kentucky" },
  { id: 17, value: "Louisiana" },
  { id: 18, value: "Maine" },
  { id: 19, value: "Maryland" },
  { id: 20, value: "Massachusetts" },
  { id: 21, value: "Michigan" },
  { id: 22, value: "Minnesota" },
  { id: 23, value: "Mississippi" },
  { id: 24, value: "Missouri" },
  { id: 25, value: "Montana" },
  { id: 26, value: "Nebraska" },
  { id: 27, value: "Nevada" },
  { id: 28, value: "New Hampshire" },
  { id: 29, value: "New Jersey" },
  { id: 30, value: "New Mexico" },
  { id: 31, value: "New York" },
  { id: 32, value: "North Carolina" },
  { id: 33, value: "North Dakota" },
  { id: 34, value: "Ohio" },
  { id: 35, value: "Oklahoma" },
  { id: 36, value: "Oregon" },
  { id: 37, value: "Pennsylvania" },
  { id: 38, value: "Rhode Island" },
  { id: 39, value: "South Carolina" },
  { id: 40, value: "South Dakota" },
  { id: 41, value: "Tennessee" },
  { id: 42, value: "Texas" },
  { id: 43, value: "Utah" },
  { id: 44, value: "Vermont" },
  { id: 45, value: "Virginia" },
  { id: 46, value: "Washington" },
  { id: 47, value: "West Virginia" },
  { id: 48, value: "Wisconsin" },
  { id: 49, value: "Wyoming" },
];

export const utilityOptions = [
  { id: 0, value: "Water" },
  { id: 1, value: "Electricity" },
  { id: 2, value: "Gas" },
  { id: 3, value: "Sewer" },
  { id: 4, value: "Internet" },
  { id: 5, value: "Telephone" },
  { id: 6, value: "TV" },
  { id: 7, value: "Other (Type in)" },
];

export const insuranceOptions = [
  { id: 0, value: "Health Insurance" },
  { id: 1, value: "Life Insurance" },
  { id: 2, value: "Dental Insurance" },
  { id: 3, value: "Car Insurance" },
  { id: 4, value: "Homeowners/Renters Insurance" },
  { id: 5, value: "Life Insurance" },
  { id: 6, value: "Flood Insurance" },
  { id: 7, value: "Pet Insurance" },
  { id: 8, value: "Disability Insurance" },
  { id: 9, value: "Umbrella Insurance" },
  { id: 10, value: "Other (Type in)" },
];

export const housingOptions = [
  { id: 0, value: "Rent" },
  { id: 1, value: "Mortgage" },
  { id: 2, value: "Other (Type in)" },
];

export const billOptions = [
  { id: 0, value: "Rent" },
  { id: 1, value: "Mortgage" },
  { id: 2, value: "Lawn Service" },
  { id: 3, value: "Water" },
  { id: 4, value: "Electricity" },
  { id: 5, value: "Gas" },
  { id: 6, value: "Sewer" },
  { id: 7, value: "Internet" },
  { id: 8, value: "Telephone" },
  { id: 9, value: "TV" },
  { id: 10, value: "Other (Type in)" },
];

export const shoppingOptions = [
  { id: 0, value: "Groceries" },
  { id: 1, value: "Clothing/Shoes" },
  { id: 2, value: "Other (Type in)" },
];

export const leisureOptions = [
  { id: 0, value: "Concert" },
  { id: 1, value: "Dining" },
  { id: 2, value: "Vacation" },
  { id: 3, value: "Sports" },
  { id: 4, value: "Other (Type in)" },
];

export const transportationOptions = [
  { id: 0, value: "Car" },
  { id: 1, value: "Bus" },
  { id: 2, value: "Train" },
  { id: 3, value: "Flight" },
];

export const subscriptionOptions = [
  { id: 0, value: "Music Subscription (Spotify, Apple Music)" },
  { id: 1, value: "TV/Movie Subscription (Netflix, Hulu, Disney+)" },
  { id: 2, value: "Gym Membership" },
  { id: 3, value: "Magazine Subscription" },
  { id: 4, value: "Other (Type in)" },
];

export const loandebtOptions = [
  { id: 0, value: "Credit Card" },
  { id: 1, value: "School/Student" },
  { id: 2, value: "Medical" },
  { id: 4, value: "Other (Type in)" },
];

export const childEducationOptions = [
  { id: 0, value: "College" },
  { id: 1, value: "Going to College" },
  { id: 2, value: "Other" },
];

export const getBirthYearOptions = (maxOffset) => {
  if (maxOffset == null) {
    maxOffset = 120;
  }
  let thisYear = new Date().getFullYear();
  let birthYearOptions = [];
  for (let x = 0; x <= maxOffset; x++) {
    birthYearOptions.push({ id: x, value: thisYear - x });
  }
  return birthYearOptions;
};
