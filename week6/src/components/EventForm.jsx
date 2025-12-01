import React from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList, MultiSelect } from "@progress/kendo-react-dropdowns";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import "../components/kendo-theme.scss"; 
import "@progress/kendo-theme-default/dist/all.css";

const required = (value) => (value ? "" : "This field is required");


const eventTypes = ["Yoga", "Zumba", "Cardio"];
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const EventForm = () => {
  const handleSubmit = (dataItem) => {
    console.log("Form Data:", dataItem);
    alert("Event Booking Successful!");
  };

  return (
    <div className="event-booking-container">
      <div className="event-booking-form">
        <h2 className="title">Event Booking Form</h2>
        <Form
          onSubmit={handleSubmit}
          render={(formRenderProps) => (
            <form onSubmit={formRenderProps.onSubmit} className="form-fields">
              <div className="inputs">
                <Field label="Full Name" name="fullName" validator={required} component={Input} />
                <Field label="Email" name="email" type="email" validator={required} component={Input} />
                <Field label="Phone Number" name="phone" type="tel" validator={required} component={Input} />
                <Field label="Event Type" name="eventType" data={eventTypes} validator={required} component={DropDownList} rounded="medium"/>
                <Field label="Select Slot" name="slotDate" validator={required} component={DatePicker} rounded="medium" />
                <Field label="Select Days" name="days" data={weekdays} validator={required} component={MultiSelect} tagMode="single" rounded="medium"/>
              </div>

              <div className="agreement">
                <Field label="I agree to the Terms and Conditions" name="terms" validator={required} component={Checkbox} />
                <Button type="submit" primary={true} fillMode="solid" rounded="medium" className="submit-btn">
                  Book Event
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default EventForm;
