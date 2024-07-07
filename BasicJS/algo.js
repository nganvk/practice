/////FRACTION KNAPSACK
function fractionKnapsack (arr, capacity) {
  let tempWeight = 0;
  let tempProfit = 0;
  let w2 = 0;
  let portion = 0;
  for (let i = 0; i < arr.length; i++) {
      if (tempWeight + arr[i][1] <= W) {
          tempProfit += arr[i][0];
          tempWeight += arr[i][1];
      } else {
          w2 = W - tempWeight;
          portion = w2 / arr[i][1];
          tempProfit += arr[i][0] * portion;
      }
  }
  return tempProfit
}

/////ACTIVITY SELECTION
function activitySelection(start, finish) {
  let activities = [];
  let firstActivity = 0;
  activities.push(firstActivity);
  for (let i = 1; i < start.length; i++) {
    if (start[i] >= finish[firstActivity]) {
      activities.push(i);
      firstActivity++;
    }
  }
  return activities;
}

/////LINEAR SEARCH
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

/////BUBLE SORT
  function bubbleSort (a) {
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                let temporarily = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temporarily;
            }
        }
    }
    return(a)
}

























