const isBodyEmpty = (bodyReq) => {
  Object.keys(bodyReq).length === 0;
  return;
};

export {
  isBodyEmpty
};