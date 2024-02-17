import React from "react";

import { Text } from "components";

const DashboardStatusdelivery = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start px-3 py-1 rounded-lg shadow-bs w-auto md:w-full">
          <div className="bg-orange-500 h-2 rounded-[50%] w-2"></div>
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtPoppinsRegular12"
          >
            {props?.newordertextstyles}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardStatusdelivery.defaultProps = { newordertextstyles: "On Delivery" };

export default DashboardStatusdelivery;
