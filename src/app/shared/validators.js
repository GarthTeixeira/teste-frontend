// Função para validar o email
export function validateEmail(control) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
  
  // Função para validar a senha
  export function validatePassword(control) {
    const valid = control.value && control.value.length >= 8;
    return valid ? null : { invalidPassword: true };
  }