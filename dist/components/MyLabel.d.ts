/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Mensaje a mostrar en la etiqueta.
     */
    label: string;
    /**
     * Tamaño de la etiqueta.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo capitalizado.
     */
    allCaps?: boolean;
    /**
     * Colores básicos de la etiqueta.
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente.
     */
    fontColor?: string;
    /**
     * Color personalizado de fondo.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
