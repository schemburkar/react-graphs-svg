import { ChartProps, MultiDataSeries } from ".";

export type StackedBarChartProps = ChartProps<MultiDataSeries> & {
    seriesNames: string[];
};
