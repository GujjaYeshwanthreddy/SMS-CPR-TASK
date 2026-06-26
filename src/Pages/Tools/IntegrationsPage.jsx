import PageHeader from "../../components/layout/PageHeader";

const IntegrationsPage = () => {
  return (

    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },


        {
          icon: "/navbar/tools/gear-code.svg",
          label: "Integrations",
        },
      ]}
    />
  );
};

export default IntegrationsPage;