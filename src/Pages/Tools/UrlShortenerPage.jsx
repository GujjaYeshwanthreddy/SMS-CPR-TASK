import PageHeader from "../../components/layout/PageHeader";

const UrlShortenerPage = () => {
  return (
   
    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },


        {
          icon: "/navbar/tools/link.svg",
          label: "URL Shortener",
        },
      ]}
    />
  );
};

export default UrlShortenerPage;