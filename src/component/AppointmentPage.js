import React, { useState } from "react";
import "./AppointmentPage.css";
import backgroundImage from "../assets/background.jpg"; // Replace with your actual image path
import clinicImage from "../assets/clinic.jpg"; // Replace with your actual image path

const AppointmentPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        service: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const services = [
        "Facial Treatment",
        "Microdermabrasion",
        "Chemical Peel",
        "Laser Therapy",
        "Acne Treatment",
        "Anti-Aging",
        "Hydration Treatment",
        "Skin Tightening",
        "Hair Removal",
        "Pigmentation Correction",
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.date) errors.date = "Date is required";
        if (!formData.service) errors.service = "Service type is required";

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form data:", formData);
            alert("Appointment requested successfully!");
            setFormData({
                name: "",
                email: "",
                date: "",
                service: "",
            });
            setFormErrors({});
        }
    };

    return (
        <div className="appointment-page">
            <div
                className="appointment-form-section"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="appointment-form-container">
                    <h2>Request for your consultation</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && (
                                <span className="error">{formErrors.name}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && (
                                <span className="error">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {formErrors.date && (
                                <span className="error">{formErrors.date}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Type of Service:</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="">Select a service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            {formErrors.service && (
                                <span className="error">{formErrors.service}</span>
                            )}
                        </div>
                        <button type="submit" className="appointment-button">
                            Request Appointment
                        </button>
                    </form>
                </div>
            </div>
            <div className="clinic-info-section">
                <img src={clinicImage} alt="Clinic" className="clinic-image" />
                <div className="clinic-info">
                    <h2>Dermique Clinic</h2>
                    <p>
                        Welcome to Dermique Clinic. We offer a range of services to keep
                        your skin healthy and beautiful. Our expert team is dedicated to
                        providing the best care for our clients. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vel optio recusandae eveniet possimus
                        animi repellat eaque, corporis libero sunt ipsam perspiciatis magnam
                        porro consectetur. Distinctio sed ipsa neque. Unde harum facilis
                        illo dolorem ea possimus totam ex et, in consectetur? Ea possimus
                        illum, earum nobis velit vitae ipsa delectus quis? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Officiis assumenda laudantium
                        corporis provident dolorem unde eum eaque consectetur iure veritatis
                        quaerat molestiae reprehenderit minima, cupiditate beatae?
                        Consequuntur ea, assumenda exercitationem, error, molestias sunt
                        officiis doloribus ipsum aut voluptatibus optio tempora totam libero
                        velit ut amet alias voluptates pariatur necessitatibus delectus
                        quasi. Aliquam facere inventore at incidunt vero dolor atque maiores
                        necessitatibus iusto vel recusandae ducimus blanditiis est cumque
                        explicabo amet magnam, esse corporis placeat fugit quas. Expedita,
                        nobis voluptatum aliquam placeat sunt blanditiis consectetur.
                        Recusandae nesciunt a voluptates facere eaque dicta delectus ipsum
                        asperiores quidem, expedita eum debitis omnis voluptatem error
                        explicabo vero commodi maxime dolorem soluta laboriosam enim
                        laudantium! Quas deleniti mollitia ullam explicabo impedit enim
                        sapiente reprehenderit dolorum non in quos id quisquam ipsum atque
                        architecto tenetur doloremque fuga culpa nam rem pariatur, quam sunt
                        harum debitis. Temporibus similique, non repellat quia doloremque
                        reiciendis repellendus minus aliquid doloribus, tempora natus veniam
                        voluptate asperiores. Labore aut sed architecto nostrum minus quis
                        consequuntur totam ducimus, voluptatem corrupti magni. Maiores,
                        pariatur est. Deserunt voluptatum quasi nisi atque non hic voluptas
                        ut nihil unde aut, libero pariatur, animi repellat, sit sed omnis.
                        Consectetur ab earum velit maiores fugiat iure voluptate quibusdam
                        repellendus.
                    </p>
                    <p>Address: 123 Skin Care Ave, Dermatology City, DC 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@dermique.com</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;
