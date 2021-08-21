declare module '@styled-system/prop-types' {
  interface PropTypes {
    space: Record<string, any>,
    color: Record<string, any>,
    layout: Record<string, any>,
    typography: Record<string, any>,
    flexbox: Record<string, any>,
    border: Record<string, any>,
    background: Record<string, any>,
    position: Record<string, any>,
    grid: Record<string, any>,
    shadow: Record<string, any>,
    buttonStyle: Record<string, any>,
    textStyle: Record<string, any>,
    colorStyle: Record<string, any>,
  }

  const propTypes: PropTypes; 
  
  export default propTypes;
}