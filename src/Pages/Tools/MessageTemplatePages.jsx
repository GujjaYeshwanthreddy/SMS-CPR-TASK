import PageHeader from "../../components/layout/PageHeader";

const MessageTemplatePages = () => {
  return (

    <PageHeader
      items={[

        {
          icon: "/navbar/house.svg",
        },


        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },


        {
          icon: "/navbar/tools/envelope-open-text.svg",
          label: "Message Templates",
        },
      ]}
    />
  );
};

export default MessageTemplatePages;