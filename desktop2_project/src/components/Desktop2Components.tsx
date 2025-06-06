import React, { useEffect, useState } from "react";
export const Desktop2_Components = () => 
{
    return (
        <div className = "webPage">
            <form className = "inputForm">
                <h1 className = "title">  
                    Personal info
                </h1>
                <h3 className = "subText">
                    Please provide your name, email address, and phone number
                </h3>

                <div className = "name">
                    <label className = "nameLabel">
                        Name
                    </label>
                    <input type = "text" className = "nameInput" placeholder="e.g.Stephen King">
                    </input>
                </div>

                <div className = "emailAdress">
                    <label className = "emailAdressLabel">
                        Email Adress
                    </label>
                    <input type = "email" className = "EmailAdressInput" placeholder="e.g.stephenking@lorem.com">
                    </input>
                </div>

                <div className = "phoneNumber">
                    <label className = "phoneNumberLabel">
                        Phone Number
                    </label>
                    <input type = "tel" className = "NumberInput" placeholder="e.g.+1 234 567 890">
                    </input>
                </div>

                <div className = "button">
                    <button className = "nextStepButton">
                        Next Step
                    </button>
                </div>
            </form>

            <div className = "side bar">

            </div>
        </div>
    )
}
export default Desktop2_Components;