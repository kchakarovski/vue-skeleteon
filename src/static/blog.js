export const blogData = {
  topCard: {
    title: "Title from Blog",
    subtitle: "Hello from Vuex Subtitle ( TOP BLOG)",
    description: "Hello from Vuex Description ( TOP BLOG )",
    img: "https://via.placeholder.com/200x200"
  },
  wrapper: {
    id: "#home-section",
    header: {
      string_id: "#home-section",
      header_title: "About BLOG",
      header_subtitle: "About Subtitle",
      header_img: "https://via.placeholder.com/200x150",
      header_description: "Vuex BLOG Description",
      header_buttonText: "Vuex Button",
      header_buttonLink: "/about"
    },
    widgets: [
      {
        title: "Lorem ipsum BLOG",
        subtitle: "Subtitle BLOG",
        img: "https://via.placeholder.com/200x150",
        description: "Some BLOG",
        buttonText: "Some Text",
        buttonLink: "/some-awesome-description"
      }
    ],
    config: {
      configItemsA: {
        title: false,
        subtitle: false,
        description: false,
        buttonLink: false,
        buttonText: false,
        img: true
      },
      configItemsB: {
        title: true,
        subtitle: true,
        description: true,
        buttonLink: true,
        buttonText: true,
        img: false
      }
    }
  },
  lastCard: {
    title: "Hello from Vuex Title ( LAST BLOG )",
    subtitle: "Hello from Vuex Subtitle ( LAST BLOG )",
    description: "Hello from Vuex Description ( LAST BLOG )",
    img: "https://via.placeholder.com/200x200"
  }
};
