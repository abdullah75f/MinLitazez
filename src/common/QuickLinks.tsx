import React from "react";
import { IconType } from "react-icons";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";



export const AddressLink: React.FC<{ icon: IconType, text: string, link: string }> = (prop) => {
    return (
        <p className="w-auto no-underline cursor-pointer text-main-1" >
            <prop.icon className="inline-block" />
            <a href={prop.link} target="_blank" className="inline-block px-1 hover:text-accent">{prop.text}</a>
            <IoCopy className="inline-block hover:text-accent" onClick={() => { navigator.clipboard.writeText(prop.text); toast.success("Copied to Clipboard!") }} />
        </p>
    )
}


export const LinkButton: React.FC<{ icon: string, text: string, link: string }> = (prop) => {
    return (
        <a href={prop.link} target="_blank" className="flex items-center p-4 space-x-4 text-lg transition-all duration-300 border cursor-pointer rounded-2xl text-main-1 border-accent hover:bg-accent hover:shadow-md w-96">
            <img className="h-12" src={prop.icon} alt="Icon" />
            <p className="text-5xl">{prop.text}</p>
        </a>

    )
}

export const CustomButton: React.FC<{ icon?: string, text: string, link: string }> = (prop) => {
    return (
        <a href={prop.link} target="_blank" className="flex items-center p-1 space-x-1 transition-all duration-300 border rounded-lg cursor-pointer bg-main-1 hover:bg-main-8 hover:shadow-md">
            {/* <div className="bg-white rounded-[50%] object-cover"> */}
            {prop.icon && (
                <img className="h-4" src={prop.icon} alt="Icon" />
            )}
            {/* </div> */}
            <p className="text-lg text-bold text-main-9">{prop.text}</p>
        </a>

    )
}