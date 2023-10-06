const makeRoute = (str) => {
    const text = str || "";
    const newStr = text.replaceAll(" ", "-");
    return newStr;
};

export default makeRoute;
