import styles from "../PlateSuccess/PlateSuccess.module.scss"
import styleOrange from "./PlateFail.module.scss"
import iconClose from "../../images/iconCloseButton.svg"
import iconFail from "../../images/iconFail.svg"

export default function PlateFail() {
  return (
    <div className={styleOrange.plateBlock}>
      <img
        src={iconFail}
        className={styles.iconGreenDone}
        alt="Иконка ! на оранжевом фоне"
      />

      <div className={styles.textBlock}>
        <h3 className={styles.textTitle}>
          Сотрудник не выполнил последний ИПР.
        </h3>
        <p className={styles.textMotivation}>
          Возможно задач было слишком много? Узнайте у сотрудника, что пошло не
          так, и составьте новый план для развития.
        </p>
      </div>
      <button className={styleOrange.iconClose} type="button">
        <img src={iconClose} alt="Кнопка закрытия" />
      </button>
    </div>
  )
}
