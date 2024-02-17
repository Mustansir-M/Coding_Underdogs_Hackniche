import React from "react";

const sizeClasses = {
  txtPoppinsRegular12Indigo300: "font-normal font-poppins",
  txtPoppinsMedium16Red500: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtPoppinsMedium28: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
