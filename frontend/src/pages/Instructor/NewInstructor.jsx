import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadCrumb";
import ComponentCard from "../../components/card/ComponentCard";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import Button from "../../components/ui/button/Button";

export default function NewInstructor() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        instructorName: "",
        email: "",
        assignedSchool: "",
        contact: "",
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
        console.log("New Instructor:", formData);
        navigate("/instructors");
    };

    return (
        <div className="text-lg font-medium text-gray-800 space-y-4">
            <PageBreadcrumb
                pathSegments={[
                    { name: "Dashboard", path: "/dashboard" },
                    { name: "Instructor", path: "/instructors" },
                    { name: "New Instructor" }
                ]}
            />

            <ComponentCard>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="px-1 pb-2 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div className="col-span-2">
                                    <Label htmlFor="instructorName">Instructor Name</Label>
                                    <Input id="instructorName" type="text" value={formData.instructorName} onChange={handleChange} />
                                </div>
                                <div className="col-span-2">
                                    <Label htmlFor="assignedSchool">Assigned School</Label>
                                    <Input id="assignedSchool" type="text" value={formData.assignedSchool} onChange={handleChange} />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div>
                                    <Label htmlFor="contact">Contact</Label>
                                    <Input id="contact" type="text" value={formData.contact} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button type="button" size="sm" variant="outline" onClick={() => navigate("/instructors")}>Cancel</Button>
                            <Button type="submit" size="sm">Save</Button>
                        </div>
                    </form>
            </ComponentCard>
        </div>
    );
}