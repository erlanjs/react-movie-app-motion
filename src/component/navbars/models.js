import { MDBIcon } from "mdb-react-ui-kit";

export const navs = [
  {
    title: "Home",
    navs: [
      {
        icon: <MDBIcon fas icon="home" className="text-xl" />,
        title: "Home",
        link: "/",
      },
      {
        icon: <MDBIcon fas icon="shield-alt" />,
        title: "Community",
        link: "/community",
      },
      {
        icon: <MDBIcon fas icon="compass" />,
        title: "Discover",
        link: "/discover",
      },
      {
        icon: <MDBIcon fas icon="award" />,
        title: "Awards",
        link: "/awards",
      },
      {
        icon: <MDBIcon fas icon="user-alt" />,
        title: "Celebs",
        link: "/celebs",
      },
    ],
  },
  {
    title: "Library",
    navs: [
      {
        icon: <MDBIcon far icon="clock" />,
        title: "Recent",
        link: "/renect",
      },
      {
        icon: <MDBIcon fas icon="star" />,
        title: "Top rated",
        link: "/top-rated",
      },
      {
        icon: <MDBIcon fas icon="cloud-download-alt" />,
        title: "Downloaded",
        link: "/downloaded",
      },
    ],
  },
  {
    title: "Category",
    navs: [
      {
        icon: <MDBIcon fas icon="tv" />,
        title: "TV - Show",
        link: "/tv-show",
      },
      {
        icon: <MDBIcon fas icon="video" />,
        title: "Movie",
        link: "/movie",
      },
      {
        icon: <MDBIcon fas icon="hamsa" />,
        title: "Anime",
        link: "/anime",
      },
    ],
  },
  {
    title: "General",
    navs: [
      {
        icon: <MDBIcon fas icon="cog" />,
        title: "Settings",
        link: "/settings",
      },
      {
        icon: <MDBIcon fas icon="shield-alt" />,
        title: "Log Out",
        link: "/log-out",
      },
    ],
  },
];
