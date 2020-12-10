export default {
  // header: 'Hello from Vuex',
  // footer: 'Hello from Vuex Footer',
  home: {
    topCard: {
      title: "Hello from Vuex Title",
      subtitle: "Hello from Vuex Subtitle",
      description: "Some description from Vuex",
      img: "https://via.placeholder.com/100x100"
    },
    // wrapper: {
    //   wrapperHeader:{
    //     string_id: "#about-section",
    //     header_title: "Vuex Header",
    //     header_subtitle: "Vuex Header Subtitle",
    //     header_img: "https://via.placeholder.com/200x150",
    //     header_description: "Vuex Header Description",
    //     header_buttonText: "Vuex Button",
    //     header_buttonLink: "/about"
    //   },
    //   wrapperWrap:{
    //     title: "Title num 1 Vuex",
    //     subtitle: "Subtitle num 1 Vuex",
    //     description: "Some description num 1 Vuex",
    //     buttonText: "Some Text",
    //     buttonLink: "/some-awesome-description",
    //     img: "https://via.placeholder.com/400x200",
    //   },
    // },
    lastCard: {
      title: "Last Card // Hello from Vuex Title",
      subtitle: "Last Card // Hello from Vuex Subtitle",
      description: "Last Card // Some description from Vuex",
      img: "https://via.placeholder.com/800x600"
    },
  },
  configurations:{
    cfgA: {
      title: false,
      subtitle: false,
      description: false,
      buttonLink: false,
      buttonText: false,
      img: true,
    },
    cfgB: {
      title: true,
      subtitle: true,
      description: true,
      buttonLink: true,
      buttonText: true,
      img: false,
    }
  },
  wrapper: {
    wrapperHeader:{
      string_id: "#about-section",
      header_title: "Vuex Header",
      header_subtitle: "Vuex Header Subtitle",
      header_img: "https://via.placeholder.com/200x150",
      header_description: "Vuex Header Description",
      header_buttonText: "Vuex Button",
      header_buttonLink: "/about"
    },
    wrapperWrap:{
      title: "Title num 1 Vuex",
      subtitle: "Subtitle num 1 Vuex",
      description: "Some description num 1 Vuex",
      buttonText: "Some Text",
      buttonLink: "/some-awesome-description",
      img: "https://via.placeholder.com/400x200",
    },
  },
  // about:{}
};