export default {
  home: {
    topCard: {
      title: "Hello from Vuex Title",
      subtitle: "Hello from Vuex Subtitle",
      description: "Some description from Vuex",
      img: "https://via.placeholder.com/100x100"
    },
    wrapper: {
      id: "#home-section",
      header:{
        string_id: "#home-section",
        header_title: "Vuex Header",
        header_subtitle: "Vuex Header Subtitle",
        header_img: "https://via.placeholder.com/200x150",
        header_description: "Vuex Header Description",
        header_buttonText: "Vuex Button",
        header_buttonLink: "/about"
      },
      widgets: [
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
        {
          title: "Titlew",
          subtitle: "Subtitle",
          img: "https://via.placeholder.com/200x150",
          description: "Some description",
          buttonText: "Some Text",
          buttonLink: "/some-awesome-description",
        },
      ],
      config: {
        configItemsA: {
          title: false,
          subtitle: false,
          description: false,
          buttonLink: false,
          buttonText: false,
          img: true,
        },
        configItemsB: {
          title: true,
          subtitle: true,
          description: true,
          buttonLink: true,
          buttonText: true,
          img: false,
        }
      }
    },
    lastCard: {
      title: "Last Card // Hello from Vuex Title",
      subtitle: "Last Card // Hello from Vuex Subtitle",
      description: "Last Card // Some description from Vuex",
      img: "https://via.placeholder.com/600x400"
    },
  },
  about: {
    topCard: {
      title: "Hello from Vuex Title ( TOP About )",
      subtitle: "Hello from Vuex Subtitle ( TOP About)",
      description: "Hello from Vuex Description ( TOP About )",
      img: "https://via.placeholder.com/200x200"
    },
    lastCard: {
      title: "Hello from Vuex Title ( LAST About )",
      subtitle: "Hello from Vuex Subtitle ( LAST About )",
      description: "Hello from Vuex Description ( LAST About )",
      img: "https://via.placeholder.com/200x200"
    }
  }
};