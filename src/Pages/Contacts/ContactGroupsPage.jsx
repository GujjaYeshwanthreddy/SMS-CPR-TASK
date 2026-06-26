import PageHeader from "../../components/layout/PageHeader";

const ContactGroupsPage = () => {
  return (
    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/address-book.svg",
          label: "Contacts",
        },


        {
          icon: "/navbar/Contacts/layer-group.svg",
          label: "Contact Groups",
        },
      ]}
    />
  );
};

export default ContactGroupsPage;