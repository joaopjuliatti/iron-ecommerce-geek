import React from 'react';

const Button = ({ className,children, method }) => <button className={className ?className :''}onClick={() => method()}>{children}</button>;

export default Button;
