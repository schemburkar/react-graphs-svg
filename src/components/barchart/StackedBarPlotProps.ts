import { AxisParameters, ChartCoordinates } from "../shared";
import { XY, Data } from "../../types";

export type StackedBarPlotProps = {
    axis: AxisParameters;
    data: XY<Data, Data[]>[];
    chart: ChartCoordinates;
};
