import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./ReactForm.scss";

interface Inputs {
  id: string;
  name: string;
  shape: string;
  grade: string;
  week: string;
  thickness: number;
  height: number;
  width: number;
  prime: boolean;
  price: number;
  address: string;
}

export function ReactForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState<Inputs[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // check if id exist
  // const checkIfIdExists = async (id: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product/${id}`
  //     );
  //     return response.ok;
  //   } catch (error) {
  //     console.error("Error checking ID existence: ", error);
  //     return false;
  //   }
  // };

  // submit for PUT or Push
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      console.log("Form data successfully submitted: ", result);
      onSubmitShowData();
      alert("Form successfully submitted!");
    } catch (error) {
      console.error("Error submitting data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // show all data GET
  const onSubmitShowData = async () => {
    setShow(true);
    try {
      const response = await fetch(
        "https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Delete single data
  const deleteHandler = async (id: string) => {
    if (!id) return;

    try {
      const response = await fetch(
        `https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      onSubmitShowData();
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  // Delete all data
  const deleteAll = async () => {
    if (!allData) return;
    try {
      for (const item of allData) {
        deleteHandler(item.id);
      }

      alert("All entries successfully deleted!");
      onSubmitShowData();
    } catch (error) {
      console.error("Error deleting all entries: ", error);
      alert("Failed to delete all entries.");
    }
  };

  // render all steps
  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Materials</h2>
            {/* <label>
              Id:
              <input {...register("id", { required: true })} placeholder="Id" />
              {errors.id && <span>Id is required</span>}
            </label> */}
            <label>
              Name:
              <input
                {...register("name", { required: true })}
                placeholder="Name"
              />
              {errors.name && <span>Name is required</span>}
            </label>
            <label>
              Shape:
              <input
                {...register("shape", { required: true })}
                placeholder="Shape"
              />
              {errors.shape && <span>Shape is required</span>}
            </label>
            <label>
              Grade:
              <input
                {...register("grade", { required: true })}
                placeholder="Grade"
              />
              {errors.grade && <span>Grade is required</span>}
            </label>
            <label>
              Age of material (weeks):
              <input
                {...register("week", { required: true })}
                placeholder="Weeks"
              />
              {errors.week && <span>Week is required</span>}
            </label>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Amounts</h2>
            <label>
              Thickness (mm):
              <input
                type="number"
                {...register("thickness", { required: true })}
                placeholder="Thickness"
              />
              {errors.thickness && <span>Thickness is required</span>}
            </label>
            <label>
              Height (mm):
              <input
                type="number"
                {...register("height", { required: true })}
                placeholder="Height"
              />
              {errors.height && <span>Height is required</span>}
            </label>
            <label>
              Width (mm):
              <input
                type="number"
                {...register("width", { required: true })}
                placeholder="Width"
              />
              {errors.width && <span>Width is required</span>}
            </label>
            <label>
              Prime:
              <input type="checkbox" {...register("prime")} />
            </label>
            <label>
              Price ($):
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
              />
              {errors.price && <span>Price is required</span>}
            </label>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Address</h2>
            <label>
              Address:
              <input
                {...register("address", { required: true })}
                placeholder="Address"
              />
              {errors.address && <span>Address is required</span>}
            </label>
            <p>Please review your details before submitting the form.</p>
          </div>
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div>
      <div className="steps">
        <button
          className={`steps__button ${activeStep === 1 ? "active" : ""}`}
          onClick={() => setActiveStep(1)}
        >
          <span className="step">
            <span className="circle">1</span>
            <span>Step-1</span>
          </span>
        </button>
        <button
          className={`steps__button ${activeStep === 2 ? "active" : ""}`}
          onClick={() => setActiveStep(2)}
        >
          <span className="step">
            <span className="circle">2</span>
            <span>Step-2</span>
          </span>
        </button>
        <button
          className={`steps__button ${activeStep === 3 ? "active" : ""}`}
          onClick={() => setActiveStep(3)}
        >
          <span className="step">
            <span className="circle">3</span>
            <span>Step-3</span>
          </span>
        </button>
      </div>

      <div className="form-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container-inner"
        >
          {renderStepContent(activeStep)}
          <button
            className="submit_button"
            type="submit"
            disabled={isSubmitting || activeStep === 1 || activeStep === 2}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="navigation_buttons">
          <button
            className="back_button"
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep === 1}
          >
            Back
          </button>
          <button
            className="next_button"
            type="button"
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep === 3}
          >
            Next
          </button>
        </div>
        <hr />
        <div className="navigation_buttons">
          <button
            className="show_button"
            type="button"
            onClick={onSubmitShowData}
          >
            Show All
          </button>

          <button
            className="next_button"
            type="button"
            onClick={() => {
              setShow(false);
            }}
          >
            Hide all
          </button>
        </div>
        {show && allData && (
          <div className="show-all">
            <h3>{allData?.length ? "All Data" : "No data found"}</h3>
            <div>
              {allData.map((value) => (
                <div key={value.id} className="data-row">
                  {/* <div className="data-item">
                    <span className="data-key">
                      <strong>Id:</strong>
                    </span>
                    <span className="data-value">{value.id}</span>
                  </div> */}
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Name:</strong>
                    </span>
                    <span className="data-value">{value.name}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Shape:</strong>
                    </span>
                    <span className="data-value">{value.shape}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Grade:</strong>
                    </span>
                    <span className="data-value">{value.grade}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Thickness:</strong>
                    </span>
                    <span className="data-value">{value.thickness}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Height:</strong>
                    </span>
                    <span className="data-value">{value.height}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Width:</strong>
                    </span>
                    <span className="data-value">{value.width}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Prime:</strong>
                    </span>
                    <span className="data-value">
                      {value.prime ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Price:</strong>
                    </span>
                    <span className="data-value">{value.price}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-key">
                      <strong>Address:</strong>
                    </span>
                    <span className="data-value">{value.address}</span>
                  </div>
                  <div className="data-item">
                    <button
                      className="next_button"
                      type="button"
                      onClick={() => {
                        deleteHandler(value.id);
                        alert(
                          `Product with id = ${value.id} deleted successfully!`
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {!!allData?.length && (
              <button
                className="next_button"
                type="button"
                onClick={() => {
                  deleteAll();
                }}
              >
                Delete all
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
