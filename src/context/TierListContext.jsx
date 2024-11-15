// import type { UniqueIdentifier } from "@dnd-kit/core";
import {
    createContext,
    useState,
} from "react";

const inicialValue = [
    ["https://media.gettyimages.com/id/2165995884/es/foto/3d-render-of-futuristic-ai-data-glass-cubes-ai-innovation-and-cloud-technology.jpg?s=2048x2048&w=gi&k=20&c=Aje2ZcAUIqxrdDGSsoKl3FEJHxV4cIO0jpdtVkiffLM=", "https://media.gettyimages.com/id/1927195976/es/foto/portrait-of-scottish-fold-cat-lying-on-a-scratching-post.jpg?s=1024x1024&w=gi&k=20&c=RnBARnVU8aoA566dFtzycW54S6FTwDX8Tj-LH979Q70=", "https://media.gettyimages.com/id/1500238079/es/foto/touching-virtual.jpg?s=1024x1024&w=gi&k=20&c=sII_cDccoHEA7RXk-f5Mn2cyPYFBOR_aDM8-U7iIr0A="],
    [],
    ["https://media.gettyimages.com/id/1681158937/es/foto/flower-brain.jpg?s=1024x1024&w=gi&k=20&c=EoO_ZKpvHuEDpK6Hol_Ba6_Req1K8SbOQFNDFJuhtT0=", "https://media.gettyimages.com/id/689860960/es/foto/marine-life-of-raja-ampat-west-papua-indonesia.jpg?s=1024x1024&w=gi&k=20&c=_lkKnfjpNSiEoWfbKCRjCNaAJvAj4iI-AF556WVMKAo=", "https://media.gettyimages.com/id/2023139889/es/vector/abstract-technology-design-elements.jpg?s=1024x1024&w=gi&k=20&c=v_OfHZqavDIFgNJn31Ubfu9vDc_U0ssCDYKHFwconq0="],
    ["https://media.gettyimages.com/id/2112329817/es/foto/global-stock-market-chart-and-trading-board.jpg?s=1024x1024&w=gi&k=20&c=csjd4ID0HygHsV61Jvge786EveFjHRNPJBNlLIK1OcE=", "https://media.gettyimages.com/id/1784098902/es/foto/clouds-on-blue-sky.jpg?s=1024x1024&w=gi&k=20&c=l9HIxaC4qXyFs8aUecxidst3H0afwr2gbvhKnRxA3d4="],
    ["https://media.gettyimages.com/id/1565449882/es/foto/drone-image-looking-down-on-a-kayaker-in-the-noosa-river-queensland-australia.jpg?s=1024x1024&w=gi&k=20&c=kmp27PHd2mMJdSQ155_WhEWsri8hvP5qAAymGWswqak="]
]


export const TierListContext = createContext ({});

export const TierListContextProvider= ({
    children,
})=> {

    const [images, setImages] = useState(inicialValue);
    const [activeId, setActiveId] = useState();

    const addImages = (image, row) => {
    }


    const value = {
        images,
        setImages,
        addImages,
        setActiveId,
        activeId
    };

    return (
        <TierListContext.Provider value={value}>
            {children}
        </TierListContext.Provider>
    );
};