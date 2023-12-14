import React from "react";
import Heading from "../Heading/heading";
import AccountDashboardSideNav from "../AccDashboardSideNav/accountdashboardsidenav";
import AccountDashboardTabs from "../AccDashboardTabs/accountdashboardtabs";
import mainBgCover from "../../../GalleryComponent/mainBgCover.jpg"

const backgroundStyle: React.CSSProperties = {
  backgroundImage: 'url("/client/public/dutch-whiteSplash.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: '80%',
  marginTop: '5%',
};

function AccountDashboard() {
  return (
    <div className="bg-cover bg center bg-no-repeat mt-10 " style={{ backgroundImage: `url(${mainBgCover})` }}>
      <Heading />
      {/* <AccountDashboard />  */}
      <AccountDashboardTabs />
    </div>
  );
};


export default AccountDashboard;

