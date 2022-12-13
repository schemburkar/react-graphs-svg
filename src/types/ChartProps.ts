import { ReactNode } from "react";
import { Data } from "./Data";
import { DataSeries, Margins, XY } from ".";

export type BaseChartProps = {
    className?: string;
    children?: ReactNode;
    axis: XY<Data[]>;
    size: XY;
    margins: Margins;
};


export type ChartProps<T = DataSeries> = BaseChartProps & {
    data: T;
};


