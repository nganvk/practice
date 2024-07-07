function solution(S) {

    if (S[0] !== S[S.length - 1] && S[0] !== "?" && S[S.length - 1] !== "?") {
        return "NO"
    }

    let arr = S.split("");
    let lastElementIndex = arr.length - 1;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "?" && arr[lastElementIndex - i] !== "?") {
            arr[i] = arr[lastElementIndex - i]
        } else if (arr[i] === "?" && arr[lastElementIndex - i] === "?") {
            arr[i] = arr[lastElementIndex - i] = "a"
        } else if (arr[i] !== arr[lastElementIndex - i] && arr[i] !== "?" && arr[lastElementIndex - i] !== "?") {
            return "NO"
        }
    }

    return arr.join("");
}

console.log(solution("a")) //a
console.log(solution("?")) //a
console.log(solution("?ab??a")) //aabbaa
console.log(solution("bab??a")) //NO
console.log(solution("?a?")) //aaa
console.log(solution("??????")) //aaaaaa
console.log(solution("a?b??a")) //aabbaa
console.log(solution("aab???")) //aabbaa
console.log(solution("?cb?a?")) //NO
console.log(solution("??cbahdds?")) //NO

// function solution(S) {
//     let N = S.length;
//     let arr = S.split('');
//     for(let i = 0; i < Math.floor(N/2); i++) {
//         if(arr[i] !== '?' && arr[N-i-1] !== '?' && arr[i] !== arr[N-i-1]) {
//             return "NO";
//         }
//         if(arr[i] === '?' && arr[N-i-1] !== '?') {
//             arr[i] = arr[N-i-1];
//         }
//         if(arr[i] !== '?' && arr[N-i-1] === '?') {
//             arr[N-i-1] = arr[i];
//         }
//         if(arr[i] === '?' && arr[N-i-1] === '?') {
//             arr[i] = arr[N-i-1] = 'a';
//         }
//     }
//     if(N % 2 !== 0 && arr[Math.floor(N/2)] === '?') {
//         arr[Math.floor(N/2)] = 'a';
//     }
//     return arr.join('');
// }
