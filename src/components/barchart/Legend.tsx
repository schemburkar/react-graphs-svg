import { applyMargins, getStackClass } from "../../helpers";
import { LegendProps } from "./LegendProps";

export const Legend = ({ seriesNames, chart, axis }: LegendProps) => {

    const { margins, size: [sx], } = axis;
    const { x1, x2, y1, y2 } = applyMargins(chart, margins);
    const interval = (sx) / (seriesNames.length);

    const { margin: [_, my] } = margins
    return <g>
        {seriesNames.map((s, index) => <g key={index}>
            <rect x={x1 + (interval * index)} y={y1 + my * 0.9 - 2} width={2} height={2} className={`${getStackClass(index)} bar-chart chart-legend legend-box legend-box-${index + 1}`} />
            <text x={x1 + (interval * index) + 3} y={y1 + my * 0.9} className={`text-[0.2rem] fill-black text-black dark:fill-white dark:text-white bar-chart chart-legend legend-text legend-text-${index + 1}`}>{s}</text>
        </g>)}
    </g>;
};

