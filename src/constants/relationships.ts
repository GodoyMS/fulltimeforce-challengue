import { RelationShipEnum } from "@lib/types/Relationship";
import FriendShipImg from "@assets/images/icons/friendship.png";
import DatesImg from "@assets/images/icons/dates.png";
import RelationShipImg from "@assets/images/icons/relationship.png";

export const relationshipList = [
  {
    id: "friendship-selector",
    name: RelationShipEnum.FRIENDSHIP,
    image: FriendShipImg,
    label:"Amistad"
  },
  {
    id: "dating-selector",
    name: RelationShipEnum.DATES,
    image: DatesImg,
    label:"Citas"
  },
  {
    id: "relationship-selector",
    name: RelationShipEnum.RELATIONSHIP,
    image: RelationShipImg,
    label:"Relación"
  },
];
