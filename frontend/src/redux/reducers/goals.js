const initialState = {
  goals: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "addGoal": {
      const { goalFields } = action.payload;
      return { ...state, goals: [...state.goals, goalFields] };
    }

    case "setGoalListValue": {
      const { index, valueName, value } = action.payload;
      let tempGoals = [...state.goals];
      tempGoals[index][valueName] = value;
      return {
        ...state,
        goals: tempGoals,
      };
    }
    case "deleteGoal": {
      const { index } = action.payload;
      let tempGoals = [...state.goals];
      tempGoals.splice(index, 1);
      return {
        ...state,
        goals: tempGoals,
      };
    }

    default:
      return state;
  }
}
