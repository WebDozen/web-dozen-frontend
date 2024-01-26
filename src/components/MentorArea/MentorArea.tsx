import {
  Circle,
  CopyMIcon,
  IconButton,
  NoShape,
  PersonalManagerMIcon,
  SuperEllipse,
} from ".."
import styles from "./MentorArea.module.scss"
import style from "../EmployeeCard/EmployeeCard.module.scss"
import managerIcon from "../../images/mentorAva.svg"

interface statusProps {
  status: string
}

const MentorArea = ({ status }: statusProps) => {
  return (
    <div className={styles.mentorCopyAreaBlock}>
      <div className={styles.mentorAreaBlock}>
        <div className={styles.block}>
          <Circle size={32} imageUrl={managerIcon} />

          <div className={style.infoDescription}>
            <div className={styles.iconAndName}>
              <PersonalManagerMIcon className={styles.icon} />
              <h5 className={style.infoDescriptionName}>
                Степанов Игорь Викторович
              </h5>
            </div>
            <p className={style.infoDescriptionGrade}>
              Frontend-разработчик, Senior
            </p>
          </div>
        </div>
      </div>
      {status === "green" && (
        <IconButton
          view="primary"
          size={56}
          icon={CopyMIcon}
          style={{
            backgroundColor: "rgba(15, 25, 55, 0.1)",
          }}
        />
      )}
    </div>
  )
}

export default MentorArea
