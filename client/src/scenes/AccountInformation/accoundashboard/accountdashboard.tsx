import React from "react";
import Heading from "../Heading/heading";
import AccountDashboardSideNav from "../AccDashboardSideNav/accountdashboardsidenav";
import AccountDashboardTabs from "../AccDashboardTabs/accountdashboardtabs";

const backgroundStyle: React.CSSProperties = {
  backgroundImage: 'url("/client/public/dutch-whiteSplash.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: '80%',
  marginTop: '5%',
};

function AccountDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen" style={backgroundStyle}>
      <Heading />
      <AccountDashboardSideNav />
      <AccountDashboardTabs />
    </div>
  );
}

export default AccountDashboard;