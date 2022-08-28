const isHelpGroupExist = (group, array) => {
  const existingItemIndex = array.findIndex(item => item === group);
  const existingItem = array[existingItemIndex]
  if (existingItem) { return true }
  else { return false }
}

export default isHelpGroupExist;

