import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import Confetti from "react-confetti";
import api from "../../apis/apis";

const DonationForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        title,
        content,
        amount,
        email,
        phone,
        date,
        location,
        image,
      };

      const response = api.createDonationPost(data);
      console.log(response);

      if (response.$id) {
        setIsSubmitted(true);
        setTitle("");
        setContent("");
        setAmount("");
        setEmail("");
        setPhone("");
        setDate("");
        setLocation("");
        setImage("");
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error in creating Document:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="bg-gradient-to-b from-white-500 to-white-800 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
            {isSubmitted && (
              <div className="mb-4">
                <Confetti width={400} height={200} />
                <p className="text-lg text-green-700 font-semibold">
                  Donation post created successfully!
                </p>
              </div>
            )}
            {isError && (
              <div className="mb-4">
                <p className="text-lg text-red-700 font-semibold">
                  Error creating the donation post. Please try again. Check all
                  the fields
                </p>
              </div>
            )}
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center">
                <FaMoneyBillWave className="text-4xl mr-2" />
                Create a Donation Post
              </p>
              <hr className="border-t-2 border-blue-700 mb-6" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <IoIosCreate className="inline-block align-middle mr-2" />
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <IoIosCreate className="inline-block align-middle mr-2" />
                  Description:
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-32 bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <IoIosCreate className="inline-block align-middle mr-2" />
                  Target Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <AiOutlineMail className="inline-block align-middle mr-2" />
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <AiOutlinePhone className="inline-block align-middle mr-2" />
                  Phone:(10 digits only)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <AiOutlineCalendar className="inline-block align-middle mr-2" />
                  Target Date:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <AiOutlineEnvironment className="inline-block align-middle mr-2" />
                  Location(Enter city/village/town name):
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                >
                  <AiOutlineEnvironment className="inline-block align-middle mr-2" />
                  Image Link:
                </label>
                <input
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              {image && (
                <div className="mb-4">
                  <label
                    htmlFor="preview"
                    className="block text-gray-700 text-lg font-bold mb-2 flex items-center"
                  >
                    <AiOutlineEnvironment className="inline-block align-middle mr-2" />
                    Preview:
                  </label>
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-32 object-cover"
                  />
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isLoading ? "Creating..." : "Create Donation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DonationForm;
