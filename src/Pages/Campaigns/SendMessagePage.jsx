import React from "react";
import PageHeader from "../../components/layout/PageHeader";

const SendMessagePage = () => {
  return (
    <PageHeader
      items={[
        { icon: "/navbar/house.svg" },
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },
        {
          icon: "/navbar/campaigns/paper-plane.svg",
          label: "Send Message",
        },
      ]}
    />
  );
};

export default SendMessagePage;