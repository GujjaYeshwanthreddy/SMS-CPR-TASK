import PageHeader from "../../components/layout/PageHeader";

const ScheduleCampaignsPage = () => {
  return (
    <PageHeader
      items={[
        { icon: "/navbar/house.svg" },
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },
        {
          icon: "/navbar/campaigns/calendar-clock.svg",
          label: "Schedule Campaigns",
        },
      ]}
    />
  );
};

export default ScheduleCampaignsPage;