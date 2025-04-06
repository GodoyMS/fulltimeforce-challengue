import { AntDesign, Entypo, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export const menuItems = [
  {
    id: "home-button",
    route: "Home",
    icon: (
      <MaterialCommunityIcons
        name="gender-male-female"
        size={24}
        color="white"
      />
    ),
    label: "Lecafé",
  },
  {
    id: "messages-button",
    route: "Messages",
    icon:<AntDesign name="message1" size={24} color="white" />,
    label: "Messages",
  },
  {
    id: "matches-button",
    route: "Matches",
    icon:<AntDesign name="hearto" size={24} color="white" />,
    label: "Matches",
  },
  {
    id: "profile-button",
    route: "Profile",
    icon:<AntDesign name="user" size={24} color="white" />,
    label: "Mi Perfil",
  },
  {
    id: "tutorial-button",
    route: "Tutorial",
    icon:<Entypo name="popup" size={24} color="white" />,
    label: "Tutorial",
  },
  {
    id: "settings-button",
    route: "Settings",
    icon:<SimpleLineIcons name="settings" size={24} color="white" />,
    label: "Ajustes",
  },
];
