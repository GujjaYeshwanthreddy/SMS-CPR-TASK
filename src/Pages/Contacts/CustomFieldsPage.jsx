import PageHeader from "../../components/layout/PageHeader";

const CustomFieldsPage = () => {
  return (

    <PageHeader
      items={[

        {
          icon: "/navbar/house.svg",
        },

        {
          icon: "/navbar/address-book.svg",
          label: "Contacts",
        },

        {
          icon: "/navbar/Contacts/list-check.svg",
          label: "Custom Fields",
        },
      ]}
    />
  );
};

export default CustomFieldsPage;