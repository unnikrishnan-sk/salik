export const emailValidate = (email) => {
    const expression = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return expression.test((email)?.toLowerCase());
}