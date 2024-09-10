import React from 'react'
import { Link, useLocation } from "react-router-dom";


const Breadcrumb = () => {
    const location = useLocation()

    const pathNames = location.pathname.split("/").filter(x=> x)
    return (
        <nav area-label="breadcrumb">
            <ol className="flex space-x-2">
                <li>
                    <Link to="/">Home</Link>
                </li>

                {
                    pathNames.map((value, index)=>{
                        const path = `/${pathNames.slice(0, index+1).join("/")}`;
                        const isLast = index === pathNames.length -1;
                        return (
                            <React.Fragment key={index}>
                                <li>/</li>
                                {isLast ? (
                                    <span className='capitalize text-black font-bold'>
                                        {value}
                                    </span>
                                ) : (
                                    <Link className='capitalize' to={path}>{value}</Link>
                                )}
                            </React.Fragment>
                        )
                    })
                }
            </ol>
        </nav>
    )
    return (
        <div>
            
        </div>
    );
};

export default Breadcrumb;