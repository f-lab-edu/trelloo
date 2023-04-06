import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import * as S from "./style";

interface Props {
  onDeleteListById: () => void;
}

function ListOptions({ onDeleteListById }: Props) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <S.ListOptionTitle>List actions</S.ListOptionTitle>,
    },
    {
      key: "2",
      label: <>Add card...</>,
    },
    {
      key: "3",
      label: <>Copy list...</>,
    },
    {
      key: "4",
      label: <>Move list...</>,
    },
    {
      key: "5",
      label: <>Watch</>,
    },
    {
      key: "6",
      label: <>Sort by...</>,
    },
    {
      key: "7",
      label: <div onClick={onDeleteListById}>Arcive this list...</div>,
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <EllipsisOutlined />
    </Dropdown>
  );
}

export default ListOptions;
