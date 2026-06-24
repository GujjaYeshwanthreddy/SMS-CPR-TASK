import PageHeader from "../../components/layout/PageHeader";

const LivechatPage = () => {
  return (
    <PageHeader
      items={[
        { icon: "/navbar/house.svg" },
        {
          icon: "/navbar/comments.svg",
          label: "Live Chat",
        },
      ]}
    />
  );
};

export default LivechatPage;
