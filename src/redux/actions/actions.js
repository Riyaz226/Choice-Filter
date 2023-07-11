export function setData(item) {
    return {
      type: 'SET_DATA',
      payload: item,
    };
  }

// export function ADD(item) {
//   return {
//       type: "ADD_CART",
//       payload: item
//   }
// }

export function setInc(item) {
  return {
    type: 'SET_INCREMENT',
    payload: item,
  };
}

