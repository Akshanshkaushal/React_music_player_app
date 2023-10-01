import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";

const IconText = ({iconName, displayText, active, targetLink, onClick}) => {
    return (
        <Link to={targetLink} className="block">
            <div
                className="flex items-center justify-start cursor-pointer"
                onClick={onClick}
            >
                <div className="px-5 py-2">
                    <Icon
                        icon={iconName}
                        color={active ? "white" : "gray"}
                        fontSize={27}
                    />
                </div>
                <div
                    className={`${
                        active ? "text-white" : "text-gray-400"
                    } text-sm font-semibold hover:text-white`}
                >
                    {displayText}
                </div>
            </div>
        </Link>
    );
};

export default IconText;


// <Icon icon="ri:download-line" color="white" className="hidden md:block mx-2 sm:mx-4 sm:h-5 sm:w-5   hover:cursor-pointer"/>
// <Icon icon="ph:star-fill" color="white" className="hidden md:block mx-2 sm:mx-4 sm:h-5 sm:w-5 hover:cursor-pointer"/>