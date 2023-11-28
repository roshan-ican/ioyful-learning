import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
// import { useEffect } from "react";

let renderCount = 0;

export const YouTubeForm = () => {
  type FormValues = {
    username: string;
    email: string;
    channel: string;
    social: {
      reddit: string;
      facebook: string;
    };
    phoneNumbers: string[];
    phNumbers: {
      number: string;
    }[];
    age: number;
    dob: Date;
  };

  const form = useForm<FormValues>({
    defaultValues: {
      username: "Patrick Bateman",
      email: "",
      channel: "",
      social: {
        reddit: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
    mode: "all",
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,
    getValues,
    setValue,
    trigger,
    watch,
  } = form;

  // FORM
  const {
    errors,
    isDirty,
    touchedFields,
    dirtyFields,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  console.log("submitCount:", submitCount);
  console.log("isSubmitSuccessful:", isSubmitSuccessful);
  console.log("isSubmitted:", isSubmitted);
  console.log("submitCount:", submitCount);
  console.log("isValid:", isValid);
  console.log("dirtyFields:", dirtyFields);
  console.log("touchedFields:", touchedFields);
  console.log("isDirty:", isDirty);

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const handleGetValues = () => {
    console.log("Get values", getValues("social"));
  };

  const handleSetValue = () => {
    setValue("username", "Zoro", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = (data: FormValues) => {
    console.log(data, "FORM SUBMITTED");
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("🚀 Form errors", errors);
  };

  const redditValue = watch("social.reddit", "");

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // On every key stroke react hook form does not re-render the component like what traditional hooks and all do
  renderCount++;
  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />

          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "please enter email with correct format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported "
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await res.json();
                  return data.length === 0 || "Email alreadt exists";
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "Channel name is required",
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        {/* DATE OF BIRTH */}
        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: {
                value: true,
                message: "Date of birth is required",
              },
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required",
              },
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="reddit">Reddit</label>
          <input
            type="text"
            id="reddit"
            {...register("social.reddit", {
              required: "please enter your reddit username",
            })}
          />
          {/* <p className="error">{errors.social?.message}</p> */}
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "please enter your facebook username",
              // disabled: watch("social.reddit") === "",
            })}
            disabled={redditValue === ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0", {
              pattern: {
                value: /^\d{10}$/,
                message: "please enter the 10 digit phone number",
              },
            })}
          />
          <p className="error">
            {errors.phoneNumbers && errors.phoneNumbers[0]?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Primary phone number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1", {
              pattern: {
                value: /^\d{10}$/,
                message: "please enter the 10 digit phone number",
              },
            })}
          />
          <p className="error">
            {errors.phoneNumbers && errors.phoneNumbers[1]?.message}
          </p>
        </div>

        {/* LIST OF NUMBERS */}
        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add a new phone number
            </button>
          </div>
        </div>

        <button disabled={!isDirty || isSubmitting}>Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={handleGetValues}>
          GET IT
        </button>
        <button type="button" onClick={handleSetValue}>
          SET IT
        </button>
        <button type="button" onClick={() => trigger("channel")}>
          Validate
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
