import js from '@eslint/js'                      // Importa configuración de eslint para JavaScript
import globals from 'globals'                     // Importa las variables globales predefinidas para el entorno
import reactHooks from 'eslint-plugin-react-hooks' // Importa el plugin de hooks para React
import reactRefresh from 'eslint-plugin-react-refresh' // Importa el plugin para React Refresh

// Exportar la configuración de ESLint
export default [
  { ignores: ['dist'] },  // Ignorar la carpeta 'dist' (generalmente para archivos generados)
  {
    // Configuración para archivos JS y JSX
    files: ['**/*.{js,jsx}'],  // Aplica estas reglas a todos los archivos .js y .jsx
    languageOptions: {
      ecmaVersion: 2020, // Definir el uso de ECMAScript 2020
      globals: globals.browser,  // Establecer las variables globales como si fueran de navegador
      parserOptions: {
        ecmaVersion: 'latest',  // Usar la versión más reciente de ECMAScript
        ecmaFeatures: { jsx: true }, // Activar soporte para JSX
        sourceType: 'module',  // Usar módulos de ES
      },
    },
    plugins: {
      'react-hooks': reactHooks,      // Agregar el plugin de React Hooks
      'react-refresh': reactRefresh,  // Agregar el plugin de React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Aplicar las reglas recomendadas de eslint para JavaScript
      ...reactHooks.configs.recommended.rules, // Aplicar las reglas recomendadas de eslint-plugin-react-hooks
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Configuración para no permitir variables no usadas, excepto si empiezan con mayúscula o son constantes
      'react-refresh/only-export-components': [
        'warn', 
        { allowConstantExport: true }, // Permitir exportaciones constantes sin alertas
      ],
    },
  },
]
