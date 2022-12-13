import { BaseChartProps } from "../types";
import { ChartCoordinates } from "../components/shared/ChartCoordinates";

export const getChartCoordinates = (chart: BaseChartProps) => {
    const { size } = chart;
    const [x1, y2, x2, y1] = [0, 0, ...size];
    const chartCoordinates: ChartCoordinates = { x1, y2, x2, y1 };
    return chartCoordinates;
};
