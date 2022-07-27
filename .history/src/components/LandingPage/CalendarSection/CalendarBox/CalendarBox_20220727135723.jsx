import styles from './CalendarBox.module.scss';

const CalendarBox = (props) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          <div className={styles['title']}>{props.title}</div>
          <div className={styles['content']}>
            
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis fringilla magna. Praesent ultrices sapien id nisi venenatis cursus. Sed fringilla varius mauris, id elementum elit molestie et. Suspendisse faucibus venenatis maximus. Praesent vitae diam vestibulum ipsum lobortis posuere. Donec tempus malesuada posuere. Vivamus vehicula, sem at interdum porttitor, nulla elit consectetur ante, scelerisque euismod tellus eros vitae lacus. Donec vel urna eget eros mattis volutpat eget viverra mi. Nullam ornare mauris sapien, eu tincidunt nunc facilisis eget. Suspendisse sed interdum massa. Vestibulum nisl dolor, interdum sed enim eleifend, commodo tincidunt urna. In id est mattis, elementum dui sit amet, tincidunt enim. Phasellus vel ante vulputate, pretium nunc eget, feugiat turpis. Phasellus hendrerit lobortis justo, sit amet pellentesque ante lobortis eu. Morbi fermentum nisi sed sagittis vestibulum.

Maecenas non nisl in elit dapibus varius nec vitae ante. Donec euismod leo ut ultrices aliquam. Duis ornare, sem eu pulvinar commodo, nunc metus laoreet urna, in commodo neque dui a augue. Sed varius a erat ut gravida. Suspendisse potenti. In ac sem tortor. Donec sed posuere erat. In volutpat, tortor at vulputate euismod, nibh eros sodales eros, sed cursus lectus purus sit amet dui. Nulla tempor gravida eros, id finibus felis scelerisque at. Phasellus nec luctus metus. Proin scelerisque tristique nisi, eu egestas nunc varius rhoncus.

In quis laoreet ante. In aliquam est ornare tincidunt sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur massa in felis feugiat, sodales dictum turpis tempor. Sed suscipit auctor tortor eget blandit. Sed lacus mi, dictum id ornare eget, hendrerit vel ipsum. Vestibulum condimentum, elit et ultrices hendrerit, quam ex faucibus ex, eget bibendum erat odio quis libero. Curabitur eu ex vitae libero vehicula ultricies. Donec sed sapien sagittis, feugiat felis nec, ultricies lectus. Duis eget volutpat augue. Vivamus tellus metus, tempus vitae mattis id, aliquet in magna.
          </div>
        </div>
    </div>
  )
}

export default CalendarBox