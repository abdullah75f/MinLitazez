import assets from "../assets";
import ServiceModel from "../types/service.model";

const ServicesList: ServiceModel[] = [
  {
    Title: "Stationery",
    Picture: assets.Images.Stationery,
    IsStarted: true,
    Route: "/stationery",
  },
  {
    Title: "MinLitazez Candle",
    Picture: assets.Images.Candle,
    IsStarted: true,
    Route: "/Candle",
  },
  {
    Title: "Painting",
    Picture: assets.Images.Painting,
    IsStarted: false,
  },
  {
    Title: "Plumbing",
    Picture: assets.Images.Plumbing,
    IsStarted: false,
  },
  {
    Title: "Delivery",
    Picture: assets.Images.Delivery,
    IsStarted: false,
  },
  {
    Title: "Auto Car",
    Picture: assets.Images.Car,
    IsStarted: false,
  },
  {
    Title: "Electronics",
    Picture: assets.Images.Electronics,
    IsStarted: false,
  },
  {
    Title: "Clothing",
    Picture: assets.Images.Clothing,
    IsStarted: false,
  },
  {
    Title: "Cleaning",
    Picture: assets.Images.Cleaning,
    IsStarted: false,
  },
  {
    Title: "Handyman",
    Picture: assets.Images.Repair,
    IsStarted: false,
  },
  {
    Title: "Cylinder",
    Picture: assets.Images.Cylinder,
    IsStarted: false,
  },
  {
    Title: "Grocery",
    Picture: assets.Images.Grocery,
    IsStarted: false,
  },
];

export default ServicesList;
