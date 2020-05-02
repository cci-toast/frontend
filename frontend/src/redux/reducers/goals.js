const initialState = {
  goals: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "addGoal": {
      const { value } = action.payload;
      return { ...state, goals: [...state.goals, value] };
    }

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

    default:
      return state;
  }
}
