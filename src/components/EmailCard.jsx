import { useDispatch } from "react-redux";
import { fetchEmail } from "../redux/slices/EmailSlice";

export default function EmailCard({
  id,
  email,
  name,
  subject,
  date,
  short_desc,
  read,
  favorite,
}) {
  const dispatch = useDispatch();
  const newDate = new Date(date);
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

  function handleEmailClick() {
    dispatch(fetchEmail(id));
  }

  return (
    <div
      onClick={handleEmailClick}
      id='Email_Card'
      className={`flex gap-4 justify-start p-2 border-2 border-Border rounded-md cursor-pointer ${
        read ? "bg-ReadBg" : "bg-Background"
      }`}
    >
      <div>
        <p className='px-4 py-2 bg-Accent rounded-[50%] capitalize font-medium text-[1.2rem] text-[#fff]'>
          {name[0]}
        </p>
      </div>
      <div className='text-TextCol'>
        <div className='text-xs'>
          <p className='py-1'>
            <span>From:</span>{" "}
            <span className='font-bold'>
              {" "}
              {name} &lt;{email}&gt;
            </span>
          </p>
          <p className='py-1'>
            <span>Subject:</span> <span className='font-bold'> {subject}</span>
          </p>
          <p className='py-1'>{short_desc}</p>
        </div>
        <div className='flex gap-4 text-xs items-center'>
          <p className='py-1'>{indianDate}</p>
          {favorite && <p className='text-Accent font-bold'>Favorite</p>}
        </div>
      </div>
    </div>
  );
}
