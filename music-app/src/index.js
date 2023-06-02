
import React from 'react';
import ReactDOM from 'react-dom';
import CadastroUsuario from './pages/cadastraUsuario/cadastraUsuario';
import Login from './pages/login/login';
import Login2 from './login2/login2';
import CadastraUsuario2 from './cadastraUsuario2/CadastraUsuario2';
import AppRoutes from './router/AppRoutes';


ReactDOM.render(
  <React.StrictMode>
     <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);