import React, { useState, useEffect, useContext } from "react";
import "./EventListsPage.css";
import api from "../../apis/apis";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";

const GetEvents = () => {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async () => {
      try {
        const response = await api.getEventByCurrentLocation();
        // console.log("List of documents:", response.documents);
        setDocuments(response.documents);
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };
    listDocuments();
  }, []);

  if (documents.length > 0) {
    return (
      <React.Fragment>
        <div className={`navbar ${navbarCSS}`}>
          <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {documents.map((document) => (
              <div class="ml-6 mt-5 mb-12 mr-6">
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img class="rounded-t-lg" src={document.Images} alt="" />
                  <Link to={`/event/${document.$id}`}>
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </Link>
                </div>
                <div class="p-6 bg-gray-800 ">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {document.Name}
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {document.Region}, {document.City}
                  </p>
                  <Link to={`/event/${document.$id}`}>
                    <button
                      type="button"
                      class="inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={`navbar ${navbarCSS}`}>
          <p>No events in your areas</p>
        </div>
      </React.Fragment>
    );
  }
};

export default GetEvents;
