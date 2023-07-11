const INIT_STATE = {
data: [],
count:0
};


export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case "SET_DATA":
           return{
              ...state,
              data:action.payload
           }
        case "SET_INCREMENT":
            return{
               ...state,
               count:action.payload
            } 
      default:
          return state
  }
}

