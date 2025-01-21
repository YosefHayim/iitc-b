const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <div>{children}</div>;
};

export default Modal;
