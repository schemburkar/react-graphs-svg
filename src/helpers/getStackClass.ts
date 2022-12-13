export const getStackClass = (index: number) => {
    const colors = ["fill-stack-1", "fill-stack-2", "fill-stack-3", "fill-stack-4"];
    return colors[index % colors.length];
};
