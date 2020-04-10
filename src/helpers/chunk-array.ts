function chunkArray(array: Array<any>, chunkSize: number) {
  const results = [];
    
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  
  return results;
}

export default chunkArray;
