export function checkName(name:string):Object {
  if (name.length === 0) {
    return {
      fullName: 'Please enter a full name',
    };
  }

  return {
    fullName: '',
  };
}

export function checkEmail(email:string) {
  const emailPattern =
    /^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/;

  if (email.length == 0 || !email.match(emailPattern)) {
    return {
      email: 'Please enter a valid email address',
    };
  }

  return {
    email: '',
  };
}

export function checkUsername(username:string) {
  if (username.slice(1).length === 0) {
    return {
      username: 'Please enter a valid github username',
    };
  }
  return {
    username: '',
  };
}

export function checkAvatar(avatar:File|null) {
  if (!avatar) {
    return {
      avatar: 'Upload your photo (JPG or PNG, max size: 500KB).',
    };
  }
  if (!["image/png", "image/jpeg"].includes(avatar.type)) {
    return {
      avatar: "Only JPG and PNG files are allowed."
    }
  }
  if(avatar.size > 500 * 1024){
    return {
      avatar: 'File size must be less than 500KB.',
    };
  }
  return {
    avatar: '',
  };
}
