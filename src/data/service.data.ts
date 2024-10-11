import ServiceModel from "../types/service.model";
import assets from "../assets";


const ServicesList: ServiceModel[] = [
    {
        Title: "Stationery",
        Picture: assets.Images.Stationery,
        IsStarted: true,
        Route: "/stationery"
    },
    {
        Title: "Professional Painting Service",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },
    {
        Title: "Plumbing Services",
        Picture: assets.Images.Repair,
        IsStarted: false
    },
    {
        Title: "Delivery Services",
        Picture: assets.Images.Delivery,
        IsStarted: false
    },
    {
        Title: "Auto Car Service",
        Picture: assets.Images.Car,
        IsStarted: false
    },
    {
        Title: "MinLitazez Products: Electronics",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },
    {
        Title: "MinLitazez Products: Clothing",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },
    {
        Title: "Cleaning Service",
        Picture: assets.Images.Cleaning,
        IsStarted: false
    },
    {
        Title: "Handyman Service",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },
    {
        Title: "Cylinder Service",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },
    {
        Title: "Grocery Service",
        Picture: assets.Images.Stationery,
        IsStarted: false
    },

]

export default ServicesList;