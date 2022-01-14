import './myLabel.css'

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

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;
