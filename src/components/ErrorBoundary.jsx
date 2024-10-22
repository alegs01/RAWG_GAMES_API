// ErrorBoundary.jsx
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para que la próxima renderización muestre la UI de error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Registrar el error a un servicio de informes de errores, si es necesario
    console.error('Error Boundary Captured Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderizar cualquier UI de error personalizada aquí
      return <h1>Algo salió mal. Por favor, intenta de nuevo más tarde.</h1>;
    }

    // Asegurarnos de que children se renderice correctamente
    return this.props.children; 
  }
}

// Validación de props
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Prop para children
};

export default ErrorBoundary;
