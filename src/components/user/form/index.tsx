import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";

interface UploadedFile {
  url: string;
}

export interface FormData {
  id?: number; // Optional for update functionality
  userName: string;
  email: string;
  access: string;
  registrationDate: string;
  status: string;
  kycRequest: string;
  thumbnail?: string | null;
}

interface UserFormProps {
  formHeading: string;
  initialData?: FormData; // Pre-filled data for update functionality
  onSubmit: (data: FormData) => void; // Submission handler
}

const validationSchema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  access: yup.string().required("Access is required"),
  registrationDate: yup.string().required("Registration Date is required"),
  kycRequest: yup.string().required("KYC Request is required"),
  status: yup.string().required("Status is required"),
});

const UserForm: React.FC<UserFormProps> = ({
  formHeading,
  initialData,
  onSubmit,
}) => {
  const [file, setFile] = useState<UploadedFile | null>(
    initialData?.thumbnail
      ? { url: initialData.thumbnail }
      : { url: "/images/laptop.webp" }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialData || {}, // Populate the form with initial data
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData); // Reset form with initial data if it changes
    }
  }, [initialData, reset]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile({ url: fileUrl });
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleFormSubmit = (data: FormData) => {
    onSubmit({ ...data, thumbnail: file?.url || null });
  };

  return (
    <div className="border border-[#D0D5DD] rounded-xl p-6 bg-white w-full">
      <h2 className="text-[18px] font-semibold text-dark mb-8">{formHeading}</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              className="form-control"
              type="text"
              id="userName"
              placeholder="Enter User Name"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="access">Access</label>
            <select
              id="access"
              className="form-control"
              {...register("access")}
            >
              <option value="Edit">Edit</option>
              <option value="View">View</option>
            </select>
            {errors.access && (
              <p className="text-red-500 text-sm">{errors.access.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="registrationDate">Registration Date</label>
            <input
              className="form-control"
              type="date"
              id="registrationDate"
              {...register("registrationDate")}
            />
            {errors.registrationDate && (
              <p className="text-red-500 text-sm">
                {errors.registrationDate.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" className="form-control" {...register("status")}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="kycRequest">KYC Request</label>
            <select
              id="kycRequest"
              className="form-control"
              {...register("kycRequest")}
            >
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
            {errors.kycRequest && (
              <p className="text-red-500 text-sm">{errors.kycRequest.message}</p>
            )}
          </div>
          <div className="form-group col-span-2">
            <div className="form-control relative flex flex-col items-center justify-center">
              <div className="absolute left-4 top-[50%] translate-y-[-50%]">
                {file ? (
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={file.url}
                      width={150}
                      height={80}
                      alt="Uploaded file"
                      className="w-[140px] h-[110px] object-cover rounded"
                    />
                    <button
                      onClick={removeFile}
                      type="button"
                      className="absolute top-2 right-2 bg-white text-gray-700 rounded-full shadow h-5 w-5 hover:bg-gray-100"
                      aria-label="Remove file"
                    >
                      ✕
                    </button>
                    <p className="text-[8px] text-white mt-2 bg-[#00000033] absolute bottom-0 left-0 w-full text-center">
                      Current Thumbnail
                    </p>
                  </div>
                ) : (
                  <Image
                    src="/images/thumb.png"
                    alt="Default Thumbnail"
                    height={80}
                    width={135}
                    className="w-[140px] h-[110px] object-fill rounded"
                  />
                )}
              </div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col justify-center items-center text-center"
              >
                <Image
                  src="/images/icon/upload-icon.png"
                  alt="Upload Icon"
                  height={40}
                  width={40}
                />
                <span className="mt-3 text-sm font-normal text-gray block">
                  <strong className="text-primary font-semibold">
                    Click to upload
                  </strong>{" "}
                  or drag and drop
                </span>
                <span className="text-gray-500 text-sm text-center mt-2">
                  SVG, PNG, JPG, or GIF (max: 800x400px)
                </span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 mt-6">
          <Link
            href="./"
            className="inline-flex items-center gap-4 px-4 py-3 bg-white text-dark border border-[#E4E7EC] rounded-lg text-sm font-medium"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-block px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
