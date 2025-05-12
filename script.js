function indexOfIgnoreCase(str: string, subStr: string): number {
    // Handle empty subStr edge case
    if (subStr === "") return 0;

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence
    return lowerStr.indexOf(lowerSubStr);
}

