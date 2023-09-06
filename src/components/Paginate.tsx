import React, {useState} from "react";
import LeftArrowIcon from '@/icons/LeftArrowIcon';
import RightArrowIcon from '@/icons/RightArrowIcon';
import style from '../styles/EventCard.module.css';


//creates the bar that allows user to toggle between pages
const Paginate = ({eventsPerPage, totalEvents, paginate, currentPage}:any,) => {
    const totalPages = Math.ceil(totalEvents/eventsPerPage);
    return(
        <div className = {style.pagebar}>
            {paginate(currentPage)}
            <button className = "pageLeftArrow"
            onClick={()=>{
                if (currentPage !== 1) {
                    paginate(currentPage - 1);
                } else{
                    paginate(totalPages);
                }
            }}>
                <LeftArrowIcon/>
            </button>
            {currentPage} of {totalPages}
            <button className = "pageRightArrow"
            onClick = {()=>{
                if (currentPage !== totalPages){
                    paginate(currentPage + 1);
                }else{
                    paginate(1);
                }
                }}>
                <RightArrowIcon />
            </button>
            
            
        </div>
    )

}

export default Paginate;