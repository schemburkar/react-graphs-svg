

export const getNumericItems = (start: number, end: number, intervalValue: number) => {
    const items = [];
    let initial = start;
    while (initial <= end) {
        items.push(initial);
        initial = initial + intervalValue;
    }
    items.push(initial);
    return items;
};
