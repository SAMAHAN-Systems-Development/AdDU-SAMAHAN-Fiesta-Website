import React, {useEffect, useState} from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './CalendarModal.module.scss'
import CalendarModalContent from './CalendarModalContent/CalendarModalContent.jsx'
import Calendar from '../../../../data/calendarData.json'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CalendarModal=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className={styles.container}>
            {Calendar.events.map((item) =>{
                return(
                    <div key={item.title}>
                        <Button className={`${styles['button']} ${styles[item.itemNum]}`} variant="contained" color="primary" onClick={handleOpen}>
                            {item.title}
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box style={style}>
                                <CalendarModalContent title={item.title} sched={item.sched} itemNum={item.itemNum}/>
                            </Box>
                        </Modal>
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarModal