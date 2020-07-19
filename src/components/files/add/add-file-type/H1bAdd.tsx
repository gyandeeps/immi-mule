import React from "react";
import { Input, Upload, Form, Modal, DatePicker } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileAttributes, FileTypesEnum } from "../../../../types/file-types";

type H1bAddProps = {
    isModalOpen: boolean;
    changeModelOpen: (open: boolean) => void;
    onUpload: (attributes: FileAttributes) => void;
};

const H1bAdd: React.FC<H1bAddProps> = ({
    isModalOpen,
    changeModelOpen,
    onUpload
}) => {
    const [form] = Form.useForm();

    const onSubmit = () =>
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onUpload({
                    ...values,
                    file: values.file.file,
                    type: FileTypesEnum.H1B_VISA,
                    expiryDate: values.expiryDate.toISOString(),
                    fileName: values.fileName
                });
                changeModelOpen(false);
            })
            .catch(() => {});

    return (
        <Modal
            title="Add files"
            visible={isModalOpen}
            onOk={onSubmit}
            confirmLoading={false}
            onCancel={() => changeModelOpen(false)}
        >
            <Form form={form}>
                <Form.Item
                    name="fileName"
                    label="File Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input name of the file"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="expiryDate"
                    label="Expiry Date"
                    rules={[
                        {
                            required: true,
                            message: "Please select expiry date"
                        }
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="File" required>
                    <Form.Item
                        name="file"
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: "Please upload a file"
                            }
                        ]}
                    >
                        <Upload.Dragger
                            showUploadList={false}
                            customRequest={(request) => {
                                if (
                                    !form.getFieldValue("fileName") ||
                                    form.getFieldValue("fileName").length === 0
                                ) {
                                    const [
                                        ,
                                        ...nameArr
                                    ] = request.file.name.split(".").reverse();
                                    form.setFieldsValue({
                                        fileName: nameArr.join("")
                                    });
                                }
                            }}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default H1bAdd;
