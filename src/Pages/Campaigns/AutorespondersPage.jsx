import PageHeader from "../../components/layout/PageHeader";

const AutorespondersPage = () => {
  return (
    <PageHeader
      items={[
        { icon: "/navbar/house.svg" },
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },
        {
          icon: "/navbar/campaigns/sliders.svg",
          label: "Autoresponders",
        },
      ]}
    />
  );
};

export default AutorespondersPage;