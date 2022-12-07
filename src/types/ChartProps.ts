import { ReactNode } from "react";

export type ChartProps = {
    data: XY<Data>[];
    className: string;
    children: ReactNode;
    axis: XY<Data[]>;
    size: XY;
    margins: Margins;
};
export type ChartComponentClassName = {
    chartArea?: string
    axis?: {
        line: string
        text: string
        marker: string
    }
    plot?: {
        marker: string
        xtext: string
        ytext: string
        tooltip: string
    }
    polyline?: string

}

export type Margins = {
    margin: XY
    startOffset: XY
}

export type ChartCoordinates = {
    x1: number, y2: number,
    x2: number, y1: number
}


export type AxisParameters = {
    min: XY
    max: XY
    size: XY
    margins: Margins
}

export type XY<T = number> = [x: T, y: T]
export type Data = number | { value: number, text: string }

