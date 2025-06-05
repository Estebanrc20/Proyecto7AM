import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
} from "./actionTypes"

/*export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}]*/
export const loginUser = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/login', userData);

      if (response.data.success) {
        // Aquí podrías guardar el usuario en el estado global si usas Redux
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data
        });

        // Redirigir a la página con el iframe
        navigate(`/dashboard?iframe=${encodeURIComponent(response.data.iframe)}`);
      } else {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: response.data.message
        });
        alert('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en login:', error);
      dispatch({
        type: 'LOGIN_ERROR',
        payload: 'Error en el servidor'
      });
      alert('Hubo un error al intentar iniciar sesión');
    }
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  }
}