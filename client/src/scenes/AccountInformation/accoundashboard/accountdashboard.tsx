import React from "react";
import Heading from "../Heading /heading";
import AccountDashboardSideNav from "../AccDashboardSideNav/accountdashboardsidenav";
import AccountDashboardTabs from "../AccDashboardTabs/accountdashboardtabs";
// import CreateEvent from "./scenes/createevent/CreateEvent";



const backgroundStyle = {
  backgroundImage: 'url("/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/assets/images/dutch-whiteSplash.jpg")',
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
  
 