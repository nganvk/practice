function solution(P, S) {
    let minimumCars = 0;
    let cars = P.length;
    let totalFriends = P.reduce((a, b) => a + b, 0);

    S.sort((a, b) => b - a);

    for (let i = 0; i < cars; i++) {
        let seats = totalFriends - S[i];

        if(seats > 0) {
            minimumCars++;
            totalFriends = seats;
        } else {
            minimumCars++;
            break;
        }
    }

    return minimumCars;
}

console.log(solution([1,4,1], [1,5,1])) //2
console.log(solution([4,4,2,4], [5,5,2,5])) //3
console.log(solution([2,3,4,2], [2,5,7,2])) //2
console.log(solution([2], [2])) //1
console.log(solution([1], [2])) //1








//A group of friend is going on holiday together. They have come to a meeting point (the start of the journey) using N cars. There are P[K] people and S[K] seats in the K-th car for K in range [0...N-1]. Some of the seats in the cars may be free, so it is possible for some of the friends to change the car they are in. The friends have decided that, in otder to be ecological, they will leave some cars parked at the meeting point and travel with as few cars as possible.

//Write a function
//function solution(P, S, N)
//that, given 2 arrays P and S, consisting of N integers each, returns the minimum number of cars needed to take all of the friends on holiday.
