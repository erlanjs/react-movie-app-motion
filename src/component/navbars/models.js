import { MDBIcon } from "mdb-react-ui-kit";

export const navs = [
  {
    title: "Home",
    navs: [
      {
        icon: <MDBIcon fas icon="home" className="text-xl" />,
        title: "Home",
      },
      {
        icon: <MDBIcon fas icon="shield-alt" />,
        title: "Community",
      },
      {
        icon: <MDBIcon fas icon="compass" />,
        title: "Discover",
      },
      {
        icon: <MDBIcon fas icon="award" />,
        title: "Awards",
      },
      {
        icon: <MDBIcon fas icon="user-alt" />,
        title: "Celebs",
      },
    ],
  },
  {
    title: "Library",
    navs: [
      {
        icon: <MDBIcon far icon="clock" />,
        title: "Recent",
      },
      {
        icon: <MDBIcon fas icon="star" />,
        title: "Top rated",
      },
      {
        icon: <MDBIcon fas icon="cloud-download-alt" />,
        title: "Downloaded",
      },
    ],
  },
  {
    title: "Category",
    navs: [
      {
        icon: <MDBIcon fas icon="tv" />,
        title: "TV - Show",
      },
      {
        icon: <MDBIcon fas icon="video" />,
        title: "Movie",
      },
      {
        icon: <MDBIcon fas icon="hamsa" />,
        title: "Anime",
      },
    ],
  },
  {
    title: "General",
    navs: [
      {
        icon: <MDBIcon fas icon="cog" />,
        title: "Settings",
      },
      {
        icon: <MDBIcon fas icon="shield-alt" />,
        title: "Log Out",
      },
    ],
  },
];
