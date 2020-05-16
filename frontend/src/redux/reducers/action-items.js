const initialState = {
  actionItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setActionItems": {
      const { actionItems } = action.payload;
      return {
        ...state,
        actionItems: actionItems,
      };
    }
    case "setActionItemListValue": {
      const { index, valueName, value } = action.payload;
      let tempActionItems = [...state.actionItems];
      tempActionItems[index][valueName] = value;
      return {
        ...state,
        actionItems: tempActionItems,
      };
    }
    case "addActionItem": {
      const { actionItemFields } = action.payload;
      return {
        ...state,
        actionItems: [...state.actionItems, actionItemFields],
      };
    }
    case "deleteActionItem": {
      const { index } = action.payload;
      let tempActionItems = [...state.actionItems];
      tempActionItems.splice(index, 1);
      return {
        ...state,
        actionItems: tempActionItems,
      };
    }
    case "resetActionItems": {
      return {
        ...state,
        actionItems: [],
      };
    }
    case "toggleActionItem": {
      const { index } = action.payload;
      let tempActionItems = [...state.actionItems];
      tempActionItems[index].completed = !tempActionItems[index].completed;
      return {
        ...state,
        actionItems: tempActionItems,
      };
    }
    default:
      return state;
  }
}
