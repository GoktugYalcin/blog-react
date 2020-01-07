export const getPosts = () => {
  return [
    {
      title: "Merhaba, dünya!",
      slug: "merhaba-dunya!",
      details: require("./posts/merhaba.md").default,
      date: "16.12.2019"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    },
  ];
};
