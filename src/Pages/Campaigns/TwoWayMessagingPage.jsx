import PageHeader from "../../components/layout/PageHeader";

const TwoWayMessagingPage = () => {
  return (

    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },


        {
          icon: "/navbar/campaigns/arrows-turn-to-dots.svg",
          label: "2-Way Messaging",
        },
      ]}
    />
  );
};

export default TwoWayMessagingPage;