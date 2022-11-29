

export const getDateItems = (start: Date, end: Date, interval: "month" | "day", intervalValue: number) => {
    const items = [];
    let initial = start;
    while (initial <= end) {
        items.push(new Date(initial));

        switch (interval) {
            case 'month':
                initial.setMonth(initial.getMonth() + intervalValue);
                break;
            case 'day':
                initial.setDate(initial.getDate() + intervalValue);
                break;
        }
    }

    return items;
};
