import PageHeader from "../../components/layout/PageHeader";

const HttpApiPage = () => {
  return (
    <PageHeader
      items={[
        { icon: "/navbar/house.svg" },
        {
          icon: "/navbar/code.svg",
          label: "API",
        },
        {
          icon: "/navbar/reports/inbox.svg",
          label: "HTTP API",
        },
      ]}
    />
  );
};

export default HttpApiPage;