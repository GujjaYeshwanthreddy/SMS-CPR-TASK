import PageHeader from "../../components/layout/PageHeader";

const MediaLibraryPage = () => {
  return (
  
    <PageHeader
      items={[

        { icon: "/navbar/house.svg" },


        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },


        {
          icon: "/navbar/tools/photo-film-music.svg",
          label: "Media Library",
        },
      ]}
    />
  );
};

export default MediaLibraryPage;