import React from "react"
import loading from "../../assets/images/forLoading/Group 1116606595.png"
export default function Loading() {
    return(
        <div className="w-[100%] h-[100vh] flex items-center justify-[center] ">
            <img className="w-[800px] ml-[40%] absulute" src={loading} alt="" />
        </div>
    )
}