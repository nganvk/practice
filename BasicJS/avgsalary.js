var average = function(salary) {
    let max = salary[0];
    let min = salary[0];
    for (let i = 0; i < salary.length; i++) {
        if (max < salary[i]) {
            max = salary[i]
        }
        if (min > salary[i]) {
            min = salary[i]
        }
    }
    let avgSalary = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] != max && salary[i] != min) {
            avgSalary = (avgSalary + salary[i]);
        } else avgSalary = avgSalary;
    }
    return avgSalary/(salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));