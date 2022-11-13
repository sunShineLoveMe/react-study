import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { PopOverContent } from './style'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'

export default function useBootstrapExample() {

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const handleToggle = () => {
        setShow(!show)
        fetchApiData()
    }
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{title}</Popover.Header>
          <Popover.Body dangerouslySetInnerHTML={{ __html: content }}>
          </Popover.Body>
        </Popover>
      );

    const fetchApiData = () => {
        let itemContainer = ""
        getGroupTransferQuantitySummaryByRegisterRegion().then(res => {
            if(res.success) {
                setTitle(res.obj.length)
                for(let i = 0; i<res.obj.length; i++) {
                    let tempContent = ""
                    tempContent = `<div className='pop-over-content-row'>
                                    <span className='pop-over-content-item'>${res.obj[i].registerRegion}</span>
                                    <span className='pop-over-content-item'>${res.obj[i].transferTotalWeight}</span>
                                    <span className='pop-over-content-item'>${res.obj[i].transferTotalQuantity}</span>
                                </div>`
                    itemContainer += tempContent              
                }
            }
            setContent(`<PopOverContent>${itemContainer}</PopOverContent>`)   
        })
    }

    return (
        <OverlayTrigger trigger="click" 
            placement="right"
            show={show}
            html={true}
            onToggle={handleToggle}
            overlay={popover}>
            <div>点击</div>
        </OverlayTrigger>
    )
}
