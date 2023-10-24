import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { emailMarkFavorite, emailMarkRead } from "../redux/slices/EmailSlice";
import { useEffect } from "react";

export default function MailBody() {
  const { emailId, emailSub, emailBody, emailDate, emailFavorite } =
    useSelector((state) => state.emails.showEmail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emailMarkRead({ id: emailId }));
  }, [emailId]);

  const newDate = new Date(emailDate);
  newDate.setMinutes(newDate.getMinutes() + 330);
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const indianDate = newDate.toLocaleString("en-IN", options);
  const cleanHtmlBody = DOMPurify.sanitize(emailBody);

  function handleFavoriteClick() {
    dispatch(emailMarkFavorite({ id: emailId }));
  }

  return (
    <>
      {emailId != "0" && (
        <div className='w-[70%] flex gap-4 justify-center items-start p-4 border-2 border-Border rounded-md'>
          <div>
            <p className='px-4 py-2 bg-Accent rounded-[50%] capitalize font-medium text-[1.2rem] text-[#fff]'>
              {emailSub[0]}
            </p>
          </div>
          <div className='text-TextCol'>
            <div className='flex justify-between px-4 py-2 mb-4'>
              <div>
                <p className='text-xl text-TextCol font-bold'>{emailSub}</p>
                <p className='text-sm text-TextCol py-2'>{indianDate}</p>
              </div>
              <div></div>
              <div>
                <button
                  onClick={handleFavoriteClick}
                  className={`${
                    emailFavorite ? "bg-Accent text-[white]" : ""
                  } px-2 py-1 text-sm rounded-xl`}
                >
                  {emailFavorite ? "Favorite" : "Mark as favorite"}
                </button>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: cleanHtmlBody }}></div>
          </div>
        </div>
      )}
    </>
  );
}
