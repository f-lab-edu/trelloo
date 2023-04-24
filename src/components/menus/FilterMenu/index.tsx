import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface CheckedState {
  member: string[];
  dueComplete: boolean;
}

const plainOptions = ["Apple", "Pear", "Orange"];

const options = [
  { label: "No members", value: "none" },
  { label: "Card assigned to me", value: "user" },
];

function FilterMenu() {
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState<CheckedState>({
    member: [],
    dueComplete: false,
  });

  const searchParams = new URLSearchParams(window.location.search);

  const handleCheck = (key: string, values: CheckboxValueType[] | boolean) => {
    const stringValues = typeof values === "boolean" ? String(values) : values.map(String);

    setCheckedValues({
      ...checkedValues,
      [key]: stringValues,
    });
  };

  const mapKeyValues = (key: string, values: string[] | string) => {
    if (typeof values === "string") {
      return `${key}:${values}`;
    }
    if (values.length > 0) {
      return values.map((value: string[] | string) => `${key}:${value}`).join(",");
    }
  };

  const handleQueryString = () => {
    const checkedValueLists = Object.entries(checkedValues);
    const queryString = checkedValueLists
      .reduce((acc, [key, values]) => {
        return (acc += `${mapKeyValues(key, values)},`);
      }, "")
      .slice(0, -1);

    return queryString;
  };

  useEffect(() => {
    const queryString = handleQueryString();
    searchParams.set("filter", queryString);
    navigate(window.location.pathname + "?" + searchParams.toString());
  }, [checkedValues]);

  return (
    <S.Container>
      <Checkbox.Group
        options={plainOptions}
        onChange={(e) => {
          handleCheck("member", e);
        }}
      />
      <br />
      <br />
      <p>Members</p>
      <Checkbox.Group
        options={options}
        onChange={(e) => {
          handleCheck("member", e);
        }}
      />
      <br />
      <br />
      <Checkbox
        onChange={(e) => {
          handleCheck("dueComplete", e.target.checked);
        }}
        checked={Boolean(checkedValues.dueComplete)}
      >
        Marked as resolved
      </Checkbox>
      <Checkbox
        onChange={(e) => {
          handleCheck("dueComplete", !e.target.checked);
        }}
        checked={!checkedValues.dueComplete}
      >
        Marked as resolved
      </Checkbox>
    </S.Container>
  );
}

export default FilterMenu;
