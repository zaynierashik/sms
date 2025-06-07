import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import ComponentCard from "../../components/card/ComponentCard";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import Button from "../../components/ui/button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import Symbol from "../../assets/symbol.png"
import TeacherIcon from "../../assets/TeacherIcon.png"
import { IoIosArrowForward } from "react-icons/io";
import AddTeacherIcon from "../../assets/AddTeacher.png"

export default function NewInstructor() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        username: "",
        password: "",
        id: "001",
        designation: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Teacher:", formData);
        navigate("/instructors");
    };

    return (
        <div className="text-lg font-medium text-gray-800 p-6 space-y-6">
            <div className="flex items-center gap-3 mb-8">
    <img src={Symbol} className="h-5 w-5" alt="Symbol" />
    <IoIosArrowForward className="h-3 w-3 text-gray-400" />
    <img src={TeacherIcon} className="h-5 w-5" alt="Teacher" />
    <p className="text-gray-500 text-sm">Manage Teachers</p>
    <IoIosArrowForward className="h-3 w-3 text-gray-400" />
    <img src={AddTeacherIcon} className="h-5 w-5" alt="Teacher" />
    <p className="text-gray-500 text-sm">Add Teachers</p>
</div>

           <div className="flex items-center gap-2">
    <button
        onClick={() => navigate("/instructors")}
        className="flex items-center justify-center border border-gray-300 rounded bg-white w-8 h-8 hover:bg-gray-100 transition"
    >
        <IoIosArrowRoundBack className="h-6 w-6 text-gray-700" />
    </button>
    <h2 className="text-2xl font-semibold">Add Teacher</h2>
</div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Basic Information */}
                <ComponentCard title="Basic Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                placeholder="Placeholder"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                placeholder="Placeholder"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <Label>Gender</Label>
                        <div className="flex gap-6 mt-1">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={() => setFormData({ ...formData, gender: "Male" })}
                                />
                                Male
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={() => setFormData({ ...formData, gender: "Female" })}
                                />
                                Female
                            </label>
                        </div>
                    </div>
                </ComponentCard>

                {/* Login Details */}
                <ComponentCard title="Login Account Details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="username">User Name</Label>
                            <Input
                                id="username"
                                placeholder="Placeholder"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Placeholder"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </ComponentCard>

                {/* Contact Info */}
                <ComponentCard title="Contact Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                id="phone"
                                placeholder="Placeholder"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Placeholder"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                placeholder="Placeholder"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </ComponentCard>

                {/* Office Info */}
                <ComponentCard title="Office Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="id">ID</Label>
                            <Input
                                id="id"
                                value={formData.id}
                                readOnly
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="designation">Designation</Label>
                            <Input
                                id="designation"
                                placeholder="Eg: Teacher"
                                value={formData.designation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </ComponentCard>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}
