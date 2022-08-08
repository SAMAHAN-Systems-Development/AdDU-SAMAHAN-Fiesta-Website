import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TribalDivider, Footer} from '../ComponentIndex'
import EventCard from './EventCard/EventCard'
import styles from './TicketsPage.module.scss'
import { motion } from "framer-motion";

const TicketsPage = () => {

  const scale = {
    initial: {
      transform: "scale(0)",
    },
    animate: {
      transform: "scale(1)",
      transition: {
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <div className={styles.section}>
          <TribalDivider />
          <div className={styles.container}>
            <div className={styles.logo}>
              <motion.div
                className={styles.img_wrapper}
                variants={scale}
                whileHover={{y: "-30px"}}
              >
                <Link href="/">
                    <Image
                      src='/assets/header-logo.png'
                      alt='header logo'
                      layout='fill'
                      objectFit='contain'
                    />
                </ Link>
              </motion.div>
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                GET TICKETS FOR THE EVENTS BELOW
              </div>
              <div className={styles.boxes}>
                <div className={styles.row}>
                  <Link href="https://form.jotform.com/222144617881457">
                    <span>
                      <EventCard color='orange' events='SADYA 2022: OPENING CEREMONY | PAIR DANCE SHOWDOWN SHOWCASE'/>
                    </span>
                  </ Link>
                  <Link href="https://form.jotform.com/222161005584447">
                    <span>
                      <EventCard color='yellow'events='STAR SEARCH 2022'/>
                    </span>
                  </ Link>
                </div>
                <div className={styles.row}>
                  <Link href="https://form.jotform.com/222161783908460">
                    <span>
                    <EventCard color='pink'  events='MUSIKAHAN | CREATIVE SERIES SHORT FILM SHOWCASE'/>
                    </span>
                  </ Link>
                  <Link href="https://form.jotform.com/222161974262455">
                    <span>
                    <EventCard color='blue' events='SAYAWTENISTA | PAIR DANCE SHOWDOWN SHOWCASE | CLOSING CEREMONIES'/>
                    </span>
                  </ Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default TicketsPage