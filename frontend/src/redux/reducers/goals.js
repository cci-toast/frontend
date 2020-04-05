const initialState = {
  goals: [
    {
      id: 0,
      description: "",
      amount: 0.0,
      endDate: "",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setGoalListValue": {
      const { index, valueName, value } = action.payload;
      return {
        ...state,
        goals: state.goals.map((goal) => {
          if (goal.id === index) {
            goal[valueName] = value;
          }
          return goal;
        }),
      };
    }
    case "addGoal": {
      return {
        ...state,
        goals: [
          ...state.goals,
          {
            id: state.goals.length + 1,
            description: "",
            amount: 0.0,
            endDate: "",
          },
        ],
      };
    }
    default:
      return state;
  }
}
