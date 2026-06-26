import PageHeader from "../../components/layout/PageHeader";

const SubscribedPage = () => {
  return (

    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },

      
        {
          icon: "/navbar/hashtag.svg",
          label: "Numbers",
        },


        {
          icon: "/navbar/numbers/thumbs-up.svg",
          label: "Subscribed",
        },
      ]}
    />
  );
};

export default SubscribedPage;