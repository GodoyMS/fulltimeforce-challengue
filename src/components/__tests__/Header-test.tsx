import React from "react";
import renderer from "react-test-renderer";
import { DrawerActions } from "@react-navigation/native";
import Header from "@components/globals/header/Header";
import { useDrawerStatus } from "@react-navigation/drawer";

// Mock theme context
jest.mock("@context/themeContext", () => ({
  useThemeContext: () => ({
    setColors: jest.fn(),
  }),
}));

// Mock drawer status
jest.mock("@react-navigation/drawer", () => ({
  useDrawerStatus: jest.fn(() => "closed"),
}));

// Mock root navigation dispatch
jest.mock("@navigations/rootNavigations", () => ({
  dispatch: jest.fn(),
}));

// Mock icon from expo
jest.mock("@expo/vector-icons", () => ({
  AntDesign: () => "AntDesign",
  MaterialCommunityIcons: () => "MaterialCommunityIcons",
}));


describe("Header component", () => {
    it("renders correctly when drawer is closed", () => {
        // Mock drawer status to be closed
        const useDrawerStatus = require("@react-navigation/drawer").useDrawerStatus;
        useDrawerStatus.mockReturnValueOnce("close");
          
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toBeDefined();
      });
    
  it("renders nothing when drawer is open", () => {
    // Change mock drawer status to "open"
    const useDrawerStatus = require("@react-navigation/drawer").useDrawerStatus;
    useDrawerStatus.mockReturnValueOnce("open");
  
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toBeNull(); // Because the component returns null when drawer is open
  });
  

});
