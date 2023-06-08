import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import api from "../../apis/apis";
import { ThemeContext } from "../../ThemeContext";
import '../../components/Navbar.css';

const DonationPost = () => {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const { postId } = useParams();
  const [donation, setDonation] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  const fetchData = async () => {
    try {
      console.log("postId:", postId);
      const response = await api.getDonationPost(postId);
      if (response.$id) {
        setDonation(response);
      }
    } catch (error) {
      console.error("Error in fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await api.getDonationPost(postId);
      if (response.$id) {
        setDonation(response);
        if (response.comments) {
          setComments(JSON.parse(response.comments));
        }
      }
    } catch (error) {
      console.error("Error in fetching comments:", error);
    }
  };

  if (!donation) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const submitComment = async (event) => {
    event.preventDefault();
    const commentText = event.target.elements.comment.value;
    try {
      const updatedComments = [...comments, commentText];
      const response = await api.addComment(postId, updatedComments);

      if (response.$id) {
        setComments(updatedComments);
        alert("Comment submitted successfully!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error in submitting comment:", error);
    }
  };

  return (
    <div className={`navbar ${navbarCSS}`}>
      <div className="container mx-auto px-4">
        <div className="donationPost">
          <div className="donation-list">
            <div className="title">
              <p className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center">
                {donation.title}
              </p>
            </div>
            <div className="donation-card flex flex-wrap">
              <div className="donation-card-description w-full lg:w-1/2">
                <p className="mt-4">{donation.content}</p>
                <div className="donation-details mt-6">
                  <div className="donation-detail">
                    <h3 className="font-bold">Target Amount:</h3>
                    <p className="">${donation.amount}</p>
                    <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{
                          width: `${Math.floor(
                            ((donation.amount -
                              (Math.floor(Math.random() * donation.amount) %
                                donation.amount)) /
                              donation.amount) *
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="donation-detail">
                    <h3 className="font-bold">Email:</h3>
                    <p >
                      <u>
                        <a href={`mailto:${donation.email}`}>
                          {donation.email}
                        </a>
                      </u>
                    </p>
                  </div>
                  <div className="donation-detail">
                    <h3 className="font-bold">Phone:</h3>
                    <p >{donation.phone}</p>
                  </div>
                  <div className="donation-detail">
                    <h3 className="font-bold">Location:</h3>
                    <p >{donation.location}</p>
                  </div>
                </div>

                <div className="donation-actions mt-6">
                  <a
                    href="https://buy.stripe.com/test_3csaHCdRHe1e5QAdQQ"
                    className="payment-link"
                  >
                    <button
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Donate Now
                    </button>
                  </a>
                  <br />
                  <small>Posted at: {donation.date}</small>
                  <br />
                  <Link
                    to="/donations"
                    className="payment-link"
                  >
                    <button
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Go Back
                    </button>
                  </Link>
                </div>
              </div>

              <div className="donation-card-image w-full lg:w-1/2">
                <img src={donation.image} alt="donation-images" />
              </div>
            </div>

            <hr className="mt-8" />
            <div className="share-buttons mt-8">
              <p className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center text-black">
                Share this post
              </p>
              <div className="social-icons mt-4">
                <FaFacebook
                  onClick={shareOnFacebook}
                  size={50}
                  className="mr-4 cursor-pointer"
                />
                <FaTwitter
                  onClick={shareOnTwitter}
                  size={50}
                  className="mr-4 cursor-pointer"
                />
                <FaLinkedin
                  onClick={shareOnLinkedIn}
                  size={50}
                  className="mr-4 cursor-pointer"
                />
              </div>
            </div>
            <hr className="mt-8" />
            <div className="comments mt-8">
              <div className="comment-box">
                <p className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center text-black">
                  Comments
                </p>
                <div className="comment">
                  {comments.map((comment, index) => (
                    <p key={index}>
                      <br />
                      {comment}
                    </p>
                  ))}
                </div>

                <div className="comment-form mt-4">
                  <p className="text-2xl font-bold text-blue-700 mb-8 flex items-center justify-center text-black">
                    Add a comment
                  </p>
                  <form onSubmit={submitComment}>
                    <textarea
                      className="w-full p-2 rounded text-black"
                      placeholder="Comment"
                      name="comment"
                      required
                    />
                    <button
                      className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPost;
