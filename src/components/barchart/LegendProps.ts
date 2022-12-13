import { ChartCoordinates } from "../shared/ChartCoordinates";
import { AxisParameters } from "../shared/AxisParameters";

export type LegendProps = {
    seriesNames: string[];
    chart: ChartCoordinates;
    axis: AxisParameters;
};
