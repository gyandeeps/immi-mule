import React, { useState } from "react";
import { Button, Form, Modal, Input, DatePicker } from "antd";
import { BankOutlined } from "@ant-design/icons";
import moment, { Moment } from "moment";
import { CaseAddType } from "../../types/case-types";

type AddCaseProps = {
    onUpload: (attributes: CaseAddType) => void;
};

const AddCase: React.FC<AddCaseProps> = ({ onUpload }) => {
    const [isModalOpen, changeModelOpen] = useState(false);
    const [form] = Form.useForm();
    const flipModelState = () => {
        changeModelOpen(!isModalOpen);
        form.resetFields();
    };

    const onSubmit = () =>
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onUpload({
                    caseId: values.caseId,
                    receiptDate: values.receiptDate as Moment
                });
                flipModelState();
            })
            .catch(() => {});

    return (
        <>
            <Button onClick={flipModelState}>
                <BankOutlined /> Add Case
            </Button>
            <Modal
                title="Add Case"
                visible={isModalOpen}
                onOk={onSubmit}
                confirmLoading={false}
                onCancel={() => changeModelOpen(false)}
            >
                <Form form={form}>
                    <Form.Item
                        name="caseId"
                        label="Case Number"
                        rules={[
                            {
                                required: true,
                                message: "Please share your receipt number"
                            }
                        ]}
                    >
                        <Input maxLength={13} />
                    </Form.Item>
                    <Form.Item
                        name="receiptDate"
                        label="Receipt Date"
                        rules={[
                            {
                                required: true,
                                message: "Receipt date is needed"
                            }
                        ]}
                    >
                        <DatePicker
                            disabledDate={(current) =>
                                current && current > moment().endOf("day")
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddCase;
