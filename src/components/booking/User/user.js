import React, { Component, useEffect, useState  } from 'react';
import Gridviewcomponent from '../../common/gridviewcomponent';
import Profilecomponent from '../../common/profilecomponent';
import SweetAlert from 'sweetalert2-react';
import DatePicker from "react-datepicker";
import ToolTip from "../../common/toolTip";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Dropzone from '../../common/DropzoneExample';
import Form, { useForm } from 'antd/lib/form/Form';
import UserService from '../../../services/UserServics';
import { Table } from 'antd';



export default () => {
	const [activeTab, setActiveTab] = useState(1);

	const [show, setShow] = useState(false);

	const [form] = useForm();

	const [user, setUser] = useState();

	useEffect(()=> {
		UserService.getUser((v)=> {
			setUser(v);
		});
	}, []);
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Users</h1>
								<ol className="breadcrumb page-breadcrumb">
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										List View
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Grid View
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Profile
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 4 })}
										onClick={() => this.setState({ activeTab: 4 })}
									>
										Add
    			               </NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<TabContent activeTab={activeTab}>
							<TabPane tabId={1} className={classnames(['fade show'])}>
								<div className="table-responsive card">
								<Table dataSource={user} loading={!user} columns={[
											{
												title: "Name",
												dataIndex: 'name',
											},

											{
												title: "Phone Number",
												dataIndex: 'phoneNumber',
											},
									]}/>
									</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<Gridviewcomponent />
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<Profilecomponent />
							</TabPane>
							<TabPane tabId={4} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-lg-8 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Basic Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="row clearfix">
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>First Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Last Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Joining Date</label>
															<DatePicker
																className="form-control"
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<label>Gender</label>
														<select className="form-control show-tick">
															<option value="">-- Gender --</option>
															<option value="10">Male</option>
															<option value="20">Female</option>
														</select>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Department</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Position</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Phone</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Enter Your Email</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-sm-12">
														<div className="form-group mt-2 mb-3">
	<Dropzone />
															<small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
														</div>
													</div>
													<div className="col-sm-12">
														<div className="form-group mt-3">
															<label>Messages</label>
															<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
														</div>
													</div>
													<div className="col-sm-12">
														<button type="submit" className="mr-1 btn btn-primary">Submit</button>
														<button type="submit" className="btn btn-outline-secondary">Cancel</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="row clearfix">
													<div className="col-sm-12">
														<div className="form-group">
															<label>User Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-sm-12">
														<button type="submit" className="mr-1 btn btn-primary">Submit</button>
														<button type="submit" className="btn btn-outline-secondary">Cancel</button>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="form-group">
													<label>Facebook</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Twitter</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>LinkedIN</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Behance</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>dribbble</label>
													<input type="text" className="form-control" />
												</div>
												<button type="submit" className="mr-1 btn btn-primary">Submit</button>
												<button type="submit" className="btn btn-outline-secondary">Cancel</button>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
						</TabContent>
					</div>
				</div>

			</>
		);
	
}
