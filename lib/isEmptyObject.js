/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
function isEmptyObject(obj) {
  let name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

export default isEmptyObject;
