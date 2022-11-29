import { ChartCoordinates, Data, Margins, XY } from "../types/ChartProps";

export const value = (d: Data) => (typeof d === 'number') ? d : d.value;
export const text = (d: Data) => (typeof d === 'number') ? `${d}` : d.text;
export const valueof = ([x, y]: XY<Data>): XY => [value(x), value(y)];
export const textof = ([x, y]: XY<Data>): XY<string> => [text(x), text(y)];

export const applyMargins = ({ x1, x2, y1, y2 }: ChartCoordinates, { margin: [mx, my] }: Margins): ChartCoordinates => ({ x1: x1 + mx, x2: x2 - mx, y1: y1 - my, y2: y2 + my });





