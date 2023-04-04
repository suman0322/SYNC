import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [savedForm, setSavedForm] = useState({
        name: "",
        designation: "",
        contact: "",
        email: "",
        description: "",
        education: [],
        showImage: "none", 
        profilePhoto: "",
        add1: "", add2: "", pin: "",
        certificates: [], skills: [],
        experience: [], projects: [],
        softSkills: [], languages: [] 
    })

    const [form, setForm] = useState({ name: "", 
    designation: "", 
    contact: "", 
    email: "", 
    description: "",
    showImage:"none", 
    profilePhoto:"",
    education: [], 
    add1: "", add2: "", pin: "", 
    certificates: [], skills: [], 
    experience: [], projects: [], 
    softSkills: [], languages: [] })

    const [style, setStyle] = useState({
        pageColor:"#ffffff",
        pageBorder:"#000000",
        listHeadFont:"",
        listItemFont:"",
        listItemSize:"15",
        listHeadSize:"15",
        pageRadius:0,
        designationColor:"#000000",
        designationFont:"",
        designationSize: "15",
        descriptionFont: "",
        descriptionSize: "10",
        contactFont: "",
        contactSize: "10",
        nameFont:"",
        theme:"gray",
        descriptionColor:"#000000",
        listIcon:"CheckCircleIcon",
        pageDivider: "#000000",
        nameColor:"#000000",
        nameSize:"30",
        contactColor: "#000000",
        photoBorder:"#000000",
        photoRadius:0,
    })

    const [savedStyle,setSavedStyle] = useState({})

    return (
        <AppContext.Provider value={{ savedForm,setSavedForm,savedStyle,setSavedStyle, form, setForm, style, setStyle }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;