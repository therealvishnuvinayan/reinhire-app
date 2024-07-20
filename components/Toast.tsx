import { useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

interface ToastProps {
  type: string;
  text: string;
}

const Toast = ({ type, text }: ToastProps) => {
  useEffect(() => {
    Toastify({
      text,
      duration: 3000,
      destination: 'https://github.com/apvarun/toastify-js',
      newWindow: true,
      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }, []);

  return null;
};

export default Toast;
