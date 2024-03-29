import {
  Table,
  Typography,
  NoShape,
  ChevronRightShiftRightSIcon,
  TableCustomWrapper,
  StatusComponent,
  Skeleton,
} from "../ui-kit";
import styleTask from "./TaskList.module.scss";
import { getIdpData } from "../../services/selectors";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import type { TypeTask } from "../../services/idp/types";

import { handleOpenSidePanel } from "../../services/actions";

export default function TaskList() {
  const dispatch = useAppDispatch();

  const {
    idp: { tasks },
    loading,
  } = useAppSelector(getIdpData);

  const tableRowElement = (task: TypeTask) => (
    <Table.TRow
      key={task.id}
      onClick={() => {
        dispatch(handleOpenSidePanel(task));
      }}
    >
      <Table.TCell className={styleTask.cell}>
        <Typography.Text
          className={styleTask.cellText}
          view="primary-small"
          tag="p"
          defaultMargins={false}
          color="primary"
          style={{ fontFamily: "SF Pro Text" }}
        >
          {task.name}
        </Typography.Text>
        <StatusComponent slag_task={task.status.slug} />
        <NoShape
          className={styleTask.chevron}
          size={16}
          backgroundIcon={ChevronRightShiftRightSIcon}
          backgroundColor="transparent"
        />
      </Table.TCell>
    </Table.TRow>
  );

  return (
        <Skeleton visible={loading}>
        <div className={styleTask.table}>
          <TableCustomWrapper>
            <Table.THead rowClassName={styleTask.tableHead}>
              <Table.THeadCell className={styleTask.tableHeadCell} title="Задачи">
                Задачи
              </Table.THeadCell>
            </Table.THead>
            <Table.TBody>
              {tasks ? tasks.map((task) => tableRowElement(task)) : null}
            </Table.TBody>
          </TableCustomWrapper>
        </div>
    </Skeleton>
  );
}
