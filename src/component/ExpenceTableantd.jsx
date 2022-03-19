import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import 'antd/dist/antd.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

import { Table, Tag, Space, Modal, Col, Row } from 'antd';
import { Form, Input, message, Button, DatePicker } from 'antd';
import { Select } from 'antd';

import moment from 'moment';


const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;
const { TextArea } = Input;

// import { Col,Row } from 'antd';
// import { Input } from '@mui/material';

const { Column, ColumnGroup } = Table;
const ExpenceTableantd = () => {

    const Featchdata = async () => {
        // alert("hello")
        const { data } = await axios.get("http://localhost:3003/create")
        // alert("hello")
        // console.log(data)
        setTableData(data)
    }

    const [Editng, setEditng] = useState(false)
    const [TableData, setTableData] = useState([])
    const [EditingClaim, setEditingClaim] = useState(null)
    // const [textarea, settextarea] = useState()
    useEffect(() => {
        Featchdata();
    }, [])
    const columns = [
        {
            key: '1',
            title: 'Claim Type',
            dataIndex: 'claimtype'
        },
        {
            key: '2',
            title: 'Expence ID',
            dataIndex: 'invoicenumber'
        },
        {
            key: '3',
            title: 'Client Name',
            dataIndex: 'name'
        },
        {
            key: '4',
            title: 'Type of Visit',
            dataIndex: 'visittype'
        },
        {
            key: '5',
            title: 'Amount',
            dataIndex: 'amout'
        },
        {
            key: '6',
            title: 'Action',
            render: (record) => {
                // console.log(record.invoicenumber)
                return (
                    <>
                        <NoteAltOutlinedIcon onClick={() => { EditRecord(record) }} />
                        <DeleteOutlinedIcon style={{ color: 'red' }} onClick={() => { DeleteRowdata(record.invoicenumber) }} />
                    </>
                )
            }
        }

    ]
    const DeleteRowdata = async (invoicenumber) => {
        //   alert(invoicenumber)

        Modal.confirm({
            title: 'Are You Sure Wnat to Delete Claim',
            okText: 'Yes',
            okType: 'danger',
            onOk: async () => {
                setTableData(pre => {
                    return pre.filter(claim => claim.invoicenumber !== invoicenumber)
                })

                try {
                    const resp = await axios.delete(`http://localhost:3003/delete/${invoicenumber}`)
                    // console.log(resp)
                    alert(`${invoicenumber} deleted sucessfuly`)
                }
                catch (e) {
                    console.Console('Error occure' + e)
                }
            }
        })

    }

    const EditRecord = async (record) => {
        setEditng(true)
        setEditingClaim({ ...record })

    }


    //form

    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const CancelEditing = () => {
        setEditng(false)
    };
    // const config = {
    //     rules: [
    //       {
    //         type: 'object',
    //         required: true,
    //         message: 'Please select time!',
    //       },
    //     ],
    //   };
    const SavedataToDB = async (EditingClaim) => {
        try {
            // router.patch('/update/:invoicenumber', UpdateClaim)
            const resp = await axios.patch(`http://localhost:3003/update/${EditingClaim.invoicenumber}`, EditingClaim)
            // console.log(resp)
            // alert(`${invoicenumber} deleted sucessfuly`)
        }
        catch (e) {
            console.Console('Error occure' + e)
        }
    }
    return (
        <>
            <Table
                columns={columns}
                dataSource={TableData}
                pagination={{ pageSize: 5 }}
            >

            </Table>

            <Modal
                Title="Edit Claim"
                visible={Editng}
                okText="Save"
                onCancel={() => {
                    setEditng(false)
                    setEditingClaim({})
                }}
                onOk={() => {

                    SavedataToDB(EditingClaim)
                    setTableData((pre) => {
                        return pre.map(claim => {
                            if (claim.invoicenumber === EditingClaim.invoicenumber) {
                                return EditingClaim
                            }
                            else {
                                return claim;
                            }
                        })
                    })
                    setEditng(false)
                    setEditingClaim({})
                    // console.log(EditingClaim )

                }}
            >
                <div style={{ marginTop: 20 }}>
                    <hr />
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    name="Claim Type"
                                    label="Claim Type"
                                    style={{ marginRight: 10 }}
                                >
                                    <Select defaultValue={EditingClaim?.claimtype} style={{ width: 120 }} onChange={(value) => {
                                        setEditingClaim((pre) => {
                                            return { ...pre, claimtype: value }
                                        })
                                    }}>
                                        <Option value="Travel">Travel</Option>
                                        <Option value="Food">Food</Option>
                                        <Option value="Mobile">Mobile</Option>
                                        <Option value="Other">Other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="Visit Type"
                                    label="Visit Type"
                                    style={{ marginRight: 10 }}
                                >
                                    <Select defaultValue={EditingClaim?.visittype} style={{ width: 120 }} onChange={(value) => {
                                        setEditingClaim((pre) => {
                                            return { ...pre, visittype: value }
                                        })
                                    }}>
                                        <Option value="Busness">Busness</Option>
                                        <Option value="industial">industial</Option>
                                        <Option value="Finatial">Finatial</Option>
                                        <Option value="Other">Other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="Client"
                                    label="Client"

                                // rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                >
                                    <Input
                                        value={EditingClaim?.name}
                                        defaultValue={EditingClaim?.name}
                                        onChange={(e) => {
                                            // alert('onchange')
                                            // console.log(EditingClaim.name)
                                            setEditingClaim((pre) => {
                                                return { ...pre, name: e.target.value }
                                            }

                                            )

                                        }
                                        }
                                        placeholder="Client Name" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    name="Invoice Number"
                                    label="Invoice Number"
                                    style={{ marginRight: 10 }}
                                >
                                    <Input
                                        value={EditingClaim?.invoicenumber}
                                        defaultValue={EditingClaim?.invoicenumber}

                                        onChange={(e) => {
                                            // alert('onchange')
                                            setEditingClaim((pre) => {
                                                return { ...pre, invoicenumber: e.target.value }
                                            }

                                            )
                                            // console.log(EditingClaim)
                                        }
                                        }
                                        placeholder="Invoice Number" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>

                                <Form.Item name="Invoice Date" label="Invoice Date"
                                    style={{ marginRight: 10 }}
                                // rules={[ { type: 'string'}]}
                                >
                                    <DatePicker value={EditingClaim?.date}
                                        // defaultValue={EditingClaim?.date}
                                        defaultValue={moment(EditingClaim?.date, dateFormat)}
                                        onChange={(date) => {
                                            setEditingClaim((pre) => {
                                                return { ...pre, date: date }
                                            })
                                        }} placeholder="Form date" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="Amount"
                                    label="Amount"

                                // rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                >
                                    <Input
                                        value={EditingClaim?.amout}
                                        defaultValue={EditingClaim?.amout}
                                        onChange={(e) => {
                                            // alert('onchange')
                                            setEditingClaim((pre) => {
                                                return { ...pre, amout: parseInt(e.target.value) }
                                            }

                                            )
                                            // console.log(EditingClaim)
                                        }
                                        }
                                        placeholder="Medium Input" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="Remarks"
                                    label="Remarks"

                                // rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                >
                                    <TextArea rows={4} value={EditingClaim?.remark}
                                        defaultValue={EditingClaim?.remark}
                                        onChange={(e) => {
                                            // alert('onchange')
                                            setEditingClaim((pre) => {
                                                return { ...pre, remark: e.target.value }
                                            }


                                            )
                                            // console.log(EditingClaim)
                                        }
                                        } placeholder="Please Enter Remark if any" />
                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default ExpenceTableantd