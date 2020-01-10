export const getPosts = () => {
  return [
    {
      title: "Tatilin ilk yazısı - Haftalık-01",
      slug: "haftalik-01",
      details: require("./posts/10012020.md").default,
      date: "10.01.2020"
    },
    {
      title: "Merhaba, dünya!",
      slug: "merhaba-dunya!",
      details: require("./posts/merhaba.md").default,
      date: "16.12.2019"
    },
  ];
};
