import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import DashboardCard from "components/DashboardCard";
import DashboardStackgroupsix from "components/DashboardStackgroupsix";
import DashboardStatusdelivery from "components/DashboardStatusdelivery";

import "react-circular-progressbar/dist/styles.css";
import { Navigate, useNavigate } from "react-router";
import { RatingBar } from "components/RatingBar";


const textOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img className="h-6 mb-0.5 w-6" src="images/img_info.svg" alt="info" />
      ),
      label: "Help Centre",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_search.svg" alt="search" />
      ),
      label: "Contact us",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_logout.svg" alt="logout" />
      ),
      label: "Log out",
    },
  ];
  const dashboardCardPropList = [
    {},
    {
      language: "Total products ",
      p101thisweek: "+0.49% this week",
      onehundredtwo: "3.1",
      p89935: "23,283.5",
    },
    {
      up: "images/img_down.svg",
      p101thisweek: "-0.91% this week",
      onehundredtwo: "2.56",
      p89935: "46,827",
    },
    {
      language: "Refunded",
      p101thisweek: "+1.51% this week",
      onehundredtwo: "7.2",
      p89935: "124,854",
    },
  ];


  const navigate =useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] md:px-10 sm:px-5 px-[51px] w-full">
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start mt-[9px] mx-auto w-full">
          {/* <Sidebar className="!sticky !w-[235px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="flex flex-row gap-1 items-start justify-start mb-[769px] w-auto">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_icon.svg"
                alt="icon"
              />
              <Text
                className="text-black-900 text-xl tracking-[0.20px] w-auto"
                size="txtPoppinsMedium20"
              >
                Aeon
              </Text>
            </div>
            
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "12px",
                  color: "#7c8db5",
                  fontWeight: 500,
                  fontSize: "16px",
                  paddingLeft: "56px",
                  paddingRight: "56px",
                  [`&:hover, &.ps-active`]: { color: "#347ae2" },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_indigo_300.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-8 mt-[101px] w-full"
            >
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_chart.svg"
                      alt="chart"
                    />
                  }
                >
                  <Text className="w-auto">Overview</Text>
                </MenuItem>
                <SubMenu 
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_case.svg"
                      alt="case"
                    />
                  }
                  label={<Text className="w-auto">Product</Text>}
                >
                  
                  <MenuItem onClick={() => navigate('/inventory')}>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  label={<Text className="w-auto">Orders</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkout.svg"
                      alt="checkout"
                    />
                  }
                >
                  <Text className="w-auto">Checkout</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                >
                  <Text className="mt-0.5 w-auto">Setting</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col gap-[26px] items-center justify-start mt-[306px] w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            <Line className="bg-blue-50 h-[760px] ml-[50px] mt-10 w-px" />
            <Line className="bg-blue-600 h-6 mb-[678px] mt-[98px] rounded-bl-sm rounded-tl-sm w-1" />
          </Sidebar> */}
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1059px] w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                  size="txtPoppinsMedium28"
                >
                  Welcome Back, Marci
                </Text>
                <Text
                  className="text-base text-indigo-300 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Here is the information about all your orders
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-center justify-start w-auto">
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search_black_900.svg"
                    alt="search_One"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start pb-5 pl-5 w-6"
                    style={{ backgroundImage: "url('images/img_bell.svg')" }}
                  >
                    <div className="bg-red-500 h-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                  <SelectBox
                    className="text-base text-black-900 text-left w-[77%] sm:w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_indigo_300.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="text"
                    options={textOptionsList}
                    isSearchable={false}
                    placeholder="Marci Fumons"
                  />
                </div>
              </div>
            </div>
            <List
              className="bg-white-A700 border border-blue-50 border-solid sm:flex-col flex-row gap-[38px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start p-5 rounded-[12px] w-auto md:w-full"
              orientation="horizontal"
            >
              {dashboardCardPropList.map((props, index) => (
                <React.Fragment key={`DashboardCard${index}`}>
                  <DashboardCard
                    className="flex flex-col gap-3 items-start justify-start w-[198px]"
                    {...props}
                  />
                  {index < dashboardCardPropList.length - 1 && (
                    <Line className="self-center h-[102px] bg-blue-50 w-px" />
                  )}
                </React.Fragment>
              ))}
            </List>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-blue-50 border-solid flex flex-col gap-6 items-start justify-start p-5 rounded-[12px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[732px] w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Orders Analytics
                  </Text>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row gap-5 items-center justify-center w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-blue-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtPoppinsRegular12"
                        >
                          Offline orders
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-orange-500 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtPoppinsRegular12"
                        >
                          Online orders{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[88px]"
                          rightIcon={
                            <Img
                              className="h-4 mb-0.5 ml-1"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <div className="text-left text-xs">Monthly</div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                    <div className="h-[221px] sm:h-[323px] relative w-[732px] md:w-full">
                      <div className="h-[221px] sm:h-[323px] m-auto w-full">
                        <div className="h-[221px] sm:h-[323px] m-auto w-full">
                          <div className="h-[221px] sm:h-[323px] m-auto w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    100
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    80
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    60
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    40
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    20
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between max-w-[732px] w-full">
                                  <Text
                                    className="text-indigo-300 text-right text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    0
                                  </Text>
                                  <Line className="bg-blue-50 h-px w-[95%]" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-gradient  bottom-[5%] h-[181px] left-[39%] rounded-bl-lg rounded-br-lg w-[4%]"></div>
                          </div>
                          <Img
                            className="absolute bottom-[24%] h-[102px] right-[0]"
                            src="images/img_chart1.svg"
                            alt="chartOne"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[19%] flex flex-col h-[101px] items-start justify-start p-2.5 right-[0] w-[95%]"
                          style={{
                            backgroundImage: "url('images/img_group2.svg')",
                          }}
                        >
                          <div className="bg-blue-600 border border-solid border-white-A700 h-2 mb-[73px] md:ml-[0] ml-[246px] rounded-[50%] shadow-bs w-2"></div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-center justify-center left-[34%] top-[6%] w-auto">
                        <div className="bg-white-A700 flex flex-col items-start justify-start p-3 rounded-lg shadow-bs w-auto">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-indigo-300 text-xs w-auto"
                              size="txtPoppinsRegular12Indigo300"
                            >
                              15 Aug 2022
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtPoppinsMedium16Black900"
                            >
                              $59,492.10
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[5px] w-3"
                          src="images/img_pin.svg"
                          alt="pin"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[72px] items-start justify-start w-auto md:w-full">
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Jan
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Feb
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Mar
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Apr
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        May
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Jun
                      </Text>
                      <Text
                        className="text-indigo-300 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Jul
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue-50 border-solid flex flex-col items-start justify-start p-5 rounded-[12px] w-64">
                <div className="flex flex-col gap-5 items-center justify-end w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Earnings
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_more.svg"
                      alt="more"
                    />
                  </div>
                  <DashboardStackgroupsix className="h-[216px] relative w-[216px]" />
                  <List
                    className="sm:flex-col flex-row gap-5 grid grid-cols-3 justify-start w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-green-500 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Offline
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-orange-500 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Online{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-blue-600 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Trade
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue-50 border-solid flex flex-col gap-3 items-start justify-start p-5 rounded-[10px] w-auto md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[1011px] w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Order List
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[88px]"
                    rightIcon={
                      <Img
                        className="h-4 mb-0.5 ml-1"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="text-left text-xs">Monthly</div>
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border-b border-blue-50 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-3 w-full">
                    <Text
                      className="md:mt-0 my-[5px] text-black-900 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      No
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start ml-11 md:ml-[0] md:mt-0 my-[5px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        ID
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrows.svg"
                        alt="arrows"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[86px] md:mt-0 my-[5px] text-black-900 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      Date
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[110px] md:mt-0 my-[5px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        Customer Name
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrows.svg"
                        alt="arrows_One"
                      />
                    </div>
                    <Text
                      className="ml-12 md:ml-[0] md:mt-0 my-[5px] text-black-900 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      Location
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[134px] md:mt-0 my-[5px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        Amount
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrows.svg"
                        alt="arrows_Two"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[60px] md:mt-0 my-[5px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        Status Order
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrows.svg"
                        alt="arrows_Three"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[75px] md:mt-0 my-[5px] text-black-900 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      Action
                    </Text>
                  </div>
                  <div className="bg-white-A700 border-b border-blue-50 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-3 w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      #12594
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Dec 1, 2021
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[78px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Frank Murlo
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[95px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      312 S Wilmette Ave
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[75px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        $847.69
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[78px] md:mt-0 mt-1 px-3 py-1 rounded-lg shadow-bs w-auto">
                      <div className="bg-green-500 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        New Order
                      </Text>
                    </div>
                    <Img
                      className="h-6 md:ml-[0] ml-[72px] w-6"
                      src="images/img_more.svg"
                      alt="more"
                    />
                  </div>
                  <div className="bg-white-A700 border-b border-blue-50 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-3 w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      2
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[54px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      #12490
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Nov 15, 2021
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Thomas Bleir
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[83px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Lathrop Ave, Harvey
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        $477.14
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[82px] md:mt-0 my-0.5 w-auto">
                      <DashboardStatusdelivery className="flex flex-col items-start justify-start w-auto" />
                    </div>
                    <Img
                      className="h-6 md:ml-[0] ml-[67px] w-6"
                      src="images/img_more.svg"
                      alt="more"
                    />
                  </div>
                  <div className="bg-white-A700 border-b border-blue-50 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-3 w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      3
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      #12306
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Nov 02, 2021
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        Bill Norton
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[104px] text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      5685 Bruce Ave, Portage
                    </Text>
                    <div className="flex flex-col items-center justify-start ml-10 md:ml-[0] w-auto">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtPoppinsRegular12"
                      >
                        $477.14
                      </Text>
                    </div>
                    <DashboardStatusdelivery className="flex flex-col items-start justify-start md:ml-[0] ml-[82px] md:mt-0 my-0.5 w-auto" />
                    <Img
                      className="h-6 md:ml-[0] ml-[67px] w-6"
                      src="images/img_more.svg"
                      alt="more"
                    />
                  </div>
            
                </List>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DashboardPage;
