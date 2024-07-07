/**
 * Definition for isBadVersion()
 * 
 * param {integer} version number
 * return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * param {function} isBadVersion()
 * return {function}
 */

var solution = function(isBadVersion) {
    return function(n) {
        let left = 1, right = n, firstBad = 0;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

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