import { XY, Data } from "../types";

export const value = (d: Data) => (typeof d === 'number') ? d : d.value;
export const text = (d: Data) => (typeof d === 'number') ? `${d}` : d.text;
export const valueof = ([x, y]: XY<Data>): XY => [value(x), value(y)];
export const textof = ([x, y]: XY<Data>): XY<string> => [text(x), text(y)];
