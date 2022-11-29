import { AxisParameters, ChartComponentClassName, ChartCoordinates, Data } from "./ChartProps";

export type AxisProps = {
    items: Data[];
    chart: ChartCoordinates;
    axis: AxisParameters;
    classNames?: ChartComponentClassName

};
