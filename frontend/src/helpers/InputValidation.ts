const TextValidation = (text: string | null = "", maxLength: number = 255, fieldName:string = "Field Name", required: boolean = true) => {
	if (text === null && required) {
		return `${fieldName} is required`;
	}
	if (text === "" && required) {
		return `${fieldName} is required`;
	}
	if (text && text?.length > maxLength) {
		return `${fieldName} max ${maxLength} charaters`;
	}

	return "";
};

const EmailValidation = (text: string | null = "", maxLength: number = 255, fieldName:string = "Field Name", required: boolean = true) => {
	if (text === null && required) {
		return `${fieldName} is required`;
	}
	if (text === "" && required) {
		return `${fieldName} is required`;
	}
	if (text && text?.length > maxLength) {
		return `${fieldName} max ${maxLength} charaters`;
	}
	if (text && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
		return `${fieldName} invalid`;
	}

	return "";
};

const PasswordValidation = (text: string | null = "", minLength: number = 8, maxLength: number = 12, fieldName:string = "Field Name", required: boolean = true) => {
	if (text === null && required) {
		return `${fieldName} is required`;
	}
	if (text === "" && required) {
		return `${fieldName} is required`;
	}
	if (text && text?.length < minLength) {
		return `${fieldName} min ${minLength} charaters`;
	}
	if (text && text?.length > maxLength) {
		return `${fieldName} max ${maxLength} charaters`;
	}

	return "";
};

const inputVal = {
    TextValidation,
    EmailValidation,
    PasswordValidation
  };

export default inputVal;