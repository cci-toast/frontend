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
      var tempGoals = [...state.goals];
      tempGoals[index][valueName] = value;
      return {
        ...state,
        goals: tempGoals,
      };
    }

    default:
      return state;
  }
}
