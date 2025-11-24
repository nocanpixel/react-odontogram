import { FC } from 'react';

type Placement = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
interface ToothDetail {
    id: string;
    notations: {
        fdi: string;
        universal: string;
        palmer: string;
    };
    type: string;
}
interface OdontogramProps {
    name?: string;
    defaultSelected?: string[];
    onChange?: (selected: ToothDetail[]) => void;
    selectedProp?: string[];
    className?: string;
    selectedColor?: string;
    hoverColor?: string;
    theme: "light" | "dark";
    colors: Record<string, string>;
    notation?: "FDI" | "Universal" | "Palmer";
    tooltip?: {
        placement?: Placement;
        margin?: number;
        content?: React.ReactNode | ((payload?: ToothDetail) => React.ReactNode);
    };
    showTooltip?: boolean;
    showHalf?: "upper" | "lower" | "full";
}

declare function convertFDIToNotation(fdi: string, notation: "FDI" | "Universal" | "Palmer"): string;
declare function getToothNotations(fdi: string): {
    fdi: string;
    universal: string;
    palmer: string;
};
declare const Odontogram: FC<OdontogramProps>;
declare function mapToCssVars(colors: Record<string, string | undefined>): Record<string, string>;

export { Odontogram, convertFDIToNotation, Odontogram as default, getToothNotations, mapToCssVars };
