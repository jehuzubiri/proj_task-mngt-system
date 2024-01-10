import React, { useRef, useState } from "react";

//HELPERS
import { SubTaskDetails, TaskDetails } from "@/helpers/Model";

//PLUGINS
import { PlusOutlined } from "@ant-design/icons";
import { FormInstance } from "antd";
import { Form, Input, Tag, Select, Space, Button, Divider } from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";

const TMCreateTaskForm: React.FC<{
  form: FormInstance<any>;
  formData: TaskDetails;
  setFormData: React.Dispatch<React.SetStateAction<TaskDetails>>;
  onFinish: () => void;
  stName: string;
  setStName: React.Dispatch<React.SetStateAction<string>>;
  stItems: string[];
  setStItems: React.Dispatch<React.SetStateAction<string[]>>;
  drawerOnClose: () => void;
}> = ({
  form,
  formData,
  setFormData,
  onFinish,
  stName,
  setStName,
  stItems,
  setStItems,
  drawerOnClose,
}) => {
  //plugins
  const inputRef = useRef<any>(null);

  //states
  const required: { required: boolean; message: string } = {
    required: true,
    message: "This field is required.",
  };

  //functions
  const onNameChange = (event: any) => {
    event.preventDefault();
    setStName(event.target.value);
  };

  const addItem = (e: any): void => {
    e.preventDefault();
    if (stName === "") return;
    setStItems([...stItems, stName]);
    setStName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  //custom components
  const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="blue"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ margin: 3 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <>
      <Form
        name="createusergroup"
        form={form}
        layout="vertical"
        initialValues={{}}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item label="Task Label" name="title" rules={[required]}>
          <Input
            placeholder="Please input task label"
            value={formData.title}
            onChange={(e) => {
              const title = e.target.value;
              setFormData({
                ...formData,
                title,
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label={`Subtasks Selected: [${formData.subtasks.length}/${stItems.length}]`}
          name="subtasks"
        >
          <Select
            placeholder="Add & select multiple subtasks"
            mode="multiple"
            // maxTagCount="responsive"
            showSearch
            tagRender={tagRender}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Space
                  style={{
                    padding: "0 8px 4px",
                  }}
                >
                  <Input
                    placeholder="Please enter task"
                    ref={inputRef}
                    value={stName}
                    onChange={onNameChange}
                    maxLength={300}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Add Subtask Item
                  </Button>
                </Space>
              </>
            )}
            options={stItems.map((item) => ({
              label: item,
              value: item,
            }))}
            onChange={(subT: string[]) => {
              const newData: SubTaskDetails[] = [];
              if (subT.length) {
                subT.forEach((title, idx) => {
                  newData.push({
                    isDone: false,
                    key: `subtask~${Date.now()}~${idx}`,
                    title,
                  });
                });
                setFormData({
                  ...formData,
                  subtasks: newData,
                });
              } else
                setFormData({
                  ...formData,
                  subtasks: [],
                });
            }}
          />
        </Form.Item>
      </Form>
      <div className="footeraction d-flex-row_center gap1">
        <Button
          disabled={!formData.title.length}
          type="primary"
          onClick={() => form.submit()}
        >
          Create
        </Button>
        <Button onClick={() => drawerOnClose()}>Cancel</Button>
      </div>
    </>
  );
};

export default TMCreateTaskForm;
