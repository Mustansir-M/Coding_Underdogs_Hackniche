import React from "react";

import { Button, Img, Text } from "components";

const DashboardCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              {props?.p89935}
            </Text>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtPoppinsRegular16Black900"
            >
              {props?.language}
            </Text>
          </div>
          <Button
            className="flex h-11 items-center justify-center rounded-[12px] w-11"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <Img className="h-6" src="images/img_users.svg" alt="users" />
          </Button>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img className="h-5 w-5" alt="up" src={props?.up} />
            <Text
              className="text-indigo-300 text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              {props?.onehundredtwo}
            </Text>
          </div>
          <Text
            className="flex-1 text-indigo-300 text-sm w-auto"
            size="txtPoppinsRegular14"
          >
            {props?.p101thisweek}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardCard.defaultProps = {
  p89935: "89,935",
  language: "Total users ",
  up: "images/img_up.svg",
  onehundredtwo: "10.2",
  p101thisweek: "+1.01% this week",
};

export default DashboardCard;
