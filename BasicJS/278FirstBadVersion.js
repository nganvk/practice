/**
 * Definition for isBadVersion()
 * 
 * param {integer} version number
 * return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

function solution(isBadVersion) {
    return function(n) {
        let left = 1, right = n, mid = 0, firstBad = 0;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                firstBad = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return firstBad;
    }
}