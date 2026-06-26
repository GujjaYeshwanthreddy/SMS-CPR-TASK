import PageHeader from "../../components/layout/PageHeader";

const InboxPage = () => {
  return (
  
    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/file-chart-column.svg",
          label: "Reports",
        },


        {
          icon: "/navbar/reports/inbox.svg",
          label: "Inbox",
        },
      ]}
    />
  );
};

export default InboxPage;