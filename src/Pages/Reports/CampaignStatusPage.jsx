import PageHeader from "../../components/layout/PageHeader";

const CampaignStatusPage = () => {
  return (

    <PageHeader
      items={[
      
        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/file-chart-column.svg",
          label: "Reports",
        },


        {
          icon: "/navbar/reports/box-archive.svg",
          label: "Campaign Status",
        },
      ]}
    />
  );
};

export default CampaignStatusPage;