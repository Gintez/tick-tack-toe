function objectKeyValueInvert (obj: Object) {
  return Object.entries(obj).reduce((acc: any, entry) => {
    const [ key, value ] = entry;
    acc[value] = key;

    return acc;
  }, {});
}

export default objectKeyValueInvert;
