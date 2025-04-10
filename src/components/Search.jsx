import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [keyword, setkeyword] = useState("")
    const navigate = useNavigate();

    const searhHandler = () => {
        navigate('/search?keyword=' + keyword)
    }

    return (
        <div>
            <div className="input-group ">
                <input type="text" onChange={(e) => setkeyword(e.target.value)} onBlur={searhHandler} className="form-control rounded rounded-start-5" placeholder="Search Products & Brands" aria-label="Username" aria-describedby="basic-addon1" />
                <button onClick={searhHandler} className="input-group-text rounded rounded-end-5"><i className='search' class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}
