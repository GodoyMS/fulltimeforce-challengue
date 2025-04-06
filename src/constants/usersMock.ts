import { RelationShipEnum } from "@lib/types/Relationship";
import { IUser } from "@lib/types/User";


export const usersMock: IUser[] = [
  {
    id: "user-1",
    name: "Paola",
    age: 22,
    location: "Surco, Lima",
    relationships: RelationShipEnum.DATES,
    image: "https://i.pinimg.com/736x/46/f4/c7/46f4c7786d9ade1f947934028d0ba10d.jpg",
    interests: ["Viajar", "Leer", "Cocinar", "Citas"],
    features:["Calmada","Independiente"]
  },
  {
    id: "user-2",
    name: "Vilma",
    age: 24,
    location: "Los Olivos, Lima",
    relationships: RelationShipEnum.DATES,
    image: "https://i.pinimg.com/736x/58/f9/23/58f923e31ce3ecad2d6d544a7244331f.jpg",
    interests: ["Bailar", "Arte", "Cafecitos"],
    features:["Introvertida"]

  },
  {
    id: "user-3",
    name: "Lex",
    age: 28,
    location: "Surco, Lima",
    relationships: RelationShipEnum.FRIENDSHIP,
    image: "https://i.pinimg.com/736x/3d/c1/a3/3dc1a3342a7e523dee8cdb449b0fc664.jpg",
    interests: ["Videojuegos", "Gym"],
    features:["Extrovertida"]

  },
  {
    id: "user-4",
    name: "Brittany",
    age: 22,
    location: "Miraflores, Lima",
    relationships: RelationShipEnum.FRIENDSHIP,
    image: "https://i.pinimg.com/736x/57/07/5b/57075b1d88efe07d28696b8ed700f3f5.jpg",
    interests: ["Pasear por la ciudad", "Fotografía", "Ir a museos"],
    features:["Alegre", "Estudiosa"]

  },
  {
    id: "user-5",
    name: "Mila",
    age: 20,
    location: "SJL, Lima",
    relationships: RelationShipEnum.RELATIONSHIP,
    image: "https://i.pinimg.com/736x/16/15/05/1615053f9c0517532c099600c89750b5.jpg",
    interests: ["Netflix & chill", "Amante de los gatos", "Cantar en la ducha"],
    features:["Enérgica"]

  },
  {
    id: "user-6",
    name: "Paola",
    age: 22,
    location: "Ate, Lima",
    relationships: RelationShipEnum.RELATIONSHIP,
    image: "https://i.pinimg.com/736x/48/05/b0/4805b063cf2a7ff0f000b508cb3d6127.jpg",
    interests: ["Hacer journaling", "Tatuajes", "Helado", "Cine independiente"],
    features:["Calmada", "Estudiosa"]

  },
];

export const usersFriendShip=usersMock.filter((e)=>e.relationships===RelationShipEnum.FRIENDSHIP)
export const usersDates=usersMock.filter((e)=>e.relationships===RelationShipEnum.DATES)
export const usersRelationship=usersMock.filter((e)=>e.relationships===RelationShipEnum.RELATIONSHIP)