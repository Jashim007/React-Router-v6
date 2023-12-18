import { useLoaderData } from "react-router-dom";
const ContactUs = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div className="p-10 m-10 border border-blue-700 flex flex-col items-center justify-center bg-blue-500 text-white rounded-md">
      <div className="text-2xl font-bold">Contact Us Page</div>
      <div className="text-2xl font-bold">{data.myData}</div>
    </div>
  );
}

export default ContactUs