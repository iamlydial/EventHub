import React from "react";
import Heading from "../Heading /heading";
import AccountDashboardSideNav from "../AccDashboardSideNav/accountdashboardsidenav";
import AccountDashboardTabs from "../AccDashboardTabs/accountdashboardtabs";




const backgroundStyle = {
  backgroundImage: 'url("/dutch-whiteSplash.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundSize: '80%',
  marginTop: '5%',
  
};

function AccountDashboard() {
    return (
      <div style={backgroundStyle}>
        <Heading />
        <AccountDashboardSideNav />
        <AccountDashboardTabs />
      </div>
    );
  }

  export default AccountDashboard;
  
 