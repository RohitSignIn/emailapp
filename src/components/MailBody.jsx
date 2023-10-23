import { useSelector } from "react-redux";

export default function MailBody() {
  const { emailId, emailName, emailSub, emailBody, emailDate, emailFavorite } =
    useSelector((state) => state.emails.showEmail);

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

  return (
    <>
      {emailId != 0 && (
        <div className='w-[70%] flex gap-4 justify-start p-4 border-2 border-Border rounded-md'>
          <div>
            <p className='px-4 py-2 bg-Accent rounded-[50%] capitalize font-medium text-[1.2rem] text-[#fff]'>
              {emailName[0]}
            </p>
          </div>
          <div className='text-TextCol'>
            <div className='flex justify-between p-4 my-4'>
              <p className='text-xl text-TextCol font-bold'>{emailName}</p>
              <p className='text-sm text-TextCol'>{indianDate}</p>
              <div>
                <button>Mark As Favorite</button>
              </div>
            </div>
            {emailBody}
          </div>
        </div>
      )}
    </>
  );
}
