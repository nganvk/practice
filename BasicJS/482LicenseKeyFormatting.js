function licenseKeyFormatting(s, k) {
    s = s.replace(/-/g, "").toUpperCase();
    let reformatted = "";
    let n = s.length;
    let remainChar = n % k;
    let group = Math.floor(n / k);

    if (remainChar > 0 && group > 0) {
        reformatted = reformatted + s.substring(0, remainChar) + "-";
    } else if (remainChar > 0 && group === 0) {
        reformatted = reformatted + s.substring(0, remainChar);
    }

    while (group > 0) {
        reformatted = reformatted + s.substring(remainChar, remainChar + k);
        remainChar = remainChar + k;
        group--;

        if (group > 0) {
            reformatted = reformatted + "-";
        }
    }

    return reformatted;
}


console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
console.log(licenseKeyFormatting("2", 2));