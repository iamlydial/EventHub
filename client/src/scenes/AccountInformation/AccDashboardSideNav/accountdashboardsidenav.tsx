import React from "react";


const AccountDashboardSideNav: React.FC = () => {
    return (
        <div style={{ marginLeft: "5%", fontSize: "20px", color: "onyx"}}>
            <table className="border-separate border-spacing-2 p-5 mt-100">
  <thead>
    <tr>
      <th className="border border-slate-600 border-none p-2 text-onyx">Dashboard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-700 border-none p-2 text-onyx">Your Event</td>
    </tr>
    <tr>
      <td className="border border-slate-700 border-none p-2 text-onyx">Help Center</td>
    </tr>
  </tbody>
</table>
</div>
    );
};

export default AccountDashboardSideNav;