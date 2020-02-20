export const formatData = (data, numColumns) => {
    console.log('formatting data', data, numColumns)
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow  !== 0) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true})
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
  }