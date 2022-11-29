import { ChartComponentClassName } from "../types/ChartProps";

export const defaultClassNames: ChartComponentClassName = {
    axis: {
        line: 'stroke-black',
        text: 'text-black text-[0.2rem]',
        marker: 'stroke-black'
    },
    chartArea: "fill-white",
    polyline: "fill-none stroke-black",
    plot: {
        marker: "fill-slate-400",
        tooltip: "hidden group-hover:block fill-slate-300",
        xtext: "hidden group-hover:block text-[0.2rem] text-black",
        ytext: "hidden group-hover:block text-[0.2rem] text-black"
    }
};


export const darkThemeClassNames: ChartComponentClassName = {
    axis: {
        line: 'stroke-white',
        text: 'text-white text-[0.2rem]',
        marker: 'stroke-white'
    },
    chartArea: "fill-black",
    polyline: "fill-none stroke-gray-50",
    plot: {
        marker: "fill-slate-400",
        tooltip: "hidden group-hover:block fill-gray-800",
        xtext: "hidden group-hover:block text-[0.2rem] text-white",
        ytext: "hidden group-hover:block text-[0.2rem] text-white"
    }
};

