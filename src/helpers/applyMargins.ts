import { Margins } from "../types";
import { ChartCoordinates } from "../components/shared/ChartCoordinates";


export const applyMargins = ({ x1, x2, y1, y2 }: ChartCoordinates, { margin: [mx, my] }: Margins): ChartCoordinates => ({ x1: x1 + mx, x2: x2 - mx, y1: y1 - my, y2: y2 + my });
